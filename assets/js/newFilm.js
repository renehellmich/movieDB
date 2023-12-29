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

    const genreArr = Array.from(globalVariables.newGenreSelection.childNodes).filter(e => e.selected).map(e => e.value)

    /*
    console.log(genreArr);
    console.log(modalVariables);
    console.log(modalVariables.genre);
    */

    const newItem = {
        titel: modalVariables.title.value,
        year: modalVariables.year.value,
        author: modalVariables.author.value,
        length: `${modalVariables.hours.value}h ${modalVariables.minutes.value}min`,
        genre: genreArr,
        rating: modalVariables.rating.value
    }

    console.log(newItem);

    let http = new XMLHttpRequest();

    http.open('GET', 'assets/js/DB.js', true)

    http.send();

    http.onload = function() {
        if (http.status != 200) {
            alert(`Error ${http.status}`)
        } else {
            let existingData = http.responseText
            console.log(existingData);
            
            let newData = transformItem(newItem)
            console.log("neue Daten :" + newData);
            
            let newText = '\n[\n]//Hier kommt Code hin'
            let updatedContent = existingData + newText
            console.log(newText);
            
            let writeHttp = new XMLHttpRequest();
            
            writeHttp.open('PUT', '/assets/js/DB.js')
            writeHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            
            writeHttp.send(updatedContent)
        }
    }
    xhr.onerror= function() {
        alert("Verbindung fehlgeschlagen")
    }

    globalVariables.modalAddFilm.style.display = "none"
    /*
    globalVariables.divFilter.style.display = "initial"
    globalVariables.divFilter.classList.add("div__getFilter")
    */
}

const transformItem = (Item) => {
    return Array.from(Object.values(Item))
}



const loadMovieData = () => {
    Object.values(modalVariables).forEach(element => {
        element
    })

    console.log(modalVariables);

}
