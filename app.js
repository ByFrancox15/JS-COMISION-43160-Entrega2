let usuarios = [];

class Usuario {
  constructor(nombre, contraseña, nombrePersonaje, edad) {
    this.nombre = nombre;
    this.contraseña = contraseña;
    this.nombrePersonaje = nombrePersonaje;
    this.edad = edad;
  }
}

function registrarUsuario() {
  const nombre = prompt("Ingrese su nombre y apellido:");
  const contraseña = prompt("Ingrese su contraseña:");
  const nombrePersonaje = prompt("Ingrese el nombre de su personaje:");
  const edad = parseInt(prompt("Ingrese su edad:"));

  alert("los datos fueron guardados con éxito");

  alert("Los Datos Son: \nNombre y Apellido: " + nombre +"\nContraseña: " + contraseña +"\nNombre Del Personaje: " + nombrePersonaje +"\nEdad: " + edad);

  let clasePersonaje;
  do {
    clasePersonaje = prompt(
      "Elija la clase de su personaje: \nArquero \nMago \nAsesino \nTanque \nInvocador"
    ).toLowerCase();
  } while (!["arquero", "mago", "asesino", "tanque", "invocador"].includes(clasePersonaje));

  const nuevoUsuario = {
    nombre: nombre,
    contraseña: contraseña,
    nombrePersonaje: nombrePersonaje,
    edad: edad,
    clasePersonaje: clasePersonaje,
  };

  usuarios.push(nuevoUsuario);
  mostrarUsuarios();
  enfrentarMonstruo(clasePersonaje);
}

function mostrarUsuarios() {
  let mensaje = "Usuarios registrados:\n";
  usuarios.forEach((usuario) => {
    mensaje += `
      Nombre: ${usuario.nombre}
      Contraseña: ${usuario.contraseña}
      Personaje: ${usuario.nombrePersonaje}
      Edad: ${usuario.edad}
      Clase: ${usuario.clasePersonaje}\n\n
    `;
  });
  alert(mensaje);
}

function enfrentarMonstruo(clasePersonaje) {
  let monstruo;
  switch (clasePersonaje) {
    case "arquero":
      monstruo = prompt("Te encuentras con un monstruo: Ogro. ¿Qué haces? \n1. Disparar flechas \n2. Escapar");
      if (monstruo === "1") {
        alert("Has vencido al Ogro. ¡Avanzas a la siguiente etapa!");
      } else {
        alert("El Ogro te ha vencido. ¡Game Over!");
      }
      monstruo = prompt("Te encuentras con un monstruo: Ciclope. ¿Qué haces? \n1. Atacar con una flecha a su ojo \n2. Atacar con todas tus flechas a sus piernas \n3. Huir");
      if (monstruo === "1") {
        alert("Has vencido al Ciclope. ¡Felicidades has ganado!");
      } else {
        alert("El Ciclope te ha vencido. ¡Game Over!");
      }
      break;
    case "mago":
      monstruo = prompt("Te encuentras con un monstruo: Esqueleto. ¿Qué haces? \n1. Lanzar hechizo \n2. Huir");
      if (monstruo === "1") {
        alert("Has vencido al Esqueleto. ¡Avanzas a la siguiente etapa!");
      } else {
        alert("El Esqueleto te ha vencido. ¡Game Over!");
      }
      monstruo = prompt("Te encuentras con un monstruo: Vampiro. ¿Qué haces? \n1. Lanzar maldición \n2. Sanar con magia \n3. Escapar");
      if (monstruo === "2") {
        alert("Has vencido al Vampiro. ¡Felicidades has ganado!");
      } else {
        alert("El Vampiro te ha vencido. ¡Game Over!");
      }
      break;
    case "asesino":
      monstruo = prompt("Te encuentras con un monstruo: Troll. ¿Qué haces? \n1. Realizar ataque sigiloso \n2. Escapar");
      if (monstruo === "1") {
        alert("Has vencido al Troll. ¡Avanzas a la siguiente etapa!");
      } else {
        alert("El Troll te ha vencido. ¡Game Over!");
      }
      monstruo = prompt("Te encuentras con un enemigo: Militar. ¿Qué haces? \n1. Acercarte en silencio y atacarlo por la espalda \n2. Lanzar cuchillo \n3. Huir");
      if (monstruo === "1") {
        alert("Has vencido al Militar. ¡Felicidades has ganado!");
      } else {
        alert("El Militar te ha Sometido. ¡Game Over!");
      }
      break;
    case "tanque":
      monstruo = prompt("Te encuentras con un monstruo: Dragón. ¿Qué haces? \n1. Defender con tu escudo \n2. Correr");
      if (monstruo === "1") {
        alert("Has vencido al Dragón. ¡Avanzas a la siguiente etapa!");
      } else {
        alert("El Dragón te ha vencido. ¡Game Over!");
      }      
      monstruo = prompt("Te encuentras con un monstruo: Gólem. ¿Qué haces? \n1. Montar y atacar \n2. Evadir \n3. Huir");
      if (monstruo === "1") {
        alert("Has vencido al Gólem. ¡Felicidades has ganado!");
      } else {
        alert("El Gólem te ha Aplastado. ¡Game Over!");
      }
      break;
    case "invocador":
      monstruo = prompt("Te encuentras con un monstruo: Demonio. ¿Qué haces? \n1. Invocar aliados \n2. Huir");
      if (monstruo === "1") {
        alert("Has vencido al Demonio. ¡Avanzas a la siguiente etapa!");
      } else {
        alert("El Demonio te ha vencido. ¡Game Over!");
      }
      monstruo = prompt("Te encuentras con un monstruo: Fantasma. ¿Qué haces? \n1. Invocar espíritus \n2. Exorcizar \n3. Escapar");
      if (monstruo === "2") {
        alert("Has vencido al Fantasma. ¡Felicidades has ganado!");
      } else {
        alert("El Fantasma te ha Poseido. ¡Game Over!");
      }
      break;
    default:
      alert("Clase de personaje no válida. No hay monstruos para enfrentar.");
      break;
  }
}

do {
  const deseaCrearMasUsuarios = prompt("¿Desea crear un nuevo usuario? (Sí/No)").toLowerCase();
  if (deseaCrearMasUsuarios === "sí" || deseaCrearMasUsuarios === "si") {
    registrarUsuario();
  } else {
    alert("Registro de usuarios finalizado.");
    break;
  }
} while (true);