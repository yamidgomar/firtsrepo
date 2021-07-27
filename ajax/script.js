const onload = function(archivo,id){
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', 'ajax_info.txt', true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.querySelector('#respuesta').innerHTML = this.responseText
        }
    }
}

document.querySelector('#boton').addEventListener('click', onload)

