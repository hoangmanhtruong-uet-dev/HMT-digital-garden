
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Dữ liệu
    const renderData = () => {
        // Hero
        document.getElementById('hero-date').textContent = "cập nhật " + SA_DATA.overview.lastUpdated;
        document.getElementById('sb-last-update').textContent = "Cập nhật: " + SA_DATA.overview.lastUpdated;

        // Stats
        const totalGoals = SA_DATA.goals.length;
        const activeGoals = SA_DATA.goals.filter(g => g.status === 'dang-thuc-hien').length;
        const completedGoals = SA_DATA.goals.filter(g => g.status === 'hoan-thanh').length;
        const avgProgress = Math.round(SA_DATA.goals.reduce((acc, g) => acc + g.progress, 0) / totalGoals);
        const milestones = SA_DATA.roadmap.filter(r => r.status === 'hoan-thanh').length;
        const capabilities = SA_DATA.capabilities.radar.length;

        document.getElementById('stat-avg').textContent = avgProgress + '%';
        document.getElementById('stat-active-goals').textContent = activeGoals + '/' + totalGoals;
        document.getElementById('stat-milestones').textContent = milestones;
        document.getElementById('stat-capabilities').textContent = capabilities;
        
        // Sidebar counts
        document.getElementById('sb-goals-count').textContent = totalGoals;
        document.getElementById('sb-roadmap-count').textContent = SA_DATA.roadmap.length;
        document.getElementById('sb-cap-count').textContent = capabilities;
        
        // Sidebar ring
        const ringFill = document.getElementById('sb-ring');
        setTimeout(() => {
            ringFill.style.strokeDasharray = avgProgress + ', 100';
            document.getElementById('sb-progress-text').textContent = avgProgress + '%';
        }, 300);

        // Stage progress (just visual approx based on milestones)
        const stageFill = document.getElementById('stage-progress-fill');
        setTimeout(() => { stageFill.style.width = '60%'; }, 500);

        // Render Goals
        renderGoals(SA_DATA.goals);

        // Render Roadmap
        const rmContainer = document.getElementById('roadmap-container');
        rmContainer.innerHTML = SA_DATA.roadmap.map((r, i) => `
            <article class="roadmap-item ${r.status}">
                <div class="rm-dot"></div>
                <div class="rm-content">
                    <span class="rm-year">${r.year}</span>
                    <h3>${r.title}</h3>
                    <p>${r.description}</p>
                    <span class="status-badge st-${r.status}">${getStatusText(r.status)}</span>
                </div>
            </article>
        `).join('');

        // Render Topics
        const topicsGrid = document.getElementById('topics-grid');
        topicsGrid.innerHTML = SA_DATA.topics.map(t => `
            <div class="topic-card ${t.status} reveal">
                <div class="topic-header">
                    <span class="topic-label">${t.title}</span>
                    <span class="status-badge st-${t.status}">${getStatusText(t.status)}</span>
                </div>
                <h4>${t.name}</h4>
                <p>${t.desc}</p>
                <div class="topic-progress-bg">
                    <div class="topic-progress-fill" style="width: 0" data-width="${t.progress}%"></div>
                </div>
            </div>
        `).join('');

        // Radar Chart (Simple SVG generation)
        renderRadar(SA_DATA.capabilities.radar);

        // Comm logs
        document.getElementById('comm-minutes').textContent = SA_DATA.capabilities.communication.minutes;
        document.getElementById('comm-list').innerHTML = SA_DATA.capabilities.communication.sessions.map(s => `
            <li>
                <div style="display:flex; gap:12px; align-items:center;">
                    <i class="fa-solid ${s.icon}"></i>
                    <span>${s.name}</span>
                </div>
                <span class="time">${s.duration} phút</span>
            </li>
        `).join('');
    };

    const getStatusText = (status) => {
        const map = { 'hoan-thanh': 'Hoàn thành', 'dang-thuc-hien': 'Đang thực hiện', 'ke-hoach': 'Kế hoạch', 'qua-han': 'Quá hạn · Cần chú ý' };
        return map[status] || status;
    };

    const getIcon = (cat) => {
        const map = { 'hoc-tap': 'fa-book-open', 'ky-nang': 'fa-code', 'su-nghiep': 'fa-briefcase', 'cuoc-song': 'fa-heart' };
        return map[cat] || 'fa-star';
    };

    const renderGoals = (goals) => {
        const container = document.getElementById('goals-container');
        container.innerHTML = goals.map(g => {
            // Auto check overdue
            let status = g.status;
            if (new Date(g.deadline) < new Date() && status !== 'hoan-thanh') {
                status = 'qua-han';
            }
            return `
            <article class="goal-card ${status} reveal">
                <div class="goal-header">
                    <div class="goal-icon"><i class="fa-solid ${getIcon(g.category)}"></i></div>
                    <h3 class="goal-title">${g.title}</h3>
                </div>
                <p class="goal-desc">${g.description}</p>
                <div class="goal-meta">
                    <span class="status-badge st-${status}">${getStatusText(status)}</span>
                    <span class="goal-deadline">${g.deadline}</span>
                </div>
                <div class="goal-progress-bar">
                    <div class="goal-progress-fill" style="width: 0" data-width="${g.progress}%"></div>
                </div>
                <div class="goal-progress-text">${g.progress}%</div>
            </article>
        `}).join('');
        
        // Trigger progress animation after slight delay
        setTimeout(() => {
            document.querySelectorAll('.goal-progress-fill, .topic-progress-fill').forEach(el => {
                el.style.width = el.getAttribute('data-width');
            });
        }, 100);
    };

    const renderRadar = (data) => {
        const svg = document.getElementById('radar-chart');
        const legend = document.getElementById('radar-legend');
        const cx = 100, cy = 100, r = 80;
        const max = Math.PI * 2;
        const len = data.length;
        
        // Draw grid
        for(let j=1; j<=4; j++){
            let points = "";
            for(let i=0; i<len; i++){
                const angle = (Math.PI / 2) - (max * i / len);
                const x = cx + Math.cos(angle) * (r * j / 4);
                const y = cy - Math.sin(angle) * (r * j / 4);
                points += `${x},${y} `;
            }
            svg.innerHTML += `<polygon points="${points}" fill="none" stroke="rgba(255,255,255,0.08)" />`;
        }
        // Draw axes
        for(let i=0; i<len; i++){
            const angle = (Math.PI / 2) - (max * i / len);
            const x = cx + Math.cos(angle) * r;
            const y = cy - Math.sin(angle) * r;
            svg.innerHTML += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,0.08)" />`;
        }
        
        // Draw data polygon
        let dataPoints = "";
        let circles = "";
        data.forEach((d, i) => {
            const angle = (Math.PI / 2) - (max * i / len);
            const valR = r * (d.value / 100);
            const x = cx + Math.cos(angle) * valR;
            const y = cy - Math.sin(angle) * valR;
            dataPoints += `${x},${y} `;
            circles += `<circle cx="${x}" cy="${y}" r="3" fill="#5B8CFF" />`;
        });
        
        svg.innerHTML += `<polygon points="${dataPoints}" fill="rgba(91,140,255,0.2)" stroke="#5B8CFF" stroke-width="2" />`;
        svg.innerHTML += circles;

        // Legend
        legend.innerHTML = data.map(d => `
            <div class="legend-item">
                <span>${d.name}</span>
                <span class="legend-val">${d.value}%</span>
            </div>
        `).join('');
    };

    renderData();

    // 2. Scroll Spy & Intersection Observer
    const sections = document.querySelectorAll('.sa-section');
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item, .mobile-bottom-bar .nav-item');
    const navIndicator = document.getElementById('nav-indicator');

    const updateActiveNav = (id) => {
        navItems.forEach(item => {
            item.classList.remove('is-active');
            item.setAttribute('aria-current', 'false');
            if (item.getAttribute('data-target') === id) {
                item.classList.add('is-active');
                item.setAttribute('aria-current', 'true');
                if (navIndicator && item.closest('.sidebar-nav')) {
                    navIndicator.style.transform = `translateY(${item.offsetTop - 16}px)`;
                }
            }
        });
        if(history.replaceState) {
            history.replaceState(null, null, '#' + id);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        let maxVisible = null;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!maxVisible || entry.intersectionRatio > maxVisible.intersectionRatio) {
                    maxVisible = entry;
                }
            }
        });
        if (maxVisible) {
            updateActiveNav(maxVisible.target.id);
        }
    }, { rootMargin: '-100px 0px -40% 0px', threshold: [0, 0.2, 0.5, 0.8] });

    sections.forEach(sec => observer.observe(sec));

    // Keyboard shortcuts 1-4
    document.addEventListener('keydown', (e) => {
        if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const map = { '1': 'tong-quan', '2': 'muc-tieu', '3': 'lo-trinh', '4': 'nang-luc' };
        if (map[e.key]) {
            const target = document.getElementById(map[e.key]);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 3. Filters & Sorting
    const initFilters = () => {
        const filterBtns = document.querySelectorAll('.nav-filter, .mobile-filters button');
        // clone sidebar filters to mobile
        const mobileFilters = document.getElementById('mobile-filters');
        if(mobileFilters && mobileFilters.innerHTML.trim() === "") {
            mobileFilters.innerHTML = document.querySelector('.nav-sub-items').innerHTML;
        }

        document.querySelectorAll('.nav-filter, .mobile-filters button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.target.getAttribute('data-filter');
                document.querySelectorAll('.nav-filter, .mobile-filters button').forEach(b => b.classList.remove('active'));
                document.querySelectorAll(`[data-filter="${cat}"]`).forEach(b => b.classList.add('active'));
                
                let filtered = SA_DATA.goals;
                if (cat !== 'all') {
                    filtered = SA_DATA.goals.filter(g => g.category === cat);
                }
                
                // Keep sort
                const sortVal = document.getElementById('goal-sort').value;
                sortGoals(filtered, sortVal);
                
                // Scroll to goals section smoothly
                document.getElementById('muc-tieu').scrollIntoView({ behavior: 'smooth' });
            });
        });

        document.getElementById('goal-sort').addEventListener('change', (e) => {
            const activeCat = document.querySelector('.nav-filter.active').getAttribute('data-filter');
            let filtered = SA_DATA.goals;
            if (activeCat !== 'all') filtered = SA_DATA.goals.filter(g => g.category === activeCat);
            sortGoals(filtered, e.target.value);
        });
    };

    const sortGoals = (goals, sortType) => {
        const sorted = [...goals];
        if (sortType === 'progress') sorted.sort((a,b) => b.progress - a.progress);
        else if (sortType === 'deadline') sorted.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
        else if (sortType === 'group') sorted.sort((a,b) => a.category.localeCompare(b.category));
        renderGoals(sorted);
    };
    initFilters();

    // 4. Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
});
