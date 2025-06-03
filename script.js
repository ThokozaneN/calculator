var newLine = true; //Boolean variable. Determines if the next thing the user types should be on a new line

//Event Handler For When Any Button or Digit Is Pressed
function digitBtnPressed(button) {
    if(newLine){
        document.getElementById("inputBox").value = button;
        newLine = false;
    } else {
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

//AC Button Event Handler
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true;
}