(function() {
    const cambiarEstadoBotones = document.querySelectorAll('.cambiar-estado')
    const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

    cambiarEstadoBotones.forEach( boton => {
        boton.addEventListener('click', cambiarEstadoPropiedad)
    } )


    async function cambiarEstadoPropiedad(e) {

        const { propiedadId: id } = e.target.dataset
        
        try {
            const url = `/propiedades/${id}`

            const respuesta = await fetch(url, {
                method: 'PUT',
                headers: {
                    'CSRF-Token': token
                }
            })

            const {resultado} = await respuesta.json()

            if(resultado) {
                if(e.target.classList.contains('bg-yellow-100')) {
                    e.target.classList.add('bg-green-100', 'text-green-800')
                    e.target.classList.remove('bg-yellow-100', 'text-yellow-800')
                    e.target.textContent = 'Publicado'
                } else {
                    e.target.classList.remove('bg-green-100', 'text-green-800')
                    e.target.classList.add('bg-yellow-100', 'text-yellow-800')
                    e.target.textContent = 'No Publicado'
                }
            }
        } catch (error) {
            console.log(error)
        }
       
    }
})()