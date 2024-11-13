document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Enviar solicitud con método GET
    axios.get("http://localhost:3000/login", {
        params: {
            username: username,
            password: password
        }
    })
    .then(response => {
        if (response.data.message === "Inicio de sesión exitoso") {
            alert("Bienvenido, " + response.data.user.nombre);

            // Guardar estado de autenticación en localStorage
            localStorage.setItem("isAuthenticated", "true");

            // Redirigir a modulos.html
            window.location.href = "modulos.html";
        } else {
            document.getElementById("error-message").innerText = "Usuario o contraseña incorrectos";
        }
    })
    .catch(error => {
        alert("Error durante el inicio de sesión:", error);
        document.getElementById("error-message").innerText = "Error al intentar iniciar sesión";
    });
});
