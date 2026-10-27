const fs = require('fs');
const path = require('path');

const basePath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static';
const files = [
    path.join(basePath, 'index.html'),
    path.join(basePath, 'pages', 'about.html'),
    path.join(basePath, 'pages', 'teaching.html'),
    path.join(basePath, 'pages', 'muctieu.html'),
    path.join(basePath, 'pages', 'projects.html')
];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    
    // Remove <div class="music-player">...</div>
    content = content.replace(/<div class="music-player">[\s\S]*?<\/div>/, '');
    
    // Remove <script src="assets/js/music.js"></script>
    // Sometimes it might be ../assets/js/music.js
    content = content.replace(/<script src="(.*?\/)?assets\/js\/music\.js"><\/script>/, '');
    
    fs.writeFileSync(f, content);
});

// Delete music.js
const musicJs = path.join(basePath, 'assets', 'js', 'music.js');
if (fs.existsSync(musicJs)) {
    fs.unlinkSync(musicJs);
    console.log('music.js deleted.');
}

console.log('Music player removed from all HTML files.');
