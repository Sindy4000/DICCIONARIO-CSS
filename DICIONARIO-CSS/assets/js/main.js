//Este código se ejecuta cuando la pagina termina de cargar 
document.addEventListener("DOMContentLoaded",function(){
    const sendBtn=document.getElementById("sendBtn");
    const input=document.getElementById("messagesInput");
    const messages=document.getElementById("messages");

    //Diccionario con propiedades CSS
    const propiedadesCSS={
        color:"La propiedad 'color' cambia el color del texto.",
        margin:"La propiedad 'margin' agrega espacio/margen alrededor de un elemento.",
        padding: "La propiedad 'padding' agrega espacio dentro de un elemento.",
        border: "La propiedad 'border' define el borde de un elemento.",
        background: "La propiedad 'background' establece el fondo de un elemento.",
        width: "La propiedad 'width' define el ancho de un elemento.",
        height: "La propiedad 'height' define la altura de un elemento."

    };

    //Función que permite agregar el mensaje del usuario al chat
        function agregarMensaje(texto,clase){
            const msg= document.createElement("div");//Crear un nuevo elemento
            msg.classList.add("message", clase);//Asignar clases 
            msg.textContent=texto;//Asignar el texto al div
            messages.appendChild(msg);//Agregar el mensaje al area del chat
            messages.scrollTop=messages.scrollHeight;//Mandar al final del chat

        }

        //función que analiza lo que escribió el usuario y genera una resouesta
        function analizarMensaje(texto){
            const textoRecibido = texto.toLowerCase();//Convertir todo en minúscula 

            //Buscar si el mensaje contiene una propiedad CSS del diccionario
            for(const propiedad in propiedadesCSS){
                if(textoRecibido.includes(propiedad)){
                    return propiedadesCSS[propiedad];// Devolver la repuesta encontrada
                }
            }

            //Si no encuentra nada
            return "La propiedad no se encuentra en el diccionario CSS.";
        }
        //funcion para enviar el mensaje
        function enviarMensaje(){
            const texto=input.value.trim();//Obtener el texto sin espacios
            if(texto ==="")return;

            agregarMensaje(texto,"user");//Mostrar el mensaje del usuario
            input.value="";
            input.focus();
        

        //Esperar 0.5 segundos antes de mostrar la repuesta de bot
        setTimeout(function (){
            const repuesta=analizarMensaje(texto); // Obtener la respuesta del bot
            agregarMensaje(repuesta, "bot");
        },500);
    }

    //Capturar eventos
    sendBtn.addEventListener("click",enviarMensaje);

    input.addEventListener("keypress",function(e){
        if(e.key==="Enter"){
            enviarMensaje();
        }
    });
});
