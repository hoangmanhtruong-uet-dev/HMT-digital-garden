const fs = require('fs');

const indexHtmlPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/index.html';
const teachingHtmlPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/teaching.html';

const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');
const navMatch = indexContent.match(/<nav class="navbar-unified"[\s\S]*?<\/nav>/);
if (!navMatch) {
    console.error('Could not find navbar in index.html');
    process.exit(1);
}

let fullNav = navMatch[0];

// Adjust paths for being in pages/ directory
fullNav = fullNav.replace(/href="index\.html"/g, 'href="../index.html"');
fullNav = fullNav.replace(/href="pages\//g, 'href="');

// In teaching.html, we need to mark Giảng Dạy as active
fullNav = fullNav.replace(/<a href="teaching\.html">Giảng Dạy/, '<a class="active" href="teaching.html">Giảng Dạy');

// Replace the <nav> in teaching.html
let teachingContent = fs.readFileSync(teachingHtmlPath, 'utf8');
if (teachingContent.includes('<nav class="navbar-unified"')) {
    teachingContent = teachingContent.replace(/<nav class="navbar-unified"[\s\S]*?<\/nav>/, fullNav);
} else if (teachingContent.includes('<header class="site-header"')) {
    teachingContent = teachingContent.replace(/<header class="site-header"[\s\S]*?<\/header>/, fullNav);
} else {
    console.error('Could not find nav or header in teaching.html');
    process.exit(1);
}

// Make sure teaching.html has common.css
if (!teachingContent.includes('common.css')) {
    teachingContent = teachingContent.replace('</head>', '    <link rel="stylesheet" href="../assets/css/common.css">\n</head>');
}

fs.writeFileSync(teachingHtmlPath, teachingContent);
console.log('Successfully synced teaching.html navbar');
