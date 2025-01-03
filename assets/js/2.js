// scrollToSection.js
document.addEventListener("scrollToSection", function (e) {
    const targetId = e.detail.targetId;
    const section = document.getElementById(targetId);
    if (section) {
    //   console.log('Before scroll:', window.scrollY, section.getBoundingClientRect());
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //   console.log('After scroll:', window.scrollY, section.getBoundingClientRect());
    }
  });