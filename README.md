# wang.ist --- Personal Website (Node.js + Express + EJS + Markdown Notes)

A personal tech website built with **Node.js, Express, EJS, and
Markdown-based Notes**, hosted on a VPS as part of my long-term journey
into:

-   **DevOps**
-   **Web Backend**
-   **Networking & Cybersecurity**
-   **Cloud & Server Administration**

This site serves as my **public professional profile**, project archive,
and a growing collection of **technical study notes**.

## 🎯 Project Goals

### 1. Personal Profile Website

-   Hosted under **wang.ist**
-   Built with Node.js + Express
-   Clean, modern layout using EJS templates
-   Showcases background, current studies (THM), skills & interests

### 2. Learning Notes (Markdown → HTML)

-   `/notes` automatically loads `.md` files from `notes/` folder
-   Supports unlimited technical notes
-   Full Markdown rendering via `marked`
-   Updates via `git pull`

### 3. Portfolio / Projects

-   `/portfolio` lists completed and planned projects
-   Each item links to its GitHub repo

### 4. DevOps Practice

-   VPS hosting, PM2, Nginx
-   HTTPS via Let's Encrypt
-   SSH hardening
-   GitHub → VPS deployment workflow

## 🧱 Tech Stack

### Backend

-   Node.js
-   Express
-   EJS
-   marked

### Server

-   Ubuntu VPS
-   PM2
-   Nginx
-   Git over SSH

## 📁 Project Structure

    wang.ist-site
    ├── src
    │   └── server.js
    ├── views
    │   ├── layout.ejs
    │   ├── home.ejs
    │   ├── portfolio.ejs
    │   ├── notes-index.ejs
    │   └── notes-detail.ejs
    ├── notes
    ├── public
    ├── legacy-php
    └── README.md

## 🚀 Deployment

    npm install
    pm2 start src/server.js --name wang.ist
    git pull && pm2 restart wang.ist

## 👤 Author

**Mengyu Wang**

Wirtschaftsinformatik (THM)
npm start
