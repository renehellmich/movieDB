export let globalVariables = {
    searchString: document.getElementById("searchString"),
    buttonSearch: document.getElementById("button_search"),
    buttonYearUp: document.getElementById("button_yearUp"),
    buttonYearDown: document.getElementById("button_yearDown"),
    buttonBestRate: document.getElementById("button_bestRate"),

    movieSection: document.querySelector(".section__movies"),
    genreSelection: document.querySelector("#genreSelection"),
    yearSelection: document.querySelector("#yearSelection"),
    RadioArr: document.getElementsByName("filter"),
}

export let radioOptions = {
    filterText: document.getElementById("filterText"),
    filterGenre: document.getElementById("filterGenre"),
    filterYear: document.getElementById("filterYear"),
}