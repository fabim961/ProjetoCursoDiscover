function toggleMode() {
  const html = document.documentElement

  // Condição de duas opções pode ser facilmente substituida pela função toggle
  html.classList.toggle("light")

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  //substituir a imagem
  //pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
