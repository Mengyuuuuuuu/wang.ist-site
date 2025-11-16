# wang.ist -- Personal Homepage / Tech Profile

A personal web project focused on **Web Backend, Networking,
Cybersecurity, and DevOps**.\
This site will serve as my **public tech profile**, hosted on a VPS
using a modern CI/CD workflow.

------------------------------------------------------------------------

## 🎯 Project Purpose

This project has three main goals:

1.  **Personal Homepage**
    -   A clean and professional profile website under the domain
        **wang.ist**\
    -   Showcasing my background in Wirtschaftsinformatik (Business
        Informatics),\
        as well as my interests in backend development, cloud,
        networking, and security.
2.  **Networking & Cybersecurity Practice**
    -   Experimenting with DNS, Nginx, HTTPS, Firewall rules, SSH
        hardening,\
        TLS certificates, server monitoring, and secure deployment
        patterns.
3.  **DevOps Workflow + VPS Hosting**
    -   Practicing a complete DevOps workflow:
        -   Git + GitHub SSH\
        -   Build pipelines\
        -   Automated deployment\
        -   Dockerized production environment\
        -   Reverse proxy setup\
        -   Versioned updates and rollback strategies

------------------------------------------------------------------------

## 🏗️ Planned Tech Stack

-   **Frontend:** HTML, CSS, JavaScript\
-   **Backend:** PHP / (Lightweight MVC structure)\
-   **Database:** MySQL / MariaDB\
-   **Server:** NGINX on Linux VPS\
-   **Deployment:** GitHub Actions → SSH Deploy / Rsync\
-   **Containerization (optional later):** Docker + docker-compose\
-   **Security:**
    -   SSH key authentication\
    -   Fail2ban\
    -   TLS/SSL (Let's Encrypt)\
    -   Secure headers (CSP, HSTS)
    -   Firewall configuration (UFW / iptables)

------------------------------------------------------------------------

## 📁 Project Structure (Planned)

    wang.ist-site/
    │
    ├── public/               # Public-facing web files (index.php, assets, etc.)
    │   ├── index.php
    │   ├── home.php
    │   ├── css/
    │   ├── js/
    │   └── img/
    │
    ├── src/                  # PHP logic (routing, controllers, etc.)
    │
    ├── config/
    │   ├── config.example.php
    │   └── nginx/
    │
    ├── scripts/              # Deployment / automation scripts
    │
    ├── .github/workflows/    # CI/CD pipelines
    │
    ├── .gitignore
    ├── LICENSE
    └── README.md

------------------------------------------------------------------------

## 🚀 Deployment Vision (DevOps Workflow)

This project will be deployed to a Linux VPS using:

### ✔ CI/CD Pipeline

-   GitHub Actions\
-   Automatic build & syntax checks\
-   Rsync / SSH deployment to VPS server

### ✔ VPS Setup

-   Ubuntu Server\
-   NGINX reverse proxy\
-   PHP-FPM\
-   MySQL / MariaDB\
-   Automatic SSL via Certbot\
-   Systemd service management

### ✔ Security Focus

-   SSH-only login (no password auth)\
-   iptables / ufw firewall\
-   fail2ban (optional)\
-   Secure headers (CSP, HSTS, Referrer Policy, etc.)

------------------------------------------------------------------------

## 📝 Roadmap

### ✅ Phase 1 --- Foundation

-   Create repo\
-   Add .gitignore\
-   Configure SSH GitHub access\
-   Set initial folder structure\
-   Basic index.php + Spline 3D animation homepage

### 🔄 Phase 2 --- VPS Deployment

-   Set up VPS\
-   Install Nginx + PHP\
-   Configure domain (wang.ist → /var/www/wang.ist/public)\
-   Enable HTTPS\
-   First manual deployment

### 🔄 Phase 3 --- DevOps Automation

-   GitHub Actions CI (PHP linting, build checks)\
-   CD pipeline for auto-deploy\
-   Rollback strategy

### ⏳ Phase 4 --- Site Expansion

-   About page\
-   Tech notes / blog\
-   Project portfolio section\
-   Cybersecurity demos\
-   Networking diagrams (DNS, server architecture)

------------------------------------------------------------------------

## 📌 Status

**Current state:** Early setup phase\
- GitHub SSH access completed\
- Repository structure initialized\
- Next step: Create basic `/public` folder and `index.php`

------------------------------------------------------------------------

## 👤 Author

**Mengyu Wang**\
- THM -- Wirtschaftsinformatik (5th Semester)\
- Focus on Networking, Cybersecurity, Web Backend & DevOps

------------------------------------------------------------------------

## 📄 License

MIT License
