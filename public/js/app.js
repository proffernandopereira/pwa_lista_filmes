
document.addEventListener('DOMContentLoaded', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker Registered'))
            .catch(error => console.error('Service Worker Registration Failed:', error));
    }

    const apiKey = '1affad1947a65790d2055ccd07d9bc30'; // Substitua pelo seu API key do TMDb
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            const movieList = document.getElementById('movie-list');
            data.results.forEach(movie => {
                const colDiv = document.createElement('div');
                colDiv.className = 'col-md-4';

                const cardDiv = document.createElement('div');
                cardDiv.className = 'card movie-item';

                const img = document.createElement('img');
                img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                img.alt = movie.title;
                img.className = 'card-img-top';

                cardDiv.appendChild(img);
                colDiv.appendChild(cardDiv);
                movieList.appendChild(colDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
