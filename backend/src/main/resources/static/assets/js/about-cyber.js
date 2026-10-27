/**
 * Cybersecurity Three.js Particle Mesh & Interactive Cyber Experience
 * - Three.js Interactive Cyber Grid / Node Particle Mesh with mouse packet routing glow
 * - Three.js 3D Cipher Security Shield / Terminal Cube in Bento Card with mouse tilt
 * - Hacker Text Scramble Animation
 * - Dynamic Island Nav with Sliding Pill Indicator
 * - Custom Magnetic Cursor
 * - Interactive Terminal Console Simulation (commands: help, skills, projects, cat contact.txt, clear)
 * - Command Palette (Ctrl+K / Cmd+K)
 * - CV PDF Preview Modal with download counter tracking
 * - GSAP ScrollTrigger Hero Scale-Down & Lenis Smooth Scroll
 */

(function () {
    'use strict';

    // --- 1. Three.js Interactive Cyber Grid / Particle Mesh Background ---
    function initThreeCyberGrid() {
        const container = document.getElementById('cyber-three-bg');
        if (!container || typeof THREE === 'undefined') return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 180;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Grid of nodes (cyber packet nodes)
        const particleCount = 140;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];

        const rangeX = 350;
        const rangeY = 220;
        const rangeZ = 120;

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * rangeX;
            positions[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
            positions[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;

            velocities.push({
                x: (Math.random() - 0.5) * 0.25,
                y: (Math.random() - 0.5) * 0.25,
                z: (Math.random() - 0.5) * 0.15
            });
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Particle Points
        const pMaterial = new THREE.PointsMaterial({
            color: 0x2dd4a7,
            size: 3.5,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending
        });
        const particles = new THREE.Points(geometry, pMaterial);
        scene.add(particles);

        // Lines connecting close nodes (Packet Mesh Graph)
        const maxConnections = particleCount * 6;
        const linePositions = new Float32Array(maxConnections * 6);
        const lineColors = new Float32Array(maxConnections * 6);

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
        lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));

        const lineMaterial = new THREE.LineSegmentsMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.65,
            blending: THREE.AdditiveBlending,
            linewidth: 1
        });
        const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(linesMesh);

        // Mouse interaction for packet routing
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - windowHalfX) * 0.15;
            mouseY = (e.clientY - windowHalfY) * 0.15;
        }, { passive: true });

        // Animation Loop
        let frameId;
        const connectDistance = 48;

        function animate() {
            frameId = requestAnimationFrame(animate);

            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;

            camera.position.x = targetX * 0.5;
            camera.position.y = -targetY * 0.5;
            camera.lookAt(scene.position);

            const posArray = particles.geometry.attributes.position.array;

            // Move nodes and bounce
            for (let i = 0; i < particleCount; i++) {
                posArray[i * 3] += velocities[i].x;
                posArray[i * 3 + 1] += velocities[i].y;
                posArray[i * 3 + 2] += velocities[i].z;

                if (posArray[i * 3] < -rangeX / 2 || posArray[i * 3] > rangeX / 2) velocities[i].x *= -1;
                if (posArray[i * 3 + 1] < -rangeY / 2 || posArray[i * 3 + 1] > rangeY / 2) velocities[i].y *= -1;
                if (posArray[i * 3 + 2] < -rangeZ / 2 || posArray[i * 3 + 2] > rangeZ / 2) velocities[i].z *= -1;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Build dynamic connection lines
            let vertexIndex = 0;
            let colorIndex = 0;

            const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
            const baseR = isDark ? 0.35 : 0.2;
            const baseG = isDark ? 0.6 : 0.45;
            const baseB = isDark ? 1.0 : 0.95;

            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = posArray[i * 3] - posArray[j * 3];
                    const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
                    const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < connectDistance) {
                        const alpha = 1.0 - (dist / connectDistance);

                        // Line Start
                        linePositions[vertexIndex++] = posArray[i * 3];
                        linePositions[vertexIndex++] = posArray[i * 3 + 1];
                        linePositions[vertexIndex++] = posArray[i * 3 + 2];

                        // Line End
                        linePositions[vertexIndex++] = posArray[j * 3];
                        linePositions[vertexIndex++] = posArray[j * 3 + 1];
                        linePositions[vertexIndex++] = posArray[j * 3 + 2];

                        // Line Colors (Cyber Teal to Blue)
                        lineColors[colorIndex++] = baseR * alpha;
                        lineColors[colorIndex++] = baseG * alpha;
                        lineColors[colorIndex++] = baseB * alpha;

                        lineColors[colorIndex++] = 0.17 * alpha;
                        lineColors[colorIndex++] = 0.83 * alpha;
                        lineColors[colorIndex++] = 0.65 * alpha;
                    }
                }
            }

            lineGeometry.setDrawRange(0, vertexIndex / 3);
            lineGeometry.attributes.position.needsUpdate = true;
            lineGeometry.attributes.color.needsUpdate = true;

            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // --- 2. 3D Cipher Shield / Terminal Cube inside Bento Card ---
    function initThreeSecurityShield() {
        const container = document.getElementById('shield-3d-canvas');
        if (!container || typeof THREE === 'undefined') return;

        const width = 110;
        const height = 110;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 4.2;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Create a Cyber Security Shield / Polyhedron
        const geomOuter = new THREE.IcosahedronGeometry(1.4, 0);
        const matOuterWire = new THREE.MeshBasicMaterial({
            color: 0x5b8cff,
            wireframe: true,
            transparent: true,
            opacity: 0.65
        });
        const outerMesh = new THREE.Mesh(geomOuter, matOuterWire);
        scene.add(outerMesh);

        // Inner glowing core
        const geomInner = new THREE.OctahedronGeometry(0.8, 0);
        const matInner = new THREE.MeshBasicMaterial({
            color: 0x2dd4a7,
            wireframe: false,
            transparent: true,
            opacity: 0.75
        });
        const innerMesh = new THREE.Mesh(geomInner, matInner);
        scene.add(innerMesh);

        let mouseOffsetX = 0;
        let mouseOffsetY = 0;
        const bentoCard = document.querySelector('.cyber-bento-card');
        if (bentoCard) {
            bentoCard.addEventListener('mousemove', (e) => {
                const rect = bentoCard.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                mouseOffsetX = x * 2;
                mouseOffsetY = y * 2;
            });
            bentoCard.addEventListener('mouseleave', () => {
                mouseOffsetX = 0;
                mouseOffsetY = 0;
            });
        }

        function renderShield() {
            requestAnimationFrame(renderShield);
            outerMesh.rotation.x += 0.01 + mouseOffsetY * 0.05;
            outerMesh.rotation.y += 0.015 + mouseOffsetX * 0.05;

            innerMesh.rotation.x -= 0.015;
            innerMesh.rotation.y -= 0.02;

            renderer.render(scene, camera);
        }
        renderShield();
    }

    // --- 3. Hacker Decrypt / Text Scramble Animation ---
    class TextScrambler {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________010101';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => (this.resolve = resolve));
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 20);
                const end = start + Math.floor(Math.random() * 20);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    output += `<span style="color:#2dd4a7">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
    }

    function initTextScramble() {
        const scrambleElements = document.querySelectorAll('.scramble-target');
        scrambleElements.forEach((el) => {
            const originalText = el.getAttribute('data-text') || el.innerText.trim();
            const scrambler = new TextScrambler(el);
            setTimeout(() => {
                scrambler.setText(originalText);
            }, 300);
        });
    }

    // --- 4. Bento Card 3D Tilt Effect ---
    function initBentoTilt() {
        const card = document.querySelector('.cyber-bento-card');
        if (!card) return;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }

    // --- 5. Floating Dynamic Island Nav with Sliding Pill Indicator ---
    function initDynamicIslandNav() {
        const nav = document.querySelector('.navbar-dynamic-island');
        const navList = document.querySelector('.nav-links-unified');
        if (!navList) return;

        // Create or find sliding pill
        let pill = document.querySelector('.nav-sliding-pill');
        if (!pill) {
            pill = document.createElement('div');
            pill.className = 'nav-sliding-pill';
            navList.appendChild(pill);
        }

        const items = navList.querySelectorAll('li > a');

        function movePill(targetLink) {
            if (!targetLink) {
                pill.style.opacity = '0';
                return;
            }
            const linkRect = targetLink.getBoundingClientRect();
            const parentRect = navList.getBoundingClientRect();

            pill.style.width = `${linkRect.width}px`;
            pill.style.left = `${linkRect.left - parentRect.left}px`;
            pill.style.opacity = '1';
        }

        // Check active page
        const activeLink = navList.querySelector('li.active > a') || items[1]; // default 'Cá Nhân'
        if (activeLink) {
            setTimeout(() => movePill(activeLink), 200);
        }

        items.forEach((item) => {
            item.addEventListener('mouseenter', () => movePill(item));
        });

        navList.addEventListener('mouseleave', () => {
            if (activeLink) movePill(activeLink);
            else pill.style.opacity = '0';
        });

        // Dynamic island shrink/grow on scroll
        window.addEventListener('scroll', () => {
            if (!nav) return;
            if (window.scrollY > 40) {
                nav.style.padding = '6px 18px';
                nav.style.boxShadow = '0 12px 35px rgba(0,0,0,0.6), 0 0 25px rgba(45, 212, 167, 0.2)';
            } else {
                nav.style.padding = '8px 20px';
                nav.style.boxShadow = '';
            }
        }, { passive: true });
    }

    // --- 6. Custom Magnetic Cursor ---
    function initCustomCursor() {
        if (window.innerWidth <= 992) return;

        const dot = document.createElement('div');
        dot.className = 'custom-cursor-dot';
        const ring = document.createElement('div');
        ring.className = 'custom-cursor-ring';

        document.body.appendChild(dot);
        document.body.appendChild(ring);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        });

        function renderCursor() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(renderCursor);
        }
        renderCursor();

        // Magnetic hover on interactive elements
        const targets = document.querySelectorAll('a, button, .cyber-bento-card, .floating-badge, .ar-project-card, .terminal-dock-btn, .cmd-palette-item');
        targets.forEach((t) => {
            t.addEventListener('mouseenter', () => ring.classList.add('active'));
            t.addEventListener('mouseleave', () => ring.classList.remove('active'));
        });
    }

    // --- 7. Interactive Terminal Console Simulator ---
    function initInteractiveTerminal() {
        const toggleBtn = document.getElementById('terminal-toggle-btn');
        const modal = document.getElementById('terminal-modal');
        const closeBtn = document.getElementById('terminal-close-btn');
        const terminalInput = document.getElementById('terminal-cli-input');
        const outputContainer = document.getElementById('terminal-cli-output');

        if (!toggleBtn || !modal || !terminalInput || !outputContainer) return;

        const openTerminal = () => {
            modal.classList.add('open');
            setTimeout(() => terminalInput.focus(), 150);
        };

        const closeTerminal = () => {
            modal.classList.remove('open');
        };

        toggleBtn.addEventListener('click', openTerminal);
        closeBtn.addEventListener('click', closeTerminal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeTerminal();
        });

        const commands = {
            help: () => `Available commands:
  <span class="prompt-highlight">skills</span>       - Liệt kê kỹ năng backend & bảo mật
  <span class="prompt-highlight">projects</span>     - Hiển thị danh sách dự án
  <span class="prompt-highlight">cat contact.txt</span>- Thông tin liên hệ trực tiếp
  <span class="prompt-highlight">security</span>     - Quét cấu hình phòng thủ & chính sách
  <span class="prompt-highlight">clear</span>        - Xóa màn hình console
  <span class="prompt-highlight">exit</span>         - Đóng Terminal`,
            skills: () => `[CORE STACK]
  • Backend: Java (Core, OOP, Multithreading), Spring Boot, Spring Security
  • Database: MySQL, PostgreSQL, Redis Caching, Hibernate ORM
  • DevOps: Docker, Docker Compose, Linux CLI, Git/GitHub Actions
  • Security: Authentication (JWT/OAuth2), Role-Based Access, SQL Injection Defense`,
            projects: () => `[TOP PROJECTS]
  1. Microservices Security Hub (Spring Cloud, Keycloak, Docker)
  2. Online Judge & Secure Code Executor (Java, Sandbox isolation)
  3. Realtime Chat & Location Broker (WebSocket, Redis Pub/Sub)`,
            'cat contact.txt': () => `Name: Hoàng Mạnh Trường
