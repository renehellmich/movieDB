import {movies} from './DB.js';

const loadVariables = () => {

    const searchString = document.getElementById("searchstring");
    const buttonSearch = document.getElementById("button_search");
    const buttonYearUp = document.getElementById("button_yearUp");
    const buttonYearDown = document.getElementById("button_yearDown");
    const buttonBestRate = document.getElementById("button_bestRate");

    const movieSection = document.getElementsByClassName("section__movies");
    const movieContainer = document.getElementsByClassName("div__movieContainer");
    const movieHead = document.getElementsByClassName("movieHead");
    const movieYear = document.getElementsByClassName("movieYear");
    const movieAuthor = document.getElementsByClassName("movieAuthor");
    const movieLength = document.getElementsByClassName("movieLength");
    const movieGenre = document.getElementsByClassName("movieGenre");
    const movieRate = document.getElementsByClassName("movieRate");

}

const getDivMovie = (object, v) => {

}

const loadMovies = (v) => {

    console.log(v.buttonSearch);

    movies.forEach((movie) => {
        v.movieSection.innerHTML += getDivMovie(movie, v)
    });

}

loadMovies(loadVariables)