<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wang.ist – Personal Site</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #050816;
            color: #f9fafb;
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10;
            background: rgba(5, 8, 22, 0.9);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(148, 163, 184, 0.2);
            padding: 10px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        header .logo {
            font-weight: 600;
            letter-spacing: 0.05em;
        }

        header nav a {
            color: #e5e7eb;
            text-decoration: none;
            margin-left: 16px;
            font-size: 0.95rem;
        }

        header nav a:hover {
            color: #38bdf8;
        }

        .content {
            padding-top: 60px; /* 給固定導航讓出空間 */
        }

        .spline-wrapper {
            width: 100%;
            height: 100vh;
        }

        .spline-wrapper iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        footer {
            text-align: center;
            padding: 16px;
            font-size: 0.85rem;
            color: #9ca3af;
            background: #020617;
            border-top: 1px solid rgba(148, 163, 184, 0.2);
        }
    </style>
</head>
<body>

<header>
    <div class="logo">wang.ist</div>
    <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
    </nav>
</header>

<div class="content">
