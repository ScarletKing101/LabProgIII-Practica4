function validarLongitud() {
  let str = document.querySelector("#insertarCedula").value;
  return (str.length === 0 || str.length < 11) ? true : false;
}

function algoritmoLuhn(str) {
  let longitud = str.length;
  let paridad = longitud % 2;
  let total = 0;

  for (let i = longitud - 1; i >= 0; i--) {
      let digito = parseInt(str.charAt(i));
      if (i % 2 == paridad) { 
        digito *= 2;
      }

      if (digito > 9) { 
        digito -= 9 ;
      }

      total += digito;
  }

  return total % 10;
}

function mostrar() {
  let cedula = document.querySelector("#insertarCedula").value;
  let arr = ['Cédula es válida.', 'Cédula es inválida.', 'Cédula esta incompleta.'];
  let colores = ['#00ff00', '#ff0000', '#ffa500'];
  let texto = document.querySelector("#parrafoTexto");
  texto.className = "";
  let span = document.querySelector(".colorTexto");
  span.classList.add("colorValido");

  if (validarLongitud()) {
    console.log(validarLongitud())
    span.textContent = arr[2];
    span.style.color = colores[2];
    span.classList.remove("ocultar");
  } else if (algoritmoLuhn(cedula) === 0) {
    span.textContent = arr[0];
    span.style.color = colores[0];
    span.classList.remove("ocultar");
  } else {
    span.textContent = arr[1];
    span.style.color = colores[1];
    span.classList.remove("ocultar");
  }
}