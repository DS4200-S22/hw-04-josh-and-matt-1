let timesPressed = 2000;

// circle1: Add text in the center of the circle that shows how many times
//  this svg has been clicked on. Each time the svg is clicked on, the count should update.
function shapeOneClicked() {
    console.log(timesPressed);
    timesPressed ++;
    document.getElementById("t").innerHTML = timesPressed; 
}

// circle2: When this svg is mousedover a bold black border should show. On mouseout,
//  the bold black border should disappear.
function shapeTwoClicked() {
    console.log('Shape Two Clicked');
}

// circle3: Add functionality such that clicking on this svg hides it from the page. 
// Clicking on the blank space the svg was in should un-hide the svg from the page. 
// Hint: think about setting opacity in your css to show or hide the circle.
function shapeThreeClicked() {
    console.log('Shape Three Clicked');
    // Get svg class
    let curr_color = document.getElementById("cThree").getAttribute("class"); 

    // Change color 
    if (curr_color == "red") {
        document.getElementById("cThree").setAttribute("class", "opaque"); 
    } else {
        document.getElementById("cThree").setAttribute("class", "red"); 
    }

}

function addShapeEventListeners() {
    console.log('does this load?')
    document.getElementById('cOne').addEventListener('click', shapeOneClicked());
    document.getElementById('cTwo').addEventListener('mouseover', shapeTwoClicked());
    document.getElementById('cThree').addEventListener('click', shapeThreeClicked());
}
