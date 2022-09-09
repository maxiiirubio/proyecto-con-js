const divDolar = document.getElementById("divDolar")

fetch("https://criptoya.com/api/dolar")
.then(respuesta => respuesta.json())
.then(({solidario, ccl, mep, blue}) => {
    divDolar.innerHTML = `
        <p>Solidario: $${solidario} </p>
        <p>CCL: $${ccl} </p>
        <p>Mep: $${mep} </p>
        <p>Blue: $${blue} </p>
    `
})