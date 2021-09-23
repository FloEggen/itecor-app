import { render } from "ejs"

export default class Offices {
    constructor() {
        this.seats = document.querySelectorAll(".seat")
        this.consultantSeats = document.querySelectorAll(".consultant-seat")
        this.freeSeatsSummary = document.querySelector(".free-seats-summary")
        this.unbookableSeats = document.querySelectorAll(".unbookable-seat")
        this.elementsWithHide = document.querySelectorAll(".hide")

        this.watchConsultantSeatBooking()
    }

    watchConsultantSeatBooking() {
        this.adaptFreeSeatsMessage()

        this.consultantSeats.forEach(seat => {
            seat.addEventListener("click", () => {
                if (seat.classList.contains("free")) {
                    seat.style.backgroundColor = "red"
                    seat.classList.add("occupied")
                    seat.classList.remove("free")
                } else if (seat.classList.contains("occupied")) {
                    seat.style.backgroundColor = "green"
                    seat.classList.add("free")
                    seat.classList.remove("occupied")
                }
                this.adaptFreeSeatsMessage()
            })
        })

        this.unbookableSeats.forEach(seat => {
            seat.addEventListener("click", () => {
                seat.nextElementSibling.style.display = "block"
            })
        })

        this.controlHiddenElements()
    }

    controlHiddenElements() {
        this.elementsWithHide.forEach(element => {
            element.addEventListener("click", () => {
                if (element.style.display == "block") {
                    console.log("Hey there")
                    element.style.display = "none"
                }
            })
        })
    }

    countNumberOfFreeSeats() {
        let freeSeats = document.querySelectorAll(".free")
        return freeSeats
    }

    adaptFreeSeatsMessage() {
        let freeSeats = this.countNumberOfFreeSeats()
        this.freeSeatsSummary.innerHTML = `${freeSeats.length}`
    }

}