const display = (data) => {

    const content = document.getElementById("content")
    console.log(data)
    content.innerHTML = `
    
    <h2>Location: ${data.location.name}</<h2>

    <h3>Temp C: ${data.current.temp_c}</h3>
    <h3>Temp F: ${data.current.temp_f}</h3>
    
    `

}

export default display