University: UET - ĐHQGHN (K70 CNTT)
Email: truongcri0101@gmail.com
GitHub: https://github.com/Mtruong2004
Status: Open to Internship (Software Engineer / Backend)`,
            security: () => `[FIREWALL & AUDIT LOG]
  • RLS Policies: Active & Enforced
  • SSL/TLS: TLS 1.3 Strict Mode
  • Auth Rate-Limiting: 100 req/min
  • Zero Trust Architecture: Initialized`,
            clear: () => {
                outputContainer.innerHTML = '';
                return null;
            },
            exit: () => {
                closeTerminal();
                return 'Closing session...';
            }
        };

        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = terminalInput.value.trim().toLowerCase();
                if (!cmd) return;

                const row = document.createElement('div');
                row.className = 'terminal-output';
                row.innerHTML = `<span class="prompt-accent">visitor@mtruong-dev</span>:<span class="prompt-path">~</span>$ ${escapeHtml(cmd)}`;
                outputContainer.appendChild(row);

                let resText = '';
                if (commands[cmd]) {
                    resText = commands[cmd]();
                } else {
                    resText = `<span style="color:#f87171">Command not found: "${escapeHtml(cmd)}". Gõ "help" để xem danh sách lệnh.</span>`;
                }

                if (resText !== null) {
                    const resRow = document.createElement('div');
                    resRow.className = 'terminal-output prompt-res';
                    resRow.innerHTML = resText;
                    outputContainer.appendChild(resRow);
                }

                terminalInput.value = '';
                const body = document.querySelector('.terminal-body');
                if (body) body.scrollTop = body.scrollHeight;
            }
        });
    }

    function escapeHtml(str) {
        return str.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    }

    // --- 8. Command Palette (Ctrl+K / Cmd+K) ---
    function initCommandPalette() {
        const overlay = document.getElementById('cmd-palette-modal');
        const input = document.getElementById('cmd-palette-input');
        const list = document.getElementById('cmd-palette-list');
        if (!overlay || !input || !list) return;

        const openPalette = () => {
            overlay.classList.add('open');
            input.value = '';
            filterCommands('');
            setTimeout(() => input.focus(), 150);
        };

        const closePalette = () => {
            overlay.classList.remove('open');
        };

        window.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (overlay.classList.contains('open')) closePalette();
                else openPalette();
            }
            if (e.key === 'Escape' && overlay.classList.contains('open')) {
                closePalette();
            }
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePalette();
        });

        const paletteItems = [
            { title: 'Xem Dự Án (Projects)', icon: 'fa-folder-open', action: () => (window.location.href = 'projects.html'), badge: 'Go to' },
            { title: 'Tải CV / Xem CV Trực Tiếp (PDF)', icon: 'fa-file-pdf', action: () => openCVModal(), badge: 'Action' },
            { title: 'Khám phá Tech Stack', icon: 'fa-layer-group', action: () => scrollToSection('tech-stack'), badge: 'Jump' },
            { title: 'Mục Tiêu Sự Nghiệp', icon: 'fa-bullseye', action: () => (window.location.href = 'muctieu.html'), badge: 'Go to' },
            { title: 'Khóa Học & Giảng Dạy', icon: 'fa-chalkboard-user', action: () => (window.location.href = 'teaching.html'), badge: 'Go to' },
            { title: 'Mở Hacker Terminal Console', icon: 'fa-terminal', action: () => document.getElementById('terminal-toggle-btn')?.click(), badge: 'Widget' },
            { title: 'Trang Chủ (Portfolio Home)', icon: 'fa-house', action: () => (window.location.href = '../index.html'), badge: 'Go to' },
            { title: 'GitHub Profile (@Mtruong2004)', icon: 'fa-github', action: () => window.open('https://github.com/Mtruong2004', '_blank'), badge: 'External' }
        ];

        function renderList(items) {
            list.innerHTML = '';
            items.forEach((item, index) => {
                const el = document.createElement('div');
                el.className = `cmd-palette-item ${index === 0 ? 'active' : ''}`;
                el.innerHTML = `
                    <div class="cmd-palette-item-left">
                        <i class="fa-solid ${item.icon}"></i>
                        <span>${item.title}</span>
                    </div>
                    <span class="cmd-palette-badge">${item.badge}</span>
                `;
                el.addEventListener('click', () => {
                    closePalette();
                    item.action();
                });
                list.appendChild(el);
            });
        }

        function filterCommands(query) {
            const q = query.toLowerCase().trim();
            const filtered = paletteItems.filter((i) => i.title.toLowerCase().includes(q));
            renderList(filtered);
        }

        input.addEventListener('input', (e) => filterCommands(e.target.value));

        function scrollToSection(id) {
            const sec = document.getElementById(id);
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // --- 9. Dynamic CV Modal with Live Preview & Download Counter ---
    let downloadCount = 142; // Base download metric
    window.openCVModal = function () {
        const modal = document.getElementById('cv-preview-modal');
        if (modal) modal.classList.add('open');
    };

    function initCVModal() {
        const modal = document.getElementById('cv-preview-modal');
        const triggerBtns = document.querySelectorAll('.cv-trigger-btn');
        const closeBtn = document.getElementById('cv-preview-close');
        const downloadBtn = document.getElementById('cv-modal-download-btn');
        const counterEl = document.getElementById('cv-download-count');

        if (!modal) return;

        triggerBtns.forEach((b) => {
            b.addEventListener('click', (e) => {
                e.preventDefault();
                window.openCVModal();
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => modal.classList.remove('open'));
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('open');
        });

        if (downloadBtn && counterEl) {
            downloadBtn.addEventListener('click', () => {
                downloadCount++;
                counterEl.innerText = `${downloadCount} lượt tải`;
                // Create mock download anchor
                const a = document.createElement('a');
                a.href = '#';
                a.download = 'HoangManhTruong_Backend_CV.pdf';
                // Provide visual feedback
                downloadBtn.innerHTML = '<i class="fa-solid fa-check"></i> Đang tải...';
                setTimeout(() => {
                    downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i> Tải PDF';
                }, 2000);
            });
        }
    }

    // --- 10. GSAP ScrollTrigger Hero Scale-Down & Lenis Smooth Scroll ---
    function initScrollEffects() {
        // Lenis Smooth Scroll if available
        if (typeof Lenis !== 'undefined') {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

        // GSAP ScrollTrigger Hero Scale-Down
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to('.hero-container', {
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                scale: 0.92,
                opacity: 0.65,
                y: 50,
                ease: 'power1.out'
            });
        }
    }

    // --- Execution on DOMContentLoaded ---
    document.addEventListener('DOMContentLoaded', () => {
        initThreeCyberGrid();
        initThreeSecurityShield();
        initTextScramble();
        initBentoTilt();
        initDynamicIslandNav();
        initCustomCursor();
        initInteractiveTerminal();
        initCommandPalette();
        initCVModal();
        initScrollEffects();
    });
})();