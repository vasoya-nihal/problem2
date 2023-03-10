function numberValidation(){
    var a = document.getElementById("num").value;
    if(a==""){
        document.getElementById("num_message").innerHTML="** Please fill Mobile Number";
        return false;
    }
    if(isNaN(a)){
        document.getElementById("num_message").innerHTML="** Enter only Numeric Value";
        return false;
    }
    if(a.length<10){
        document.getElementById("num_message").innerHTML="** Mobile Number must be 10 digit";
        return false;
    }
    if(a.length<10){
        document.getElementById("num_message").innerHTML="** Mobile Number must be 10 digit";
        return false;
    }
    if((a.charAt(0)!=9) && (a.charAt(0)!=8) && (a.charAt(0)!=7) && (a.charAt(0)!=6)){
        document.getElementById("num_message").innerHTML="** Mobile Number must start with 9,8,7 and 6";
        return false;
    }
}


// shdvfsiudfyisudg
var selectedRow = null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData)
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["num"] = document.getElementById("num").value;
    formData["bday"] = document.getElementById("bday").value;
    formData["a_time"] = document.getElementById("a_time").value;
    formData["fav_color"] = document.getElementById("fav_color").value;
    formData["payment"] = document.getElementById("payment").value;
    formData["age"] = document.getElementById("age").value;
    formData["option1"] = document.getElementById("option1").value;
    formData["photo"] = document.getElementById("photo").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("clientlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.num;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.bday;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.a_time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.fav_color;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.payment;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.age;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.option1;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.photo;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                        <a onclick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("num").value = "";
    document.getElementById("bday").value = "";
    document.getElementById("a_time").value = "";
    document.getElementById("fav_color").value = "";
    document.getElementById("payment").value = "";
    document.getElementById("age").value = "";
    document.getElementById("option1").value = "";
    document.getElementById("photo").value = "";
    selectedRow = null;
 
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("num").value = selectedRow.cells[2].innerHTML;
    document.getElementById("bday").value = selectedRow.cells[3].innerHTML;
    document.getElementById("a_time").value = selectedRow.cells[4].innerHTML;
    document.getElementById("fav_color").value = selectedRow.cells[5].innerHTML;
    document.getElementById("payment").value = selectedRow.cells[6].innerHTML;
    document.getElementById("age").value = selectedRow.cells[7].innerHTML;
    document.getElementById("option1").value = selectedRow.cells[8].innerHTML;
    document.getElementById("photo").value = selectedRow.cells[9].innerHTML;
   
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.num;
    selectedRow.cells[3].innerHTML = formData.bday;
    selectedRow.cells[4].innerHTML = formData.a_time;
    selectedRow.cells[5].innerHTML = formData.fav_color;
    selectedRow.cells[6].innerHTML = formData.payment;
    selectedRow.cells[7].innerHTML = formData.age;
    selectedRow.cells[8].innerHTML = formData.option1;
    selectedRow.cells[9].innerHTML = formData.photo;
  
}
function onDelete(td) {
    if(confirm('Are you sure to delete this record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("clientlist").deleteRow(row.rowIndex);
    resetForm();
    }
}

function myForm(){
    let FirstName = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Number = document.getElementById("num").value;
    let Birthday = document.getElementById("bday").value;
    let Appointmenttime = document.getElementById("a_time").value;
    let Color = document.getElementById("fav_color").value;
    let Payment = document.getElementById("payment").value;
    let Age = document.getElementById("age").value;
    let Option1 = document.getElementById("option1").value;
    let Photo = document.getElementById("photo").value;




    let firstname = localStorage.setItem("FirstName",FirstName);
    let email1 = localStorage.setItem("Email",Email);
    let number1 = localStorage.setItem("Number",Number);
    let birthday1 = localStorage.setItem("Birthday",Birthday);
    let appointmenttime1 = localStorage.setItem("Appointmenttime",Appointmenttime);
    let color1 = localStorage.setItem("Color",Color);
    let payment1 = localStorage.setItem("Payment",Payment);
    let age1 = localStorage.setItem("Age",Age);
    let option1 = localStorage.setItem("Option1",Option1);
    let photo1 = localStorage.setItem("Photo",Photo);
}