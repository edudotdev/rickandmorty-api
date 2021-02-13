import Character from './character.js'
import API from './api.js'

const api = new API()

const btnNext = document.querySelector('#next')
const btnLast = document.querySelector('#last')

let NPage = 1
let maxPges
let URL = `https://rickandmortyapi.com/api/character/?page=`
   
api.apiConnection(URL, NPage)
  .then(response => {
    
    const info = response.info
    const results = response.results 

    maxPges = info.pages 
    
    console.log(results);
    
    results.map((res) => {
      new Character(res) 
    })

  })

// Events
btnNext.addEventListener('click', () => {
  if(NPage >= maxPges) {
    return
  } else {
    NPage++ 
  }
 
  api.apiConnection(URL,NPage)
  .then(response => {
    
    const result = response.results 

    result.map((res) => {
    new Character(res)  
    })   
  }) 
})  

btnLast.addEventListener('click', () => {
  if(NPage <= 1) {
    return
  } else {
    NPage-- 
  }
  api.apiConnection(URL,NPage)
  .then(response => {
    
    const result = response.results

    result.map((res) => {
      new Character(res)  
    })   
  }) 
})  

  new fullpage('#fullpage', {
  // ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		 autoScrolling: false, // Se activa el scroll.
		 fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		 loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['Home', 'Characters', 'Github'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Home', 'Characters', 'Github'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa. 
     // ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#1b1b1b', '#1b1b1b', '#1b1b1b'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.   
})