const express = require("express");
const path = require("path");
const fs = require("fs");
const { marked } = require("marked");
// ===== Mermaid: Convert ```mermaid to <div class="mermaid"> =====
const renderer = new marked.Renderer();
const originalCode = renderer.code.bind(renderer);

renderer.code = (code, infoString, escaped) => {
  const lang = (infoString || "").trim().toLowerCase();

  // If Markdown ```mermaid code block, convert it to <div class="mermaid">...</div>
  if (lang === "mermaid") {
    return `<div class="mermaid">\n${code}\n</div>`;
  }

  // Other languages are handled by marked's default renderer
  return originalCode(code, infoString, escaped);
};

marked.setOptions({ renderer });

const expressLayouts = require("express-ejs-layouts"); // ⭐ import express-ejs-layouts

const app = express();
const PORT = process.env.PORT || 3000;

const rootDir = path.join(__dirname, "..");
const notesDir = path.join(rootDir, "notes");

// View engine & views path
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

// Static assets
app.use(express.static(path.join(rootDir, "public")));

// ⭐ Enable EJS Layouts
app.use(expressLayouts);
app.set("layout", "layout"); // Corresponds to views/layout.ejs

// ----------------- Routes -----------------

// Home: Landing Page (Full-screen Spline)
app.get("/", (req, res) => {
  res.render("home", {
    title: "Mengyu Wang - Profile",
    isLanding: true, // ⭐ Tell layout: this page is Landing
  });
});

// Portfolio / Projects
app.get("/projects", (req, res) => {
  res.render("projects", {
    title: "Mengyu Wang - Projects",
    isLanding: false,
  });
});

// Notes List
app.get("/notes", (req, res) => {
  const files = fs.readdirSync(notesDir).filter((f) => f.endsWith(".md"));

  const notes = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(notesDir, filename);
    const content = fs.readFileSync(fullPath, "utf8");

    const firstLine = content.split("\n")[0];
    let title = slug;
    const match = firstLine.match(/^#\s+(.+)/);
    if (match) {
      title = match[1].trim();
    }

    return { slug, title, filename };
  });

  res.render("notes-index", {
    title: "Learning Notes – Mengyu Wang",
    notes,
    isLanding: false,
  });
});

// Notes Detail
app.get("/notes/:slug", (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(notesDir, slug + ".md");

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Note not found");
  }

  let mdContent = fs.readFileSync(filePath, "utf8");

  // ⭐ before marked, convert ```mermaid code blocks to <div class="mermaid">
  mdContent = mdContent.replace(
    /```mermaid\s*([\s\S]*?)```/g,
    (match, code) => {
      return `<div class="mermaid">\n${code}\n</div>`;
    }
  );

  const htmlContent = marked.parse(mdContent);

  const firstLine = mdContent.split("\n")[0];
  let title = slug;
  const match = firstLine.match(/^#\s+(.+)/);
  if (match) {
    title = match[1].trim();
  }

  res.render("notes-detail", {
    title,
    content: htmlContent,
    isLanding: false,
  });
});

// About
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About – Mengyu Wang",
    isLanding: false,
  });
});

// Contact
const nodemailer = require("nodemailer");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// make sure Express can read POST form data
app.use(express.urlencoded({ extended: true }));

// show contact page
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    isLanding: false,
  });
});

// handle form submission
const axios = require("axios");

app.post("/contact", async (req, res) => {
  const {
    name,
    email,
    message,
    website,
    "g-recaptcha-response": recaptchaResponse,
  } = req.body;

  // 1) simple hidden-field check (honeypot)
  if (website && website.trim() !== "") {
    console.log("Suspicious submission (honeypot filled) – ignoring.");
    // Antwort wie bei Erfolg, damit Bots nichts merken
    return res.status(200).render("contact", {
      title: "Contact – Mengyu Wang",
      isLanding: false,
      success: true,
      message: "Danke für deine Nachricht.",
    });
  }

  // 2) captcha response must be present
  if (!recaptchaResponse) {
    return res.status(400).render("contact", {
      title: "Contact – Mengyu Wang",
      isLanding: false,
      error: "Bitte bestätige, dass du kein Roboter bist.",
      old: { name, email, message },
    });
  }

  // 3) verify captcha with Google API
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";

    const result = await axios.post(verificationUrl, null, {
      params: {
        secret,
        response: recaptchaResponse,
        remoteip: req.ip, // optional
      },
    });

    const data = result.data;

    if (!data.success) {
      console.log("reCAPTCHA validation failed:", data);
      return res.status(400).render("contact", {
        title: "Contact – Mengyu Wang",
        isLanding: false,
        error:
          "reCAPTCHA-Überprüfung fehlgeschlagen. Bitte versuche es erneut.",
        old: { name, email, message },
      });
    }
  } catch (err) {
    console.error("Error while verifying reCAPTCHA:", err);
    return res.status(500).render("contact", {
      title: "Contact – Mengyu Wang",
      isLanding: false,
      error: "Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
      old: { name, email, message },
    });
  }

  // 4) all checks passed – send email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`,
    replyTo: email,
    to: process.env.SMTP_USER,
    subject: `New message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    // success: re-render contact page with success flag
    return res.render("contact", {
      title: "Contact – Mengyu Wang",
      isLanding: false,
      success: true,
    });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return res.render("contact", {
      title: "Contact – Mengyu Wang",
      isLanding: false,
      error:
        "Die Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen.",
      old: { name, email, message },
    });
  }
});

// ----------------- Start server -----------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
