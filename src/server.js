const express = require("express");
const path = require("path");
const { marked } = require("marked");

const app = express();
const PORT = process.env.PORT || 3000;

const rootDir = path.join(__dirname, "..");
const noteDir = path.join(rootDir, "notes");

app.set(`view engine`, `ejs`);
app.set("views", path.join(rootDir, `..`, "views"));

app.use(express.static(path.join(rootDir, `..`, "public")));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Mengyu Wang - Profile",
  });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    title: "Mengyu Wang - Projects & Portfolio",
  });
});

app.get("/notes", (req, res) => {
  // 讀取 notes/ 裡所有 .md 文件
  const files = fs.readdirSync(notesDir).filter((f) => f.endsWith(".md"));

  // 把檔名轉成 slug + 標題
  const notes = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(notesDir, filename);
    const content = fs.readFileSync(fullPath, "utf8");

    // 嘗試從第一行 '# ' 標題取 title，沒有就用檔名
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
  });
});

app.get("/notes/:slug", (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(notesDir, slug + ".md");

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Note not found");
  }

  const mdContent = fs.readFileSync(filePath, "utf8");

  // 轉成 HTML
  const htmlContent = marked.parse(mdContent);

  // 和列表一樣，從第一行嘗試取 title
  const firstLine = mdContent.split("\n")[0];
  let title = slug;
  const match = firstLine.match(/^#\s+(.+)/);
  if (match) {
    title = match[1].trim();
  }

  res.render("note-detail", {
    title,
    content: htmlContent,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
