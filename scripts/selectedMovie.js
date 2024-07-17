//document.addEventListener('DOMContentLoaded', () => {//al cargar la pagina se cargan las tarjetas de la pagina y se cargan los datos de la tarjeta

const params = new URLSearchParams(window.location.search);//obtiene los datos de la url
console.log(params);
const movieId = params.get('id');
console.log(movieId);


//     window.location es un objeto que contiene información sobre la URL actual del documento.
// window.location.search devuelve una cadena que contiene la parte de la URL que comienza con el signo de interrogación (?), seguida de los parámetros de consulta. Por ejemplo, si la URL es https://example.com/page.html?id=123&name=John, entonces window.location.search devolverá ?id=123&name=John.



const movie = movies.find(movie => movie.id === movieId);//busca la pelicula que coincida con el id de la url y la retorna en movie para usarla en el html

const data = () => {
    document.querySelector('.containerImg').innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="w-full h-full object-cover p-5"/>
        `

    document.querySelector('.containerInfo').innerHTML = `
        <h3 class="text-xl font-bold">${movie.title}</h3>
        <p class="italic">${movie.tagline}</p>
        <p>${movie.genres}</p>
        <p>${movie.overview}</p>
        `

    document.querySelector('.table4').innerHTML = `
        <table class="table-auto w-full p-5">
            <tbody>
                <tr>
                    <th class="border px-4 py-2">Original Language</th>
                    <td class="border px-4 py-2">${movie.original_language}</td>
                </tr>
                <tr>
                    <th class="border px-4 py-2">Release Date</th>
                    <td class="border px-4 py-2">${movie.release_date}</td>
                </tr>
                <tr>
                <th class="border px-4 py-2">Runtime</th>
                    <td class="border px-4 py-2">${movie.runtime}</td>
                </tr>
                <tr>
                    <th class="border px-4 py-2">Status</th>
                    <td class="border px-4 py-2">${movie.status}</td>
                </tr>
            </tbody>
        </table>
    `

    document.querySelector('.table3').innerHTML = `
        <table class="table-auto w-full">
            <tbody>
                <tr>
                    <th class="border px-4 py-2">Vote Average</th></th>
                    <td class="border px-4 py-2">${movie.vote_average}</td>
                </tr>
                <tr>
                    <th class="border px-4 py-2">Budget</th>
                    <td class="border px-4 py-2">${movie.budget}</td>
                </tr>
                <tr>
                    <th class="border px-4 py-2">Revenue</th>
                    <td class="border px-4 py-2">${movie.revenue}</td>
                </tr>
            </tbody>
        </table>
    `

    return movieDetails;
};

data(movie);
