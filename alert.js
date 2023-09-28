
// Función para generar una contraseña aleatoria
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const charset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const symbolsCharset = "!@#$%^&*()-_=+";

    let selectedCharset = charset;

    if (includeUppercase) {
        selectedCharset += uppercaseCharset;
    }

    if (includeLowercase) {
        selectedCharset += charset;
    }

    if (includeNumbers) {
        selectedCharset += numbersCharset;
    }

    if (includeSymbols) {
        selectedCharset += symbolsCharset;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharset.length);
        password += selectedCharset.charAt(randomIndex);
    }
    return password;
}

    // Función para calcular la seguridad de la contraseña y asignar un color
    function getPasswordStrength(password) {
        if (password.length < 6) {
            return { text: "Débil", color: "red" };
        } else if (password.length < 9) {
            return { text: "Buena", color: "orange" };
        } else if (password.length < 17) {
            return { text: "Moderada", color: "yellow" };
        } else {
            return { text: "Fuerte", color: "green" };
        }
    }

    // Función para actualizar el campo de contraseña y su color de seguridad
    function updatePassword() {
        const passwordLength = document.getElementById("lengthSlider").value;
        document.getElementById("passwordLength").textContent = passwordLength;

        const includeUppercase = document.getElementById("includeUppercase").checked;
        const includeLowercase = document.getElementById("includeLowercase").checked;
        const includeNumbers = document.getElementById("includeNumbers").checked;
        const includeSymbols = document.getElementById("includeSymbols").checked;

        const newPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
        document.getElementById("password").textContent = newPassword;

        const passwordStrength = getPasswordStrength(newPassword);
        const passwordStrengthElement = document.getElementById("passwordStrength");
        passwordStrengthElement.textContent = ` ${passwordStrength.text}`;
        passwordStrengthElement.style.color = passwordStrength.color;
    }

    // Asignar la función de actualización al botón y al deslizador
    document.getElementById("generateBtn").addEventListener("click", updatePassword);
    document.getElementById("lengthSlider").addEventListener("input", updatePassword);

// Generar una contraseña inicial al cargar la página
updatePassword();

// Reemplaza la alerta con SweetAlert
copyIcon.addEventListener("click", function () {
    // Selecciona el contenido del campo de contraseña
    const passwordField = document.getElementById("password");
    const passwordText = passwordField.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = passwordText;
    document.body.appendChild(textArea);
    textArea.select();

    // Copia el contenido al Portapapeles
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Muestra una notificación SweetAlert
    Swal.fire({
        icon: 'success',
        title: 'Contraseña copiada',
        text: 'La contraseña ha sido copiada con éxito',
        timer: 1000, //tiempo en milisegundos antes de que la notificación se cierre automáticamente
        showConfirmButton: false // Oculta el botón de aceptar
    });
});







