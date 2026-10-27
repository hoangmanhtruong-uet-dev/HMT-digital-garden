(() => {
    'use strict';

    const defaultPosts = [
        { category: 'it', img: '../assets/images/blog-maven-stitch.jpg', badgeText: 'Công nghệ', date: '07/05/2026', readTime: '5 phút', title: 'Fixing Maven Dependency Conflicts in Spring Boot Projects', desc: 'Lỗi Maven là nỗi ám ảnh của mọi Java Developer. Bài viết này chia sẻ cách debug và xử lý triệt để các lỗi dependency không tìm thấy...' },
        { category: 'tutor', img: '../assets/images/blog-casio-stitch.jpg', badgeText: 'Gia sư', date: '05/05/2026', readTime: '8 phút', title: 'Top 5 Mẹo Bấm Máy Tính Casio Giải Nhanh Trắc Nghiệm Hóa', desc: 'Làm thế nào để xử lý các bài toán bảo toàn electron và bảo toàn khối lượng chỉ bằng vài phím bấm Casio? Khám phá ngay bí quyết...' },
        { category: 'experience', img: '../assets/images/blog-roadmap-stitch.jpg', badgeText: 'Kinh nghiệm', date: '02/05/2026', readTime: '10 phút', title: 'Lộ Trình Bứt Phá Môn Hóa 8+ Từ Con Số 0', desc: 'Dành riêng cho những bạn đang mất gốc môn Hóa. Một kế hoạch chi tiết từ việc nắm vững bảng tuần hoàn đến các dạng toán nâng cao...' },
        { category: 'it', img: '../assets/images/blog-clean-code-stitch.jpg', badgeText: 'Công nghệ', date: '28/04/2026', readTime: '6 phút', title: 'Tại sao bạn nên bắt đầu với Clean Code ngay hôm nay?', desc: 'Viết code chạy được là một chuyện, viết code để người khác và chính bạn trong tương lai có thể đọc được lại là chuyện khác...' }
    ];

    let currentPosts = [...defaultPosts];

    function renderPosts(filter = 'all') {
        const grid = document.getElementById('blog-grid');
        const tmpl = document.getElementById('tmpl-blog-card');
        if (!grid || !tmpl) return;
        
        grid.innerHTML = '';
        const filtered = filter === 'all' ? currentPosts : currentPosts.filter(post => post.category === filter);
        
        filtered.forEach(post => {
            const clone = tmpl.content.cloneNode(true);
            const article = clone.querySelector('article');
            article.dataset.category = post.category || 'all';
            
            const img = clone.querySelector('img');
            img.src = post.img || '';
            img.alt = post.title || '';
            
            const badge = clone.querySelector('.blog-badge');
            badge.className = `blog-badge ${post.category}-badge`;
            badge.textContent = post.badgeText || 'Bài viết';
            
            clone.querySelector('.date-text').textContent = post.date || '';
            clone.querySelector('.read-text').textContent = post.readTime || '';
            clone.querySelector('.blog-title').textContent = post.title || '';
            clone.querySelector('.blog-desc').textContent = post.desc || '';
            
            grid.appendChild(clone);
        });
    }

    async function fetchPosts() {
        try {
            if (typeof ApiClient !== 'undefined') {
                const response = await ApiClient.get('/api/posts');
                if (response && response.length > 0) {
                    currentPosts = response;
                }
            }
        } catch (e) {
            console.warn("Dùng dữ liệu blog tĩnh", e);
        }
        renderPosts();
    }

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
            button.classList.add('active');
            renderPosts(button.dataset.filter);
        });
    });

    fetchPosts();

    document.getElementById('download-profile')?.addEventListener('click', () => window.print());

    const bentoWrapper = document.getElementById("bento-wrapper");
    if (bentoWrapper) {
        bentoWrapper.addEventListener("mousemove", e => {
            for(const card of document.getElementsByClassName("bento-card")) {
                const rect = card.getBoundingClientRect(),
                      x = e.clientX - rect.left,
                      y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });
    }

    const revealItems = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            let delay = 0;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay);
                    delay += 120; // 120ms stagger
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('is-visible'));
    }
})();
