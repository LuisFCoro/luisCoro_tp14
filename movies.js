// Estructura inicial
let peliculas = [
    'Turno de día', 
    '30 noches con mi ex', 
    'Bestia', 
    'El monte', 
    'Top gun maverick', 
    'Elvis', 
    'Thor: amor y trueno'
];

// Función para destacar película
function destacarPelicula(pelicula, peliculasArray) {
    const peliculaEnMayusculas = pelicula.toUpperCase();
    const restoPeliculas = peliculasArray.filter( p => p !==  pelicula);
    return [peliculaEnMayusculas, ...restoPeliculas];
}

// Destacamos la película más vendida
peliculas = destacarPelicula('Thor: amor y trueno', peliculas);
console.log("Películas destacando la más vendida:", peliculas);

// Estructura para próximas películas
const proximasPeliculas = 'Counter-Strike, NOP, Vértigo, Nick, Avatar';
console.log("Próximas películas:", proximasPeliculas);
const proximasPeliculasArray = proximasPeliculas.split(', ');

// Función para combinar estructuras
function combinarPeliculas(peliculas1, peliculas2) {
    return peliculas1.concat(peliculas2);
}

// Combinamos todas las películas
const todasLasPeliculas = combinarPeliculas(peliculas, proximasPeliculasArray);
console.log("Todas las películas combinadas:", todasLasPeliculas);
