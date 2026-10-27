const fs = require('fs');
const path = require('path');

const indexHtmlPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/index.html';
const htmlPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/about.html';

// Read index.html to get the navbar and basic structure
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const navMatch = indexHtml.match(/<nav class="navbar-unified"[^>]*>[\s\S]*?<\/nav>/);
const navbar = navMatch ? navMatch[0] : '';

const dummyHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang Cá Nhân — Hoàng Mạnh Trường</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/common.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="about-page personal-page">
    ${navbar}
    <main class="personal-shell"></main>
    <footer class="tutor-footer"></footer>
    <script src="../assets/js/common.js"></script>
</body>
</html>`;

fs.writeFileSync(htmlPath, dummyHtml);
console.log("Dummy about.html created for refactor-about.js to work.");
