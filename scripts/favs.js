const displayFavs = () => JSON.parse(localStorage.getItem('favorite')) || [];

const deleteFavs = (favToEliminate) => {
    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    favorite = favorite.filter((movie) => movie.id !== favToEliminate.id);
    localStorage.setItem('favorite', JSON.stringify(favorite));
};

const addToFavs = (newFav) => {
    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    favorite.push(newFav);
    localStorage.setItem('favorite', JSON.stringify(favorite));
};

const renderFavs = () => {
    const favoriteMovies = displayFavs();
    const favsContainer = document.querySelector('.favs-container'); // Obtener el contenedor donde se mostrarán las tarjetas de favoritos
    favsContainer.innerHTML = ''; // Limpiar el contenedor antes de repintar
    if (favoriteMovies.length === 0) {
        favsContainer.innerHTML = '<p class="text-center">No favorite movies added</p>';
    } else {
        favoriteMovies.forEach(movie => {
            const card = `
        <div class="card bg-gray-500 text-white p-4 m-4 w-[300px] text-center rounded-xl sm:bg-gray-700">
        <h3 class="text-lg font-bold flex justify-around">${movie.title}<button class="favorite-button" data-id="${movie.id}"><i class="fa-solid fa-heart text-3xl" style="color: #ff0000;"></i></button></h3>
        <a href="./selectedMovie.html?id=${movie.id}"><img src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}" class="mt-7 hover:scale-125 transition duration-700 ease-linear hover:rounded-xl"></a>
        <p class="italic">${movie.tagline}</p><br>
        <p class="text-justify">${movie.overview}</p><br>
        `;
            favsContainer.innerHTML += card;
        });

        // Agregar eventos para eliminar películas de favoritos
        const deleteButtons = document.querySelectorAll('.favorite-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function () {
                const movieId = button.getAttribute('data-id');
                const movieToDelete = favoriteMovies.find(movie => movie.id === movieId);
                deleteFavs(movieToDelete);
                renderFavs(); // Volver a renderizar las tarjetas después de eliminar
            });
        });
    }
};



// Llamar a renderFavs cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    renderFavs();
});


// const renderFavs = () => {
//     const favoriteMovies = displayFavs();
//     const favsContainer = document.getElementById('favs-container'); // Obtener el contenedor donde se mostrarán las tarjetas de favoritos
//     favsContainer.innerHTML = ''; // Limpiar el contenedor antes de repintar

//     favoriteMovies.forEach(movie => {
//         const card = `
//             <div class="card">
//                 <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${movie.title}</h5>
//                     <p class="card-text">${movie.plot}</p>
//                     <button class="btn btn-danger delete-btn" data-id="${movie.id}">Eliminar</button>
//                 </div>
//             </div>
//         `;
//         favsContainer.innerHTML += card;
//     });

//     // Agregar eventos para eliminar películas de favoritos
//     const deleteButtons = document.querySelectorAll('.delete-btn');
//     deleteButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const movieId = button.getAttribute('data-id');
//             const movieToDelete = favoriteMovies.find(movie => movie.id === movieId);
//             deleteFavs(movieToDelete);
//             renderFavs(); // Volver a renderizar las tarjetas después de eliminar
//         });
//     });
// };

// // Llamar a renderFavs cuando se cargue la página
// document.addEventListener('DOMContentLoaded', () => {
//     renderFavs();
// });



