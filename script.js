
    function toggleAdditionalContent(event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        var additionalContent = document.querySelector('.additional-content');
        additionalContent.style.display = (additionalContent.style.display === 'block') ? 'none' : 'block';
    }

    function submitForm() {
        // Obtener los valores de los campos del formulario
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Aquí puedes realizar alguna validación de los datos si es necesario

        // Enviar los datos a través de una petición HTTP o hacer lo que necesites
        // Por ejemplo, podrías usar la función fetch o enviar los datos a un servidor usando XMLHttpRequest

        // Ejemplo de mostrar un mensaje de agradecimiento
        alert('Gracias por enviar el formulario, ' + name + '!');
    }

    function redirectToSection() {
        // Cambiar la ubicación de la ventana al elemento con el ID "calc"
        window.location.href = '#calculadora';
        window.location.href = "#preguntas";
        window.location.href = "#formulario";                       
    }
