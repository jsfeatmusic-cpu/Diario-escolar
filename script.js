// Ejecutar cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el modal de bienvenida al ingresar
    setTimeout(() => {
        document.getElementById('welcome-modal').classList.add('active');
    }, 500);
});

// Función para cerrar el modal
function closeModal() {
    document.getElementById('welcome-modal').classList.remove('active');
}
