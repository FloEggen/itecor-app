import { render } from "ejs"

export default class Users {
    constructor() {
        this.spinner = document.querySelector(".loader-section")
        this.spinnerText = document.querySelector(".spinner-text")
        this.logout = document.querySelector(".img-logout")
        this.logoutBox = document.querySelector(".logout-box")
        this.handleEvents()
        // console.log(this.spinner)
    }

    handleEvents() {
        this.handleSpinner()
        this.logout.addEventListener("click", () => {
            console.log("Logout was clicked")
            if (this.logoutBox.style.display == "none") {
                console.log("Hello")
                this.logoutBox.style.display = "block"
            } else {
                this.logoutBox.style.display = "none"
            }
        })
    }

    handleSpinner() {
        if (this.spinner != null) {
            this.spinner.classList.add("disappear")
            setTimeout(this.removeSpinner, 5000, this.spinner)
        }
    }

    removeSpinner(element) {
        element.classList.add("hidden")
    }

}