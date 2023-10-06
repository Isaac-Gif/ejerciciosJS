function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const dui = document.getElementById('dui');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const genero = document.getElementById('genero');
    const departamento = document.getElementById('departamento');
  
    const campos = [nombre, dui, fechaNacimiento, genero, departamento];
  
    campos.forEach((campo) => {
      if (campo.value.trim() === '') {
        campo.style.backgroundColor = 'gray';
      } else {
        campo.style.backgroundColor = 'white';
      }
    });
  }
  