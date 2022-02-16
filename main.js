let timesPressed = 0;

function shapeOneClicked() {
    //console.log("Button 1 was clicked"); 

    // Generate random number
    let rand_num = Math.random(); 

    // Set innerHTML of div
    document.getElementById("random_num").innerHTML = rand_num; 
}

//Students to add button2Clicked code 
function shapeTwoClicked() {
    //console.log("Button 2 was clicked"); 

    // Get svg class
    let curr_color = document.getElementById("c").getAttribute("class"); 

    // Change color 
    if (curr_color == "blue") {
        document.getElementById("c").setAttribute("class", "green"); 
    } else {
        document.getElementById("c").setAttribute("class", "blue"); 
    }

}

function shapeTwoClicked() {
    //console.log("Button 2 was clicked"); 

    // Get svg class
    let curr_color = document.getElementById("c").getAttribute("class"); 

    // Change color 
    if (curr_color == "blue") {
        document.getElementById("c").setAttribute("class", "green"); 
    } else {
        document.getElementById("c").setAttribute("class", "blue"); 
    }
}