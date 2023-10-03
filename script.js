const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

 function btnEncriptar(){
    const mensajeEncriptado = encriptar(textArea.value);
    mensaje.value = mensajeEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copia.style.display = "block"
 }
 
function encriptar(mensajeEncriptado) {
    let cifrados = [["e","enter"],["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for ( let i = 0; i < cifrados.length; i++ ) {
        if( mensajeEncriptado.includes(cifrados[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(cifrados[i][0], cifrados[i][1])

        } 
    } 
    return mensajeEncriptado;
}

function btnDesencriptar(){
    const mensajeEncriptado = desencriptar(textArea.value);
    mensaje.value = mensajeEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
 }
 
function desencriptar(mensajeDesencriptado){
    let cifrados = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()

    for(let i = 0; i < cifrados.length; i++){
        if(mensajeDesencriptado.includes(cifrados[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(cifrados[i][1] , cifrados[i][0])

        }

    }
    return mensajeDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}