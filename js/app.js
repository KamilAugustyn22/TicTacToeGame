let gameboard = document.querySelectorAll(".place");
let resetButton = document.querySelector(".btn");
let index = 0;

for(let place of gameboard){
    place.addEventListener("click", function (event) {

        if(index % 2 === 0){
            place.innerText = "X";
            console.log("X " + place.id);
            index++;
        }
        else{
            place.innerText = "O"
            console.log("O " + place.id);
            index++;
        }

    })
    resetButton.addEventListener("click", function (event){
        place.innerText = "";
        index = 0;
    })
}

