class Estudio{
	constructor(dia, materia, horas){
		this.dia = dia
		this.materia = materia
		this.horas = horas
	}
}

let HsEstudio = []

if(localStorage.getItem("HsEstudio")) {
	HsEstudio = JSON.parse(localStorage.getItem("HsEstudio"))
} else {
	localStorage.setItem("HsEstudio", JSON.stringify(HsEstudio))
}

const form = document.getElementById("form")
const botonHsEstudio = document.getElementById("btnHsEstudio")
const botonBorrar = document.getElementById("btnBorrar")
const divHsEstudio = document.getElementById("divHsEstudio")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datosForm = new FormData(e.target)

    const datos = new Estudio(datosForm.get("dias"), datosForm.get("materia"), datosForm.get("horas"))
    
    HsEstudio.push(datos)

    localStorage.setItem('HsEstudio', JSON.stringify(HsEstudio))

    form.reset()
})

botonHsEstudio.addEventListener('click', () => {
    const horasEst = JSON.parse(localStorage.getItem('HsEstudio'))

    divHsEstudio.innerHTML = ""

    horasEst.forEach((estudio, indice) => {
        divHsEstudio.innerHTML += `
			<ul id=horaEst${indice}>
				<li>El dia ${estudio.dia}, estudie ${estudio.materia}, durante ${estudio.horas}</li>
				<button class="btn2">Borrar</button>
			</ul>
        
        `
    })
    horasEst.forEach((estudio, indice) => {
        const borrarElemnto = document.getElementById(`horaEst${indice}`)

		borrarElemnto.children[1].addEventListener('click', () => {
			borrarElemnto.remove()
		 	HsEstudio.splice(indice, 1)
			localStorage.setItem("HsEstudio", JSON.stringify(HsEstudio))
			console.log(`${estudio.materia} ELIMINADA`)
		})
		
    })
})



// const borrarElemnto = document.getElementById(`horaEst${indice}`) 

// botonBorrar.addEventListener('click', () => {
// 	borrarElemnto.remove()
// 	HsEstudio.splice()
// })