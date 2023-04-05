function funcionGenerarPalabra(x) {
  // let palabra = document.getElementById("palabra");

  window.espacios = "";
  window.palabraGuardada;

  if (x == 1) {
    const palabras = {
      palabra0: "relajarse",
      palabra1: "automovil",
      palabra2: "programacion",
      palabra3: "computadora",
      palabra4: "mensaje",
      palabra5: "guayaba",
      palabra6: "gimnasio",
      palabra7: "almuerzo",
      palabra8: "dormir",
      palabra9: "estudios",
    };

    let n = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    switch (n) {
      case 1:
        palabraGuardada = palabras.palabra0;

        break;
      case 2:
        palabraGuardada = palabras.palabra1;

        break;
      case 3:
        palabraGuardada = palabras.palabra2;

        break;
      case 4:
        palabraGuardada = palabras.palabra3;

        break;
      case 5:
        palabraGuardada = palabras.palabra4;

        break;
      case 6:
        palabraGuardada = palabras.palabra5;

        break;
      case 7:
        palabraGuardada = palabras.palabra6;

        break;
      case 8:
        palabraGuardada = palabras.palabra7;

        break;
      case 9:
        palabraGuardada = palabras.palabra8;

        break;
      case 10:
        palabraGuardada = palabras.palabra9;
        break;
    }

    for (i = 0; i < palabraGuardada.length; i++) {
      espacios.innerText += " _";
    }
  }

  console.log(palabraGuardada);
  // console.log(palabra);
}

function funcionAhorcado() {
  let letra = document.getElementById("letra").value;
  let letraUsada = document.getElementById("usadas");
  let espacios2 = espacios;
  let espaciosArray = espacios2.split(" ");

  for (i = 0; i < espaciosArray.length; i++) {
    if (letra == palabraGuardada[i]) {
      espaciosArray[i] = " " + letra;
    } else if (espaciosArray[i] == " ") {
      espaciosArray[i] = " _";
    }
  }


  letraUsada.innerText += letra + "-";

  document.getElementById("palabra").innerText = espaciosArray;

  espacios = espaciosArray.toString();

  console.log(espaciosArray);
  console.log(espacios);



}
