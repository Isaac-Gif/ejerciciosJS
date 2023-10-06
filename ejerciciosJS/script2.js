document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores seleccionados
  const departamento = document.getElementById('departamento').value;
  const genero = document.getElementById('genero').value;
  const educacion = document.getElementById('educacion').value;
});
