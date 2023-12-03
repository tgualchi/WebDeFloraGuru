// script.js

// script.js

function calculateBMI() {
    // Obtener los valores de los campos
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;

    // Validar que los campos no estén vacíos
    if (height === '' || weight === '' || age === '') {
        alert('Por favor, ingresa todos los valores.');
        return;
    }

    // Calcular el IMC
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);

    // Clasificar el IMC
   // Clasificar el IMC
   var bmiCategory = '';
   if (bmi < 18.5) {
       bmiCategory = 'DEFICIENTE'; // Cambiado a 'poor' en lugar de 'Peso deficiente'
   } else if (bmi >= 18.5 && bmi < 24.9) {
       bmiCategory = 'NORMAL'; // Cambiado a 'normal' en lugar de 'Peso normal'
   } else if (bmi >= 25 && bmi < 29.9) {
       bmiCategory = 'SOBREPESO'; // Cambiado a 'overweight' en lugar de 'Sobrepeso'
   } else {
       bmiCategory = 'OBESIDAD'; // Cambiado a 'obese' en lugar de 'Obesidad'
   }

   // Mostrar el resultado con clase de estilo
   var resultDiv = document.getElementById('result');
   resultDiv.innerHTML = `<p class="result-${bmiCategory}">Tu IMC es: ${bmi.toFixed(2)}</p>`;
   resultDiv.innerHTML += `<p class="result-${bmiCategory}">Categoría de peso: ${bmiCategory.charAt(0).toUpperCase() + bmiCategory.slice(1)}</p>`;
   // ... (código posterior)
    
    // Agregar información adicional según el género
    if (gender === 'male') {
        resultDiv.innerHTML += `<p>Como hombre de ${age} años, puedes evaluar tu IMC según estándares específicos para hombres.</p>`;
    } else if (gender === 'female') {
        resultDiv.innerHTML += `<p>Como mujer de ${age} años, puedes evaluar tu IMC según estándares específicos para mujeres.</p>`;
    }
}
