function calculateResult() {
    let showcal = document.getElementById("show").value;
    try {
        let result = eval(showcal);
        document.getElementById("show").value = result;
    } catch (a) {
        document.getElementById("show").value = "Error!";
    }
}
function clearDisplay() {
    document.getElementById("show").value = " ";
}


function appendToDisplay(value) {
    document.getElementById("show").value += value;
}


function deleteLast() 
{
      showcal= document.getElementById("show").value;
    document.getElementById("show").value = showcal.slice(0, -1);
}


