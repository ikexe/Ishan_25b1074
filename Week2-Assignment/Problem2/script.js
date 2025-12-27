fetch('movies.json')
.then(function(response) {
    return response.json();
})
.then(function(movies) {
   let placeholder = document.querySelector('#data-output');
   let out = ''; 
   for (let movie of movies) {
    out += `
        <tr>
            <td><img src="${movie.poster}" alt="${movie.name}" width="200">${movie.name}</td>
            <td>${movie.genre}</td>
            <td>${movie.duration}</td>
            <td>${movie.release_year}</td>
            <td>${movie.rating}</td>
            <td>

            <iframe 

                src="${movie.trailer}" 

                allowfullscreen 

                title="Trailer" 

                width="420" 

                height="237" 

                frameborder="0">

            </iframe>

        </td>
        </tr>
    `;}
    placeholder.innerHTML = out;
   })