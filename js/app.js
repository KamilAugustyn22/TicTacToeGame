let gameboard = document.querySelectorAll(".place");

for(let place of gameboard){
    place.addEventListener("click", function (event) {
        console.log("X" + place.id);
    })
}