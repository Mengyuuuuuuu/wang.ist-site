const express = require("express");
const path = require("path");
const fs = require("fs");
const { marked } = require("marked");
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

  const mdContent = fs.readFileSync(filePath, "utf8");
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

// ----------------- Start server -----------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
