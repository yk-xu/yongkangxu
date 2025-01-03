document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a"); // 获取所有导航链接
  // targetLink.removeEventListener('click', someOldFunction);
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 阻止默认跳转行为
      // console.log("阻止跳转了吗？如阻");
      const targetId = this.getAttribute('href').substring(1);  // 获取目标 section ID
      const targetLevel = this.getAttribute('data-level');  // 获取目标 item 的 level

      // 隐藏所有父级和子级的 section
      document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
      });

      if (targetLevel === "1") {

        // 如果点击的是父级，显示对应的父级及其子级
        const parentSection = document.getElementById(targetId);
        parentSection.style.display = 'block';

        // 显示父级下面所有子级部分
        const subSections = parentSection.querySelectorAll('[data-level="2"]');
        // console.log(subSections);
        subSections.forEach(subSection => {
          subSection.style.display = 'block';
        });
        // 触发滚动事件
        const event = new CustomEvent('scrollToSection', {
          detail: { targetId: targetId }
        });
        document.dispatchEvent(event);  // 触发滚动事件

      } else if (targetLevel === "2") {
        // 如果点击的是子级，显示父级及其子级

        const parentLink = this.closest('li').parentElement.closest('li').querySelector('a[data-level="1"]');
        const parentId = parentLink ? parentLink.getAttribute('href').substring(1) : null;

        const parentSection = document.getElementById(parentId);
        parentSection.style.display = 'block';
        const subSections = parentSection.querySelectorAll('[data-level="2"]');
        subSections.forEach(subSection => {
          subSection.style.display = 'block';
        });
        // 显示当前子级
        const subSection1 = document.getElementById(targetId);

        subSection1.style.display = 'block';
        // 触发滚动事件
        const event = new CustomEvent('scrollToSection', {
          detail: { targetId: targetId }
        });
        document.dispatchEvent(event);  // 触发滚动事件
      }

    });
  });
});

