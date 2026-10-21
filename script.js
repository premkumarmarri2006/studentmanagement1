
function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;

    if (name == "" || roll == "") {
        alert("Please fill all fields");
    } else {
        document.getElementById("result").innerHTML =
            "Student Added Successfully!<br>" +
            "Name: " + name + "<br>" +
            "Roll No: " + roll;
    }
}
