const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key=2ihJ0Ot9DzKfocgTfhs3OcL8GOHFkVys#')

peticion.then((response)=>{
    console.log(response)
})