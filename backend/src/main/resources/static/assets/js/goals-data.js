// Dữ liệu toàn bộ trang Mục Tiêu
const GITHUB_REPO_CREATION_YEAR = 2024; // [CẦN ĐIỀN: Năm bắt đầu lộ trình]
const LAST_UPDATED = "15/10/2026"; // [CẦN ĐIỀN: Ngày cập nhật]

const SA_DATA = {
    overview: {
        lastUpdated: LAST_UPDATED
    },
    goals: [
        {
            id: 'g1',
            title: 'Hoàn thiện Microservices với Spring Cloud',
            category: 'hoc-tap',
            deadline: '2026-11-30',
            progress: 65,
            status: 'dang-thuc-hien', // hoan-thanh, dang-thuc-hien, ke-hoach, qua-han
            description: 'Tách API monolith hiện tại thành 3 services, thiết lập API Gateway và Service Discovery.',
            steps: ['Tách Service', 'Cấu hình Eureka', 'Tích hợp Gateway']
        },
        {
            id: 'g2',
            title: 'Đạt chứng chỉ AWS Solutions Architect Associate',
            category: 'su-nghiep',
            deadline: '2026-08-15',
            progress: 80,
            status: 'qua-han', 
            description: 'Hoàn thành 3 practice tests với điểm trên 85% và đăng ký thi chính thức.',
            steps: ['Học khóa CloudQuest', 'Practice Exam 1', 'Practice Exam 2']
        },
        {
            id: 'g3',
            title: 'Viết 5 Tech Blog về System Design',
            category: 'ky-nang',
            deadline: '2026-12-31',
            progress: 40,
            status: 'dang-thuc-hien',
            description: 'Tài liệu hóa kiến thức về C4 Model, Caching strategy, và Event-driven.',
            steps: ['Bài 1: C4 Model', 'Bài 2: Redis Caching']
        },
        {
            id: 'g4',
            title: 'Xây dựng CICD Pipeline chuẩn Production',
            category: 'ky-nang',
            deadline: '2026-10-01',
            progress: 100,
            status: 'hoan-thanh',
            description: 'Tự động hóa toàn bộ quá trình test, build image và deploy lên server.',
            steps: ['Cấu hình GitHub Actions', 'Viết Dockerfile', 'Deploy script']
        },
        {
            id: 'g5',
            title: 'Duy trì chạy bộ 15km/tuần',
            category: 'cuoc-song',
            deadline: '2026-12-31',
            progress: 15,
            status: 'dang-thuc-hien',
            description: 'Nâng cao thể lực để đáp ứng cường độ làm việc cao.',
            steps: ['Chạy bộ sáng', 'Tham gia giải chạy']
        }
    ],
    roadmap: [
        {
            id: 'r1',
            year: '2022 — 2023',
            title: 'Nền tảng lập trình',
            description: 'Java, OOP, cấu trúc dữ liệu và giải thuật; xây nền tư duy giải quyết vấn đề.',
            status: 'hoan-thanh'
        },
        {
            id: 'r2',
            year: '2023 — 2024',
            title: 'UET & sản phẩm đầu tiên',
            description: 'Spring Boot, MySQL và portfolio; chuyển kiến thức thành sản phẩm có thể vận hành.',
            status: 'hoan-thanh'
        },
        {
            id: 'r3',
            year: '2024 — 2026',
            title: 'Full-stack & Cloud foundation',
            description: 'Microservices, Docker, CI/CD, dạy học và tích hợp AI vào bài toán thực tế.',
            status: 'dang-thuc-hien'
        },
        {
            id: 'r4',
            year: '2026 — 2027',
            title: 'Thực chiến hệ thống',
            description: 'Thực tập Java Backend, đóng góp open source và thiết kế workload trên cloud.',
            status: 'ke-hoach'
        },
        {
            id: 'r5',
            year: '2027+',
            title: 'Solutions Architect track',
            description: 'Tích lũy ADR, C4, security, capacity planning và năng lực tư vấn giải pháp.',
            status: 'ke-hoach'
        }
    ],
    topics: [
        { title: 'DATA FOUNDATION', status: 'hoan-thanh', name: 'PostgreSQL Indexing', desc: 'B-tree, Hash, GiST, GIN và chiến lược tối ưu truy vấn.', progress: 82 },
        { title: 'EVENT SYSTEMS', status: 'dang-thuc-hien', name: 'Kafka & Pub/Sub', desc: 'Partitioning, consumer groups và event-driven.', progress: 65 },
        { title: 'CLOUD DELIVERY', status: 'ke-hoach', name: 'Docker & Kubernetes', desc: 'Orchestration, deployment strategy, service mesh.', progress: 38 },
        { title: 'SYSTEM DESIGN', status: 'dang-thuc-hien', name: 'C4 & Capacity Planning', desc: 'Context, container, component, throughput estimation.', progress: 55 }
    ],
    capabilities: {
        radar: [
            { name: 'Backend', value: 82 },
            { name: 'Cloud', value: 66 },
            { name: 'System Design', value: 61 },
            { name: 'Communication', value: 57 },
            { name: 'English', value: 48 },
            { name: 'Delivery', value: 74 }
        ],
        communication: {
            minutes: 142, // [CẦN ĐIỀN: phút thuyết trình thực tế]
            sessions: [
                { name: 'Designing Resilient APIs', duration: 38, icon: 'fa-microphone-lines' },
                { name: 'Architecture Review', duration: 45, icon: 'fa-users' },
                { name: 'English Tech Talk', duration: 59, icon: 'fa-language' }
            ]
        }
    }
};
