function Validation() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var message = document.getElementById("message");
    var error = document.getElementById("error")
    

    error.style.padding = "10px";

    var text;
    if (firstname.value.length < 1) {
        text = "Please input a valid First name";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;
}
    if (lastname.value.length < 1) {
        text = "Please input a valid Last name";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;
    }
    if (male.checked == false && female.checked == false) {
        text = "Please select a gender";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;

    }
    if (message.value.length < 1) {
        text = "Please input a message";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;
    }

    text = "Submit succes";
    error.innerHTML = text;
    error.style.visibility = "visible";
    error.style.backgroundColor = "green";
    console.log(firstname.value);
    console.log(lastname.value);
    console.log(male.checked == true ? 'Male' : 'Female');
    console.log(message.value);
    return false;
}