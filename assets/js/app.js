// URL de la API 
const baseEndpoint = 'https://api.github.com';

//consultar información de usuarios
const usersEndpoint = `${baseEndpoint}/users`;

// Seleccion de elementos HTML utilizando querySelector (se corrigió escritura de comillas invertidas y sintaxis de clases)
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Función para mostrar la información del usuario (adición de la palabra reservada async para indicar que la función es asíncrona)
async function displayUser(username) {
  //Uso del bloque try catch para manejar posibles errores
  try {
    // Cambio de texto de los elementos mientras se carga la información
    $n.textContent = 'Cargando...';

    // Solicitud fetch a la API para obtener la información del usuario
    const response = await fetch(`${usersEndpoint}/${username}`);

    //Se eliminó console log de variable "data" para implementar conversioon json
    //se corrigió la escritura de comillas para template strings

    // Conversion de datos de la respuesta en JSON
    const data = await response.json();

    // Actualización de los elementos HTML con la información del usuario
    $n.textContent = `Nombre: ${data.name}`;
    $b.textContent = `Blog: ${data.blog}`;
    $l.textContent = `Ubicación: ${data.location}`;

  } catch (err) {
    // En caso de presentarse un error se ejecuta la funcion respectiva con su mensaje
    handleError(err);
  }
}

// Función para manejar errores
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}


// Llamada a la función para mostrar la información del usuario 'stolinski'
displayUser('stolinski').catch(handleError);
