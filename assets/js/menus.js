document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("a"); // 获取所有导航链接
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // 阻止默认跳转行为

            // 隐藏所有 section
            document.querySelectorAll("section").forEach(section => {
                section.style.display = "none";
            });

            // 获取点击的链接的目标 section ID
            const targetId = link.getAttribute("href").substring(1); // 获取 id，不包含 #
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.style.display = "block";  // 显示目标 section
            }
        });
    });
});