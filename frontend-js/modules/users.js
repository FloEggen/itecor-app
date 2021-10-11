import { render } from "ejs"

export default class Users {
    constructor() {
        this.spinner = document.querySelector(".loader-section")
        this.spinnerText = document.querySelector(".spinner-text")
        this.handleSpinner()
        console.log(this.spinner)
    }

    handleSpinner() {
        this.spinner.classList.add("disappear")
        setTimeout(this.removeSpinner, 5000, this.spinner)
    }

    removeSpinner(element) {
        element.classList.add("hidden")
    }

}