//home variables
let homePoints1 = document.getElementById("home-points-1")
let homePoints2 = document.getElementById("home-points-2")
let homePoints3 = document.getElementById("home-points-3")
let homePoints = document.getElementById("home-el")
let totalHomePoints = 0

//guest variables
let guestPoints1 = document.getElementById("guest-points-1")
let guestPoints2 = document.getElementById("guest-points-2")
let guestPoints3 = document.getElementById("guest-points-3")
let guestPoints = document.getElementById("guest-el")
let totalGuestPoints = 0

//home points
function add1Home() {
    totalHomePoints += 1
    homePoints.textContent = totalHomePoints
}
function add2Home() {
    totalHomePoints += 2
    homePoints.textContent = totalHomePoints
}
function add3Home() {
    totalHomePoints += 3
    homePoints.textContent = totalHomePoints
}

//guest points
function add1Guest() {
    totalGuestPoints += 1
    guestPoints.textContent = totalGuestPoints
}
function add2Guest() {
    totalGuestPoints += 2
    guestPoints.textContent = totalGuestPoints
}
function add3Guest() {
    totalGuestPoints += 3
    guestPoints.textContent = totalGuestPoints
}