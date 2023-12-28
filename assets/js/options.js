import { radioOptions, globalVariables } from "./variables.js";

export function selectOptions (value) {

    switch(value) {
        case "filterText":
            globalVariables.searchString.style.display = "block"
            globalVariables.genreSelection.style.display = "none";
            globalVariables.yearSelection.style.display = "none";
            break;
        case "filterGenre":
            globalVariables.searchString.style.display = "none"
            globalVariables.genreSelection.style.display = "block";
            globalVariables.yearSelection.style.display = "none";

            break;
        case "filterYear":
            globalVariables.searchString.style.display = "none"
            globalVariables.genreSelection.style.display = "none";
            globalVariables.yearSelection.style.display = "block";
            break;
    }

}