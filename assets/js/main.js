import {movies} from './DB.js';

const globalVariables = {
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

    const movie = 
    `
    <div class="div__movieContainer">
    <h2 class="movieHead">${head}</h2>
    <p class="movieYear">${year}</p>
    <h3 class="movieAuthor">${author}</h3>
    <p class="movieLength">${length}</p>
    <p class="movieGenre">${genre}</p>
    <p class="movieRate">${rate}</p>
    </div>
    `

    // console.log(movie);
    return movie
}

const loadMovies = (v) => {

    // console.log(v.movieSection);

    movies.forEach((movie) => {
        console.log(movie);
        v.movieSection.innerHTML += getDivMovie(movie)
    });

    console.log(v.movieSection.innerHTML);
}

loadMovies(globalVariables);