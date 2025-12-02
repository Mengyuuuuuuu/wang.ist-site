
# 🌐 **wang.ist — Personal Website (Node.js + Express + EJS + Tailwind + DevOps Practice)**

A personal full-stack website built with **Node.js**, **Express**, **EJS**, and **Tailwind CSS**, deployed on a **Ubuntu VPS** with **Nginx**, **PM2**, and **GitHub Actions CI/CD**.

This project serves as:

- A **personal online profile & portfolio**
- A **learning notebook** for networking & cybersecurity (Markdown → HTML)
- A **DevOps sandbox**, practicing CI/CD, server automation, and deployment workflows

---

## 🎯 **Project Goals**

### **1. Personal Portfolio Website**
- Hosted at **wang.ist**
- Responsive layout using EJS + Tailwind
- Showcases background, interests, study notes, and professional profile

---

### **2. Learning Notes (Markdown → HTML)**
- `/notes` auto-indexes `.md` files inside `/notes`
- Markdown rendered to HTML using **marked**
- Clean layout for ongoing cybersecurity, networking, and general technical notes

---

## 🧱 **Tech Stack**

### **Backend**
- Node.js (Express)
- EJS templating
- marked (Markdown rendering)
- nodemailer (SMTP email sending)

### **Frontend**
- Tailwind CSS (compiled from `input.css`)
- Responsive dark-theme UI
- Reusable EJS layout components

### **Deployment / Infrastructure**
- Ubuntu 22.04 VPS
- PM2 process manager
- GitHub Actions CI/CD (automatic deployment via SSH)
- Nginx reverse proxy
- Let's Encrypt SSL (HTTPS)

---

## 📁 **Project Structure (Updated)**

```txt
wang.ist-site
├── src
│   └── server.js
├── views
│   ├── layout.ejs
│   ├── home.ejs
│   ├── about.ejs
│   ├── projects.ejs
│   ├── notes-index.ejs
│   ├── notes-detail.ejs
│   └── contact.ejs
├── notes
│   └── *.md        (Markdown technical notes)
├── public
│   ├── css
│   │   ├── input.css
│   │   └── tailwind.css
│   ├── img
│   └── js
├── .github
│   └── workflows
│       └── deploy.yml     (automatic deployment)
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 **Deployment**

### **Manual Deployment**
```bash
git pull
npm ci
pm2 restart wang.ist
```

### **Automatic Deployment (GitHub Actions → VPS)**

This project includes a GitHub Actions workflow:

```
.github/workflows/deploy.yml
```

Deployment pipeline:

1. Triggered on push to `main`
2. GitHub Actions SSH into the VPS
3. Pulls the newest code
4. Installs dependencies via `npm ci`
5. Restarts the PM2 process for zero-downtime deployment

---

## 🔧 **Development Commands**

### Start Dev Server
```bash
npm install
npm run dev     # if nodemon is configured
```

### Compile Tailwind CSS
```bash
npx tailwindcss -i ./public/css/input.css -o ./public/css/tailwind.css --watch
```

---

## 👤 **Author**

**Mengyu Wang**  
Wirtschaftsinformatik (THM) 
