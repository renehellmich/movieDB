import { movies } from './DB.js';
import { selectOptions } from './options.js';
import { globalVariables, radioOptions } from './variables.js';


// Option für Genre generieren

const getSelectOptions = () => {
    const genreArr = Array.from(new Set(movies.map((e) => e[4]).join().split(","))).sort();
    const yearArr = Array.from(new Set(movies.map((e) => e[1]).join().split(","))).sort();

    console.log(yearArr);
    
    genreArr.forEach(genre => {
        // console.log(genre);
        genreSelection.innerHTML += `<option value='${genre.value}'>${genre[0].toUpperCase()}${genre.slice(1)}</option>`
    });

    yearArr.forEach(year => {
        yearSelection.innerHTML += `<option value='${year.value}'>${year[0].toUpperCase()}${year.slice(1)}</option>`
    });
}

// Optionen checken

const checkRadioOptions = () => {

    const radio = Array.from(globalVariables.RadioArr)

    let rValue = null;

    radio.forEach(e => {
        e.checked 
        ? rValue = e.value
        : null;
    });

    selectOptions(rValue);

    console.log(rValue);
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

// Arrow Funktion zum Aufbau der Containerdarstellun

const sendArrtoDiv = (Arr) => {

    globalVariables.movieSection.innerHTML = null;

    Arr.forEach(movie => {
        globalVariables.movieSection.innerHTML += getDivMovie(movie);
    });
}
// Definition der Funktion loadMovies

const loadMovies = () => {

    sendArrtoDiv(movies)
}


// Definition der Funktion searchMovie

const searchMovie = () => {

    globalVariables.searchString = document.getElementById("searchString")

    const filterArr = movies.filter((movie => movie[0].includes(globalVariables.searchString.value)))

    sendArrtoDiv(filterArr)

}

// Definition der Funktion yearUp

const yearUp = () => {

    const filterArr = movies.sort((a, b) => a[1] - b[1]);

    sendArrtoDiv(filterArr)
}

// Definition der Funktion yearDown

const yearDown = () => {
    const filterArr = movies.sort((a, b) => - a[1] + b[1]);

    sendArrtoDiv(filterArr)

}

// Definition der Funktion bestRate

const bestRate = () => {
    const filterArr = movies.sort((a, b) => - parseFloat(a[5]) + parseFloat(b[5]));

    sendArrtoDiv(filterArr)

}


// Next Steps:
/*
    - Input Radio Buttons, wonach gefiltert werden soll
    - Input neuer Film
    - eigenständiges Design
*/


// Funktionsaufrufe

checkRadioOptions();
loadMovies();
getSelectOptions();

globalVariables.buttonSearch.addEventListener("click", () => searchMovie());
globalVariables.buttonYearUp.addEventListener("click", () => yearUp());
globalVariables.buttonYearDown.addEventListener("click", () => yearDown());
globalVariables.buttonBestRate.addEventListener("click", () => bestRate());

// radioOptions ist ein Objekt, deshalb muss es mit Object angesprochen werden. Mit .values erzeugen wir ein Array aus den Werten von radioOptions
Object.values(radioOptions).forEach(option => {
    option.addEventListener("click", () => checkRadioOptions())
});


// globalVariables.searchString.addEventListener("keydown", searchMovie(globalVariables));