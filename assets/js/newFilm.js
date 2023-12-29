import { globalVariables, modalVariables } from "./variables.js";

export function openAddMovie() {
    globalVariables.modalAddFilm.style.display = "block";

    /*
    globalVariables.divFilter.style.display = "none";
    globalVariables.divRadio.style.display = "none";
    */


}

export function getMovieInDatabase() {

    loadMovieData();

    console.log(modalVariables);
    console.log(modalVariables.genre);
    const newItem = {
        titel: modalVariables.title.value,
        year: modalVariables.year.value,
        author: modalVariables.author.value,
        length: `${modalVariables.hours.value}h ${modalVariables.minutes.value}`,
        genre: modalVariables.genre.map(e => e.selected),
        rating: modalVariables.rating.value
    }

    console.log(newItem);

    let xhr = new XMLHttpRequest();

    xhr.open('GET', './DB.js', )

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status <= 300) {

        }
    }

    globalVariables.modalAddFilm.style.display = "none"
    /*
    globalVariables.divFilter.style.display = "initial"
    globalVariables.divFilter.classList.add("div__getFilter")
    */
}



const loadMovieData = () => {
    Object.values(modalVariables).forEach(element => {
        element
    })

    console.log(modalVariables);

}
