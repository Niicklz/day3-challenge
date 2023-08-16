const rotateButtons:NodeListOf<HTMLElement> = document.querySelectorAll("[data-rotateButton]")

rotateButtons.forEach(button=> {
  button.addEventListener("click", ()=> {
   
    document.getElementById("rotatingMenu")?.classList.toggle("rotate")
    document.getElementById("container")?.classList.toggle("rotate-container")
    document.getElementById("options")?.classList.toggle("active")
    
  })
}) 