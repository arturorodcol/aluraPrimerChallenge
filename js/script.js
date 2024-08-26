const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"], 
        ["a", "ai"], 
        ["o", "ober"],
        ["u", "ufat"],
        ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"],
    ["u", "ufat"],
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

btnCopiar.addEventListener("click", () => {
    const contenido = mensaje.value;
    navigator.clipboard.writeText(contenido);
});