const techData = [
    {
        group: 'Backend',
        name: 'Java',
        level: 'Khá',
        levelScore: 3,
        desc: 'Ngôn ngữ chính. OOP, Cấu trúc dữ liệu & Giải thuật.',
        project: 'High-Throughput URL Shortener',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
    },
    {
        group: 'Backend',
        name: 'Spring Boot',
        level: 'Khá',
        levelScore: 3,
        desc: 'Xây REST API + xác thực JWT, thao tác JPA/Hibernate.',
        project: 'Resilient Commerce Platform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
    },
    {
        group: 'Backend',
        name: 'Spring Security',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Phân quyền, bảo vệ endpoints, setup CORS/CSRF.',
        project: 'Education Operations Platform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
    },
    {
        group: 'Frontend',
        name: 'JavaScript',
        level: 'Khá',
        levelScore: 3,
        desc: 'Thao tác DOM, xử lý bất đồng bộ, Fetch API.',
        project: 'Streaming Analytics Dashboard',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
        group: 'Frontend',
        name: 'TypeScript',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Định nghĩa Type/Interface, tránh lỗi runtime.',
        project: 'Offline-first Task Manager',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    },
    {
        group: 'Frontend',
        name: 'React',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Xây dựng component UI, quản lý state (Hooks).',
        project: 'Music Streaming Web',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
        group: 'Database',
        name: 'MySQL',
        level: 'Khá',
        levelScore: 3,
        desc: 'Thiết kế lược đồ quan hệ, viết query, join.',
        project: 'Auction Management System',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
    },
    {
        group: 'Database',
        name: 'PostgreSQL',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Thao tác dữ liệu, tối ưu hóa câu truy vấn.',
        project: 'Facebook Mini Social Platform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    },
    {
        group: 'DevOps',
        name: 'Git',
        level: 'Khá',
        levelScore: 3,
        desc: 'Quản lý phiên bản, làm việc nhóm qua GitHub.',
        project: 'All Projects',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    },
    {
        group: 'DevOps',
        name: 'Docker',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Đóng gói ứng dụng (Containerization).',
        project: 'Cloud Delivery Pipeline',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
    },
    {
        group: 'DevOps',
        name: 'Linux',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Thao tác command line cơ bản, deploy app.',
        project: 'Concurrent TCP Gateway',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
    },
    {
        group: 'Security',
        name: 'OWASP Top 10',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Hiểu các lỗ hổng phổ biến (SQLi, XSS, CSRF).',
        project: 'Education Operations Platform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/owasp/owasp-original-wordmark.svg'
    },
    {
        group: 'Security',
        name: 'JWT / OAuth2',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Cơ chế xác thực stateless và phân quyền bên thứ 3.',
        project: 'Realtime Messaging Platform',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_Web_Token.svg/200px-JSON_Web_Token.svg.png'
    },
    {
        group: 'Security',
        name: 'Burp Suite',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Chặn bắt request/response, tìm lỗi bảo mật.',
        project: 'Security Audit & Testing',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Burp_Suite_Logo.png'
    },
    {
        group: 'Security',
        name: 'Nmap',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Scan port, khám phá mạng và các dịch vụ.',
        project: 'Network Lab',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nmap-logo.svg/200px-Nmap-logo.svg.png'
    },
    {
        group: 'Security',
        name: 'Wireshark',
        level: 'Cơ bản',
        levelScore: 2,
        desc: 'Phân tích gói tin mạng (Packet capture).',
        project: 'Concurrent TCP Gateway',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wireshark_Icon.svg/200px-Wireshark_Icon.svg.png'
    }
];

const learningData = ['Kubernetes', 'Redis', 'GraphQL', 'Go'];

const groupConfigs = {
    'Backend': { icon: 'fa-solid fa-server', color: 'var(--tech-backend)' },
    'Frontend': { icon: 'fa-solid fa-window-maximize', color: 'var(--tech-frontend)' },
    'Database': { icon: 'fa-solid fa-database', color: 'var(--tech-database)' },
    'DevOps': { icon: 'fa-solid fa-gears', color: 'var(--tech-devops)' },
    'Security': { icon: 'fa-solid fa-shield-halved', color: 'var(--tech-security)' }
};

document.addEventListener('DOMContentLoaded', () => {
    initTechStack();
});

function initTechStack() {
    renderStats();
    renderFilters();
    renderLearning();
    
    // Initial Render
    const initialFilter = getFilterFromHash() || 'Tất cả';
    updateActiveFilter(initialFilter);
    filterAndRender(initialFilter, '');

    // Search logic
    const searchInput = document.getElementById('tech-search');
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const currentFilter = document.querySelector('.tech-filter-btn[aria-pressed="true"]')?.dataset.group || 'Tất cả';
            filterAndRender(currentFilter, e.target.value);
        }, 150);
    });

    setupDialog();
}

function renderStats() {
    const container = document.getElementById('tech-stats-container');
    const totalTechs = techData.length;
    const totalGroups = Object.keys(groupConfigs).length;
    // Calculate projects, for now let's say we have 3 unique projects (since it's TODO)
    // Actually, count non-TODO projects or just show a hardcoded number if all are TODO.
    const projectCount = techData.filter(t => !t.project.includes('TODO')).length || 0;

    container.innerHTML = `
        <div class="tech-stat-item"><span class="tech-stat-num" data-val="${totalTechs}">0</span><span class="tech-stat-label">Công nghệ</span></div>
        <div class="tech-stat-item"><span class="tech-stat-num" data-val="${totalGroups}">0</span><span class="tech-stat-label">Nhóm kỹ năng</span></div>
        <div class="tech-stat-item"><span class="tech-stat-num" data-val="${projectCount}">0</span><span class="tech-stat-label">Dự án áp dụng</span></div>
    `;

    // Simple count up animation (can be triggered via observer later)
    setTimeout(() => {
        document.querySelectorAll('.tech-stat-num').forEach(el => {
            const target = parseInt(el.dataset.val);
            let count = 0;
            const inc = Math.max(1, Math.floor(target / 20));
            const timer = setInterval(() => {
                count += inc;
                if(count >= target) { count = target; clearInterval(timer); }
                el.innerText = count;
            }, 30);
        });
    }, 500);
}

