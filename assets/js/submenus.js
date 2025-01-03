document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("a[href^='#']");
  
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault(); // 阻止默认跳转
  
        const targetId = link.getAttribute("href").substring(1); // 获取目标 id
        const targetElement = document.getElementById(targetId); // 获取目标元素
  
        if (targetElement) {
          // 先显示父 section，再显示对应的子 section
          const parentSection = targetElement.closest("section"); // 查找父 section
          if (parentSection) {
            parentSection.style.display = "block"; // 显示父 section
            parentSection.scrollIntoView({ behavior: "smooth", block: "start" }); // 滚动到父 section
          }
  
          // 滚动到目标子元素
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  });
  