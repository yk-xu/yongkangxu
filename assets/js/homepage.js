$(document).ready(function() {
    $('a[href="#-about-me"]').on('click', function(e) {
      e.preventDefault(); // 防止默认的跳转行为
  
      document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
       });
       const parentSection = document.getElementById("-about-me");
       parentSection.style.display = 'block';
       console.log(parentSection)
    });
  });