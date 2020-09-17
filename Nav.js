const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
  
    burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active')
      //Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 +
            0.3}s`
        }
        // Don't deactivate nav after dark mode slider toggle
        if(link.nextElementSibling) {link.addEventListener('click', resetNav)}
        
      })
      //Animate Burger
      burger.classList.toggle('toggle')
    })
  
    function resetNav () {
      burger.classList.toggle('toggle')
      nav.classList.toggle('nav-active')

      navLinks.forEach((link,index) => {
        if (link.style.animation) {link.style.animation = '';} 
      });
    }
  }
  // On load
  navSlide()
  