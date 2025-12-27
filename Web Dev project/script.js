document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseover', () => {
      skill.style.transform = 'scale(1.2)';
      skill.style.transition = '0.3s';
    });
    skill.addEventListener('mouseout', () => {
      skill.style.transform = 'scale(1)';
    });
  });