function renderFilters() {
    const container = document.getElementById('tech-filters-container');
    const groups = ['Tất cả', ...Object.keys(groupConfigs)];
    
    groups.forEach(group => {
        const btn = document.createElement('button');
        btn.className = 'tech-filter-btn';
        btn.dataset.group = group;
        btn.innerText = group;
        btn.addEventListener('click', () => {
            const searchVal = document.getElementById('tech-search').value;
            updateActiveFilter(group);
            filterAndRender(group, searchVal);
            window.history.replaceState(null, null, group === 'Tất cả' ? '#' : '#tech-' + group.toLowerCase());
        });
        container.appendChild(btn);
    });
}

function updateActiveFilter(activeGroup) {
    document.querySelectorAll('.tech-filter-btn').forEach(btn => {
        if(btn.dataset.group === activeGroup) {
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.setAttribute('aria-pressed', 'false');
        }
    });
}

function getFilterFromHash() {
    const hash = window.location.hash.replace('#tech-', '');
    if(!hash) return null;
    const group = Object.keys(groupConfigs).find(g => g.toLowerCase() === hash);
    return group;
}

function filterAndRender(group, searchQuery) {
    const container = document.getElementById('tech-grid-container');
    
    // Filter data
    const query = searchQuery.toLowerCase().trim();
    let filteredData = techData.filter(item => {
        const matchGroup = group === 'Tất cả' || item.group === group;
        const matchSearch = item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        return matchGroup && matchSearch;
    });

    if (filteredData.length === 0) {
        container.innerHTML = `<div class="tech-empty">Không tìm thấy công nghệ nào phù hợp.</div>`;
        return;
    }

    // Group the filtered data
    const grouped = {};
    filteredData.forEach(item => {
        if(!grouped[item.group]) grouped[item.group] = [];
        grouped[item.group].push(item);
    });

    container.innerHTML = '';
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    let delayIndex = 0;

    // Render each group card
    Object.keys(groupConfigs).forEach(gName => {
        if(!grouped[gName]) return; // Skip if no items after filter
        const items = grouped[gName];
        const config = groupConfigs[gName];

        const card = document.createElement('div');
        card.className = `tech-card ${gName === 'Security' ? 'tech-card-featured' : ''}`;
        card.style.setProperty('--card-color', config.color);
        card.style.animationDelay = `${delayIndex * 60}ms`;
        delayIndex++;
        
        // Add to observer
        observer.observe(card);

        let itemsHtml = items.map(item => `
            <div class="tech-item" tabindex="0" data-name="${item.name}">
                <img src="${item.icon}" alt="${item.name} logo" class="tech-item-logo" loading="lazy" onerror="this.style.display='none'">
                <div class="tech-item-info">
                    <div class="tech-item-header">
                        <span class="tech-item-name">${item.name}</span>
                        <div class="tech-item-bars" title="Mức độ: ${item.level}">
                            ${[1,2,3,4].map(i => `<div class="tech-bar ${i <= item.levelScore ? 'filled' : ''}"></div>`).join('')}
                        </div>
                    </div>
                    <div class="tech-item-desc">${item.desc}</div>
                </div>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="tech-card-header">
                <div class="tech-card-icon" style="color: ${config.color}"><i class="${config.icon}"></i></div>
                <h3 class="tech-card-title">${gName} <span class="tech-card-count">${items.length}</span></h3>
            </div>
            <div class="tech-card-list">
                ${itemsHtml}
            </div>
        `;
        container.appendChild(card);
    });

    // Attach click events for dialog
    document.querySelectorAll('.tech-item').forEach(el => {
        el.addEventListener('click', () => openDialog(el.dataset.name));
        el.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') openDialog(el.dataset.name);
        });
    });
}

function renderLearning() {
    const container = document.getElementById('tech-learning-container');
    container.innerHTML = learningData.map(name => `<span class="tech-learning-chip">${name}</span>`).join('');
}

function setupDialog() {
    const dialog = document.getElementById('tech-dialog');
    const closeBtn = dialog.querySelector('.tech-dialog-close');
    
    closeBtn.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
        if(e.target === dialog) dialog.close();
    });
}

function openDialog(techName) {
    const item = techData.find(t => t.name === techName);
    if(!item) return;

    const config = groupConfigs[item.group];
    const body = document.getElementById('tech-dialog-body');
    
    body.innerHTML = `
        <div class="tech-dialog-header">
            <img src="${item.icon}" alt="${item.name}" class="tech-dialog-logo" onerror="this.style.display='none'">
            <div>
                <h3 class="tech-dialog-title">${item.name}</h3>
                <span class="tech-dialog-badge" style="background: ${config.color}22; color: ${config.color};">${item.group}</span>
            </div>
        </div>
        <div class="tech-dialog-content-box">
            <p><strong>Mức độ:</strong> ${item.level}</p>
            <p><strong>Mô tả:</strong> ${item.desc}</p>
            <p><strong>Dự án áp dụng:</strong> ${item.project.includes('TODO') ? '<span style="opacity:0.5">Đang cập nhật...</span>' : `<a href="#projects" class="tech-dialog-link">${item.project}</a>`}</p>
        </div>
    `;
    
    const dialog = document.getElementById('tech-dialog');
    dialog.showModal();
}
