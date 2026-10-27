const fs = require('fs');

const cssFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/common.css';
const jsFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/js/common.js';

let css = fs.readFileSync(cssFile, 'utf8');

const oldCssNav = `.navbar-unified {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    max-width: 1400px;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;
    padding: 0.6rem 2rem;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.05);
}

.navbar-unified.scrolled {
    top: 0;
    width: 100%;
    border-radius: 0;
    padding: 0.6rem 2rem;
}`;

const newCssNav = `.navbar-unified {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100px);
    width: max-content;
    min-width: 700px;
    max-width: 95%;
    gap: 3rem;
    background: rgba(15, 23, 42, 0.65);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    padding: 0.5rem 1.5rem;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.05);
    animation: navDrop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s;
}

@keyframes navDrop {
    to { transform: translateX(-50%) translateY(0); }
}

.navbar-unified.scrolled {
    top: 15px;
    background: rgba(15, 23, 42, 0.95);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}`;

css = css.replace(oldCssNav, newCssNav);
fs.writeFileSync(cssFile, css);

let js = fs.readFileSync(jsFile, 'utf8');

const jsTransitionHook = `
    // Add click interceptor for page transitions
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // If it's a relative link (not starting with http, #, mailto, etc)
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !link.hasAttribute('target')) {
                e.preventDefault();
                const loader = document.getElementById('page-loader');
                if (loader) {
                    loader.classList.remove('hidden');
                    // Wait for transition to cover screen, then navigate
                    setTimeout(() => {
                        window.location.href = href;
                    }, 600);
                } else {
                    window.location.href = href;
                }
            }
        });
    });
`;

if (!js.includes('click interceptor for page transitions')) {
    js = js.replace('document.addEventListener(\'DOMContentLoaded\', () => {', 'document.addEventListener(\'DOMContentLoaded\', () => {' + jsTransitionHook);
    fs.writeFileSync(jsFile, js);
}

console.log('Update success');
