import {movies} from './DB.js';

const loadVariables = () => {
    const searchString = document.getElementById("searchstring");
    const buttonSearch = document.getElementById("button_search");
    const buttonYearUp = document.getElementById("button_yearUp");
    const buttonYearDown = document.getElementById("button_yearDown");
    const buttonBestRate = document.getElementById("button_bestRate");

    const movieSection = document.getElementsByClassName("section__movies");


    /*
    const movieContainer = document.getElementsByClassName("div__movieContainer");
    const movieHead = document.getElementsByClassName("movieHead");
    const movieYear = document.getElementsByClassName("movieYear");
    const movieAuthor = document.getElementsByClassName("movieAuthor");
    const movieLength = document.getElementsByClassName("movieLength");
    const movieGenre = document.getElementsByClassName("movieGenre");
    const movieRate = document.getElementsByClassName("movieRate");
    */

    return object

}

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

    console.log(movie);
    return movie
}

const loadMovies = (v) => {

    console.log(this.movieSection.innerHTML);

    movies.forEach((movie) => {
        console.log(movie);
        v.movieSection.innerHTML += getDivMovie(movie)
    });

}

loadVariables();
loadMovies(loadVariables)