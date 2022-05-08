var texto = document.querySelector("#texto");
var textoCriptografado = document.querySelector("#textoCriptografado");
var inicio = document.querySelector(".inicio");
var segredo = document.querySelector(".segredo");

function btCodificar() {
    const stringEncriptografar = codificar(texto.value)
    textoCriptografado.value = stringEncriptografar
}

function codificar(stringEncriptografar) {
    let newString;
    const mapa = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }
    stringEncriptografar = stringEncriptografar.toLowerCase();

    for (let key in mapa) {
        if (stringEncriptografar.includes(key)) {

            if (newString) {
                newString = newString.replaceAll(key, mapa[key])
            } else {
                newString = stringEncriptografar.replaceAll(key, mapa[key])
            }
        }
    }
    inicio.style.display = 'none'
    segredo.style.display = 'flex'
    return newString
}

function btDecodificar(){
    const stringDesCriptografar = desCriptografar(texto.value)
    textoCriptografado.value = stringDesCriptografar
}

function desCriptografar(stringDesCriptografar){
    let newDescriptador;
    const mapaCodigo = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    }
    stringDesCriptografar = stringDesCriptografar.toLowerCase();

    for (let key in mapaCodigo){
        if (stringDesCriptografar.includes(key)){

            if (newDescriptador){
                console.log(newDescriptador = newDescriptador.replaceAll(key,mapaCodigo[key]))
            } else {
                newDescriptador = stringDesCriptografar.replaceAll(key, mapaCodigo[key])
            }
        }
    }
    inicio.style.display = 'none'
    segredo.style.display = 'flex'
    return newDescriptador
}

function copiar() {
    let copiaTexto = document.getElementById("textoCriptografado");
    copiaTexto.select();
    navigator.clipboard.writeText(copiaTexto.value);
    alert('Mensagem copiada com sucesso');
    
}

texto.value = "";
texto.focus();
textoCriptografado.value = "";