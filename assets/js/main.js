import {movies} from './DB.js';

let globalVariables = {
    searchString : document.getElementById("searchString"),
    buttonSearch : document.getElementById("button_search"),
    buttonYearUp : document.getElementById("button_yearUp"),
    buttonYearDown : document.getElementById("button_yearDown"),
    buttonBestRate : document.getElementById("button_bestRate"),

    movieSection: document.querySelector(".section__movies"),
}

console.log(globalVariables);

const getDivMovie = (object) => {

    const [head, year, author, length, genre, rate] = object

    const genreString = genre.join("<br>")

    const movie = 
    `
    <div class="div__movieContainer">
    <h2 class="movieHead ContainerDefChild">${head}</h2>
    <p class="movieYear ContainerDefChild">${year}</p>
    <h3 class="movieAuthor ContainerDefChild">${author}</h3>
    <p class="movieLength ContainerDefChild">${length}</p>
    <p class="movieGenre ContainerDefChild">${genreString}</p>
    <p class="movieRate ContainerDefChild">${rate}</p>
    </div>
    `

    // console.log(movie);
    return movie
}

// Definition der Funktion loadMovies

const loadMovies = (v) => {

    // console.log(v.movieSection);

    movies.forEach((movie) => {
        // console.log(movie);
        v.movieSection.innerHTML += getDivMovie(movie)
    });

}

// Definition der Funktion searchMovie

const searchMovie = () => {

    globalVariables.searchString = document.getElementById("searchString")

    const filterArr = movies.filter((movie => movie[0].includes(globalVariables.searchString.value)))

    globalVariables.movieSection.innerHTML = null;

    filterArr.forEach(movie => {
        globalVariables.movieSection.innerHTML += getDivMovie(movie);
    });
}
const yearUp = () => {

    const filterArr = movies.sort((a,b) => a[1] - b[1]);

    globalVariables.movieSection.innerHTML = null;

    filterArr.forEach(movie => {
        globalVariables.movieSection.innerHTML += getDivMovie(movie);
    });

}

const yearDown = () => {
    const filterArr = movies.sort((a,b) => - a[1] + b[1]);

    globalVariables.movieSection.innerHTML = null;

    filterArr.forEach(movie => {
        globalVariables.movieSection.innerHTML += getDivMovie(movie);
    });
}

const bestRate = () => {
    const filterArr = movies.sort((a,b) => - parseFloat(a[5]) + parseFloat(b[5]));

    globalVariables.movieSection.innerHTML = null;

    filterArr.forEach(movie => {
        globalVariables.movieSection.innerHTML += getDivMovie(movie);
    });
}





// Funktionsaufrufe

loadMovies(globalVariables);

globalVariables.buttonSearch.addEventListener("click", () => searchMovie());
globalVariables.buttonYearUp.addEventListener("click", () => yearUp());
globalVariables.buttonYearDown.addEventListener("click", () => yearDown());
globalVariables.buttonBestRate.addEventListener("click", () => bestRate());
// globalVariables.searchString.addEventListener("keydown", searchMovie(globalVariables));