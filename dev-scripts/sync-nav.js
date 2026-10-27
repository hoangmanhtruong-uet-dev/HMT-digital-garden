const fs = require('fs');
const files = [
    'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/index.html',
    'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/about.html',
    'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/teaching.html',
    'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/muctieu.html',
    'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/projects.html'
];
files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    const isRoot = f.endsWith('index.html');
    const prefix = isRoot ? 'pages/' : '';
    const rootPrefix = isRoot ? '' : '../';
    const teachingPrefix = isRoot ? 'pages/' : '';
    
    const newNav = `        <ul class="nav-links-unified">
            <li><a href="${rootPrefix}index.html">Trang Chủ</a></li>
            <li><a href="${prefix}about.html">Cá Nhân</a></li>
            <li>
                <a href="${prefix}teaching.html">Giảng Dạy <i class="fa-solid fa-angle-down" style="font-size: 0.7em;"></i></a>
                <ul class="nav-dropdown">
                    <li><a href="${prefix}teaching.html#about">Giới thiệu</a></li>
                    <li><a href="${prefix}teaching.html#programs">Lộ trình học</a></li>
                    <li><a href="${prefix}teaching.html#pricing">Học phí</a></li>
                    <li><a href="${prefix}teaching.html#resources">Góc học tập</a></li>
                    <li><a href="${prefix}teaching.html#research">Nghiên cứu</a></li>
                </ul>
            </li>
            <li><a href="${prefix}muctieu.html">Mục Tiêu</a></li>
            <li><a href="${prefix}projects.html">Dự Án</a></li>
        </ul>`;
        
    // For index.html, about.html, muctieu.html, projects.html
    content = content.replace(/<ul class="nav-links-unified">[\s\S]*?<\/ul>/, newNav);
    
    // For teaching.html, replace site-header with navbar-unified
    if (f.includes('teaching.html')) {
        const fullHeader = `<nav class="navbar-unified" aria-label="Điều hướng chính">
        <a href="../index.html" class="nav-logo"><i class="fa-solid fa-circle-user"></i> Mtruong<span>_dev</span></a>
${newNav}
        <div id="auth-controls" class="nav-auth">
            <a class="btn-premium-nav" href="student_portal.html"><i class="fa-solid fa-user-graduate"></i> Cổng học sinh</a>
        </div>
    </nav>`;
        content = content.replace(/<header class="site-header"[^>]*>[\s\S]*?<\/header>/, fullHeader);
        content = content.replace(/<a class="portfolio-home"[^>]*>.*?<\/a>/g, '');
    }
    
    // add active class
    let activePage = '';
    if (f.endsWith('index.html')) activePage = 'Trang Chủ';
    else if (f.endsWith('about.html')) activePage = 'Cá Nhân';
    else if (f.endsWith('teaching.html')) activePage = 'Giảng Dạy';
    else if (f.endsWith('muctieu.html')) activePage = 'Mục Tiêu';
    else if (f.endsWith('projects.html')) activePage = 'Dự Án';
    
    if (activePage) {
        // Find exactly <a href="...">ActivePage</a> and add class active
        const regex = new RegExp(`(<a href="[^"]+")>(${activePage} <i|<a href="[^"]+")>(${activePage})</a>`);
        content = content.replace(regex, (match, p1, p2, p3, p4) => {
            if (match.includes('Giảng Dạy')) {
                return match.replace('href="', 'class="active" href="');
            }
            return match.replace('href="', 'class="active" href="');
        });
    }
    
    fs.writeFileSync(f, content);
});
console.log('Sync done');
