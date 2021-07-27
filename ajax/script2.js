const datosTabla = function(archivo,id){
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'json_info.json', true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            let res = document.querySelector('#res')
            res.innerHTML = ''
            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.artista}</td>
                    <td>${item.cancion}</td>
                </tr>
                `
            }
        }
    }
}

document.querySelector('#boton2').addEventListener('click', datosTabla)
