let gameboard = document.querySelectorAll(".place");
let index = 0;

for(let place of gameboard){
    place.addEventListener("click", function (event) {
        console.log("X" + place.id);
        if(index % 2 == 0){
            place.innerText = "X";
            index++;
        }
        else{
            place.innerText = "O"
            index++;
        }
    })
}