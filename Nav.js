const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navLinks = document.querySelectorAll('.nav-links li')
  let closed = true

  burger.addEventListener('click', openNav)
  nav.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    closeNav()
  })

  function openNav () {
    if (!closed) {
      closeNav()
      return
    }
    closed = false

    //Animate Burger
    burger.classList.toggle('toggle')
    //Toggle Nav
    nav.classList.toggle('nav-active')
    //Animate Links
    navLinks.forEach((link, i) => {
      // Add nav link animations
      link.style.animation = `navLinkFade 0.5s ease forwards  ${i / 7 + 0.3}s`
      // Check if darkmode switch toggle, else close nav;
      if (link.nextElementSibling) {
        link.addEventListener('click', closeNav)
      }
    })
  }
  function closeNav () {
    closed = true
    //Reset Animated Burger
    burger.classList.toggle('toggle')
    //Close Nav
    nav.classList.toggle('nav-active')
    // Reset Nav Link Animation
    navLinks.forEach(link => (link.style.animation = ''))
  }
}
// On load
navSlide()
