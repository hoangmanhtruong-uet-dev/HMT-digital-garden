const fs = require('fs');

const htmlPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/about.html';
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

const oldButton = '<a href="projects.html" class="ar-btn ar-btn-primary">Xem dự án</a>';
const newButton = `<a href="projects.html" class="button button-item ar-btn-override">
                      <span class="button-bg">
                        <span class="button-bg-layers">
                          <span class="button-bg-layer button-bg-layer-1 -purple"></span>
                          <span class="button-bg-layer button-bg-layer-2 -turquoise"></span>
                          <span class="button-bg-layer button-bg-layer-3 -yellow"></span>
                        </span>
                      </span>
                      <span class="button-inner">
                        <span class="button-inner-static">Xem dự án</span>
                        <span class="button-inner-hover" style="color: #1d1d1f">Xem dự án</span>
                      </span>
                    </a>`;

if (htmlContent.includes(oldButton)) {
    htmlContent = htmlContent.replace(oldButton, newButton);
    fs.writeFileSync(htmlPath, htmlContent);
    console.log("Button replaced in about.html");
} else {
    console.log("Could not find old button to replace");
}
