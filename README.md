# 🌐 **wang.ist --- Personal Website (Node.js + Express + EJS + Tailwind + Markdown Notes)**

A personal tech website built with **Node.js, Express, EJS, Tailwind
CSS, and Markdown-based Notes** --- deployed on a VPS as part of my
long-term journey into:

-   **DevOps**
-   **Web Backend**
-   **Networking & Cybersecurity**
-   **Cloud & Server Administration**

The site serves as my **public professional profile**, a **project
portfolio**, and a growing collection of **technical study notes**.

------------------------------------------------------------------------

## 🎯 **Project Goals**

### **1. Personal Profile Website**

-   Hosted under **wang.ist**
-   EJS templating + Tailwind styling
-   Showcases background, studies (THM), skills & interests

### **2. Learning Notes (Markdown → HTML)**

-   `/notes` automatically lists all `.md` files in `notes/`
-   Dynamic rendering using **marked**
-   Perfect for ongoing network & cybersecurity notes

### **3. Projects / Portfolio**

-   `/projects` displays current and completed projects\
-   Each entry links to the corresponding GitHub repo\

### **4. DevOps Workflow Practice**

-   VPS hosting (Ubuntu)
-   PM2 process manager
-   Nginx reverse proxy + HTTPS (Let's Encrypt)
-   GitHub → VPS deployment workflow (manual or automated)

------------------------------------------------------------------------

## 🧱 **Tech Stack**

### **Backend**

-   Node.js\
-   Express\
-   EJS\
-   marked (Markdown rendering)

### **Frontend**

-   Tailwind CSS\
-   Custom responsive layout\
-   Reusable EJS components

### **Server / Deployment**

-   Ubuntu VPS\
-   PM2\
-   Nginx\
-   Git over SSH

------------------------------------------------------------------------

## 📁 **Project Structure (Updated)**

    wang.ist-site
    ├── src
    │   └── server.js
    ├── views
    │   ├── layout.ejs
    │   ├── home.ejs
    │   ├── about.ejs
    │   ├── projects.ejs
    │   ├── notes-index.ejs
    │   └── notes-detail.ejs
    ├── notes
    │   └── *.md   (technical notes)
    ├── public
    │   ├── css
    │   │   ├── input.css
    │   │   └── tailwind.css
    │   ├── img
    │   └── js
    ├── legacy-php
    │   ├── home.php
    │   └── index.php
    ├── tailwind.config.js
    ├── postcss.config.js
    └── README.md

------------------------------------------------------------------------

## 🚀 **Deployment**

``` sh
npm install
pm2 start src/server.js --name wang.ist
git pull && pm2 restart wang.ist
```

------------------------------------------------------------------------

## 👤 **Author**

**Mengyu Wang**\
Wirtschaftsinformatik (THM)
