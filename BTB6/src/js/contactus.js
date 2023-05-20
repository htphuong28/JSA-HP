let form = document.querySelector("form");
form.addEventListener("submit",function(e) {
    e.preventDefault();
    let firstname = document.querySelector(".firstname").value;
    let lastname = document.querySelector(".lastname"),value;
    let number = document.querySelector(".number").value;
    let email = document.querySelector(".email").value;
    let check = true;
    //tao cac bieu thuc chinh quy
    let checkemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let checknumber = /^0[0-9]{9,11}$/;
    let checkname = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    //kiemtra
    if(!number.match(checknumber)) {
        alert("Invalid phone number");
        check=false;
    }
    if(!email.match(checkemail)) {
        alert("Invalid email");
        check=false;
    }
    if((!firstname.match(checkname))&&(!lastname.match(checkname))) {
        alert("Invalid name");
        check=false;
    }
    
    if (check) {
        alert("Send successfully!");
        window.location.reload();
        return check;
    
    } else {
        return check
    }
})