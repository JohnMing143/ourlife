document.addEventListener('DOMContentLoaded', function() {

    // --- 导航栏滚动效果 ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- 平滑滚动到锚点 ---
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 检查链接是否只是一个#，如果是，则不阻止默认行为
            if (this.getAttribute('href') === '#') return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 打字机效果初始化 ---
    const typedSubtitle = document.getElementById('typed-subtitle');
    if (typedSubtitle) {
        // 在这里自定义你想要循环播放的句子
        const sentences = [
            "从迷茫到启航，我们与你同行。",
            "探索无限可能，定义你的四年。",
            "分享宝贵经验，点亮前行的路。",
            "在这里，找到属于你的答案。"
        ];

        new Typed('#typed-subtitle', {
            strings: sentences,
            typeSpeed: 60,      // 打字速度
            backSpeed: 30,      // 回退速度
            backDelay: 2000,    // 完成一句话后等待多久开始回退
            startDelay: 500,    // 开始前的延迟
            loop: true,         // 循环播放
            showCursor: true,   // 显示光标
            cursorChar: '_',    // 光标字符
        });
    }
});