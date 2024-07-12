if (window.location.pathname === '/pages/movies.html') {

    let contenedor = document.getElementById('contenedor')
    let selectGenre = document.getElementById('genreSelect')
    let searchInput = document.getElementById('searchInput');
    console.log(selectGenre)

    const card = (movie) => {
        return `
        <div class="card bg-gray-500 text-white p-4 m-4 w-[300px] text-center rounded-xl sm:bg-gray-700">
        <h3 class="text-lg font-bold">${movie.title}</h3>
        <img src="${movie.image}" alt="${movie.title}" class="mt-7 hover:scale-125 transition duration-700 ease-linear hover:rounded-xl">
        <p class="italic">${movie.tagline}</p><br>
        <p>${movie.overview}</p>
        </div>
        `
    }

    const objMovies = (cb_movies) => {
        let htmlCards = ''
        cb_movies.forEach(movie => htmlCards += card(movie))
        contenedor.innerHTML = htmlCards
        //cb_movies.forEach(movie => contenedor.innerHTML += card(movie)) esta forma seria mala porque cargaria cada tarjeta por separado 
    }

    const genres = (movies) => {
        const uniqueGenres = []; // Array para almacenar géneros
        movies.forEach(movie => {//recorrer movies por cada movie que tenga el array
            movie.genres.forEach(genre => {//recorrer el genero de cada movie 
                if (!uniqueGenres.includes(genre)) { // verificar si el género ya está en el array
                    uniqueGenres.push(genre); // Si no está, agregarlo
                }
            });
        });//ver otra opcion con set

        let htmlGenres = `<option value="All">All Genres</option>`;
        uniqueGenres.forEach(genre => {
            htmlGenres += `<option value="${genre}">${genre}</option>`;
        });

        uniqueGenres.sort(); // Ordenar alfabéticamente
        selectGenre.innerHTML = htmlGenres;

        const filterMovies = () => {
            const searchText = searchInput.value.toLowerCase();
            const selectedGenre = selectGenre.value;
            let filteredMovies = movies;

            if (selectedGenre !== 'All') {//si el select no es all se filtra por el genero que se selecciono en el select
                filteredMovies = filteredMovies.filter(movie => movie.genres.includes(selectedGenre));
            }

            if (searchText) {
                filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchText));
            }

            objMovies(filteredMovies);
        };

        // Añado un event listener para capturar el valor seleccionado
        selectGenre.addEventListener('change', () => {//change es cuando se cambia el valor en el select
            searchInput.value = '';//limpiar el input de busqueda cuando se cambia de genero
            filterMovies();//

            // objMovies(movies.filter(movie => movie.genres.includes(selectedGenre)));
        });


        searchInput.addEventListener('input', filterMovies)//los argumentos son la funcion que se va a ejecutar cuando se escriba en el input de busqueda

        objMovies(movies)
    };

    genres(movies)
    objMovies(movies)//cargar todas las tarjetas al cargar la pagina
}








// document.addEventListener('DOMContentLoaded', () => {
//     const consentBar = document.getElementById('cky-consent-bar');
//     const acceptButton = document.getElementById('accept-cookies');

//     // Comprobar si el consentimiento ya ha sido dado
//     if (!localStorage.getItem('cookiesAccepted')) {
//         consentBar.style.display = 'flex'; 
//     }

//     acceptButton.addEventListener('click', () => {
//         // Guardar la preferencia del usuario en localStorage
//         localStorage.setItem('cookiesAccepted', 'true');
//         consentBar.style.display = 'none';
//     });
// });