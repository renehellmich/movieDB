import {movies} from './DB.js';

let globalVariables = {
    searchString : document.getElementById("searchstring"),
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

const searchMovie = (v) => {

    v.searchString == null
    ? v.searchString = document.getElementById("searchstring")
    : null;

    // console.log(v.searchString.value);

    const filterArr = movies.filter((movie => movie[0] == v.searchString.value))

    console.log(filterArr);
}




// Funktionsaufrufe

loadMovies(globalVariables);

globalVariables.buttonSearch.addEventListener("click", searchMovie(globalVariables))
// globalVariables.searchString.addEventListener("keydown", searchMovie(globalVariables));