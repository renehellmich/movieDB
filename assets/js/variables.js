export let globalVariables = {
    searchString: document.getElementById("searchString"),
    buttonSearch: document.getElementById("button_search"),
    buttonYearUp: document.getElementById("button_yearUp"),
    buttonYearDown: document.getElementById("button_yearDown"),
    buttonBestRate: document.getElementById("button_bestRate"),

    movieSection: document.querySelector(".section__movies"),
    genreSelection: document.querySelector("#genreSelection"),
    newGenreSelection: document.querySelector("#selectNewGenre"),
    yearSelection: document.querySelector("#yearSelection"),
    RadioArr: document.getElementsByName("filter"),

    modalAddFilm: document.querySelector(".div__addFilm"),
    buttonNewFilm: document.getElementById("button_newFilm"),
    buttonDropMovie: document.getElementById("buttonAddFilm"),

    divFilter: document.querySelector(".div__getFilter"),
    divAddFilm: document.querySelector(".div__addFilm"),
    divRadio: document.querySelector(".div__Radio"),
    sectionMovies: document.querySelector(".section__movies")
}

export let radioOptions = {
    filterText: document.getElementById("filterText"),
    filterGenre: document.getElementById("filterGenre"),
    filterYear: document.getElementById("filterYear"),
}

export let modalVariables = {
    title: document.getElementById("newTitle"),
    year: document.getElementById("newYear"),
    author: document.getElementById("newAuthor"),
    hours: document.getElementById("newHours"),
    minutes: document.getElementById("newMinutes"),
    genre: document.querySelectorAll(".newGenre"),
    rating: document.getElementById("newRating")
}