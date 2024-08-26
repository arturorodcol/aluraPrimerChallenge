const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");

function copiarAlPortapapeles() {
    const contenido = mensaje.value;
    navigator.clipboard.writeText(contenido).then(() => {
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        alert("Error al copiar al portapapeles: " + err);
    });
}

btnCopiar.addEventListener("click", copiarAlPortapapeles);

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
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

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
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

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}