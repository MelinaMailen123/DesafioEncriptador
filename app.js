document.addEventListener("DOMContentLoaded", function() {

    var botonEncriptar = document.querySelector(".btn_encriptar");
    var botonDesencriptar = document.querySelector(".btn_desencriptar");
    var logo2 = document.querySelector(".cuadro");
    var contenedor = document.querySelector(".contenedor_parrafo");
    var resultado = document.querySelector(".texto-resultado");


    botonEncriptar.onclick = (Encriptar);
    botonDesencriptar.onclick = (Desencriptar);


    function ocultarAdelante(){
        logo2.classList.add("ocultar");
        contenedor.classList.add("ocultar");
    }

    function Encriptar(){
        ocultarAdelante();
        var cajatexto = recuperarTexto()
        resultado.textContent = encriptarTexto(cajatexto);
    }

    function Desencriptar(){
        ocultarAdelante();
        var cajatexto = recuperarTexto()
        resultado.textContent = desencriptarTexto(cajatexto);
    }

    function recuperarTexto(){
        var cajatexto = document.querySelector(".cajatexto")
        return cajatexto.value
    }

    function encriptarTexto(mensaje){
        var texto = mensaje;
        var textoFinal = "";

        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoFinal = textoFinal + "ai"
            }
            else if(texto[i] == "e"){
                textoFinal = textoFinal + "enter"
            }
            else if(texto[i] == "i"){
                textoFinal = textoFinal + "imes"
            }
            else if(texto[i] == "o"){
                textoFinal = textoFinal + "ober"
            }
            else if(texto[i] == "u"){
                textoFinal = textoFinal + "ufat"
            }
            else{
                textoFinal = textoFinal + texto[i]
            }
        }
        return textoFinal;

    }

    function desencriptarTexto(mensaje){
        var texto = mensaje;
        var textoFinal = "";

        for(var i = 0; i < texto.length; i++){
            if(texto[i] == "a"){
                textoFinal = textoFinal + "a"
                i = i+1;
            }
            else if(texto[i] == "e"){
                textoFinal = textoFinal + "e"
                i = i+4;
            }
            else if(texto[i] == "i"){
                textoFinal = textoFinal + "i"
                i = i+3;
            }
            else if(texto[i] == "o"){
                textoFinal = textoFinal + "o"
                i = i+3;
            }
            
            else if(texto[i] == "u"){
                textoFinal = textoFinal + "u"
                i = i+3;
            }
            else{
                textoFinal = textoFinal + texto[i];
            }
            
        }

        return textoFinal;

    }
    })
  document.addEventListener("DOMContentLoaded", function() {
        const btnCopiar = document.querySelector(".btn_copiar"); 

        if (btnCopiar) {
            btnCopiar.addEventListener("click", () => {
                var contenido = document.querySelector(".texto-resultado").textContent;
                navigator.clipboard.writeText(contenido);
                console.log("hola");
            });
        } else {
            console.error("No se encontró el elemento .btn_copiar");
        }
    });

    document.getElementById('btnPegar').addEventListener('paste', function(event) {
        const btnPegar = document.querySelector(".btn_pegar");

            if(btnPegar){
                btnPegar.addEventListener("click",()=> {
                    var contenido = document.querySelector(".texto-resultado").textContent;
                    navigator.clipboard.writeText(contenido);
                })
            }
    });
    