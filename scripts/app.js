function init(){
  const pads = document.querySelectorAll('.grid-item')
  const sounds = document.querySelectorAll('.sound')
  const logo = document.querySelector('.logo')

  function handleLogoEnter(event){
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQasI0poNNGAyPcMKelM9koj14RmRwdSa8xw&usqp=CAU'
  }
  function handleLogoLeave(event){
    event.target.src = '/Users/chifteluta/development/HOMEWORK/Nicholas/js-soundboard-start/images/logo.png'
  }
  logo.addEventListener('mouseenter', handleLogoEnter)
  logo.addEventListener('mouseleave', handleLogoLeave)

  pads.forEach((pads, i) => pads.addEventListener('click', function(){
    pads.classList.toggle('grid-item:hover')
    sounds[i].currentTime = 0
    sounds[i].play()
  }))
  

}

window.addEventListener('DOMContentLoaded', init)

