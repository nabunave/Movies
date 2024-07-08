if (window.location.pathname === '/pages/movies.html') {

// let div = document.createElement('div') 
// div.setAttribute('id', 'contenedor') 
// document.querySelector('main').appendChild(div)
let contenedor = document.getElementById('contenedor') 
// div.classList.add('flex', 'flex-wrap', 'justify-center')

const card = (movie) => {
    return `
    <div class="card bg-gray-500 text-white p-4 m-4 w-[300px] text-center rounded-xl">
    <h3>${movie.title}</h3>
    <img src="${movie.image}" alt="${movie.title}">
    <p>Tagline: ${movie.tagline}</p>
    <p>${movie.overview}</p>
    </div>
    `
}

const objMovies = (movies) => {
    let htmlCards = ''
    movies.forEach(allMovies => {
        htmlCards += card(allMovies)
    });
    contenedor.innerHTML = htmlCards
}

objMovies(movies)
}







document.addEventListener('DOMContentLoaded', () => {
    const consentBar = document.getElementById('cky-consent-bar');
    const acceptButton = document.getElementById('accept-cookies');

    // Comprobar si el consentimiento ya ha sido dado
    if (!localStorage.getItem('cookiesAccepted')) {
        consentBar.style.display = 'flex';
    }

    acceptButton.addEventListener('click', () => {
        // Guardar la preferencia del usuario en localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        consentBar.style.display = 'none';
    });
});