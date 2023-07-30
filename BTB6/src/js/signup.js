// let form = document.querySelector("#form");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log(form.Name.value)
//     let userInfo = {
//         email: form.email.value,
//         name: form.name.value,
//         password: form.password.value,
//         rePassword: form.re-password.value
//     }
//     localStorage.setItem("Userinfo", JSON.stringify(userInfo));
// })

let form = document.querySelector("#form");
let email = document.querySelector("#email");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let rpassword = document.querySelector("#re-password");

let lowerCaseLetter = /[a-z]/g
let upperCaseLetter = /[A-Z]/g
let numbers = /[0-9]/g


function submitInfo() {
    console.log('click')
    let userInfo = {
        email: email.value.trim(),
        name: username.value.trim(),
        password: password.value.trim(),
        rpassword: rpassword.value.trim()
    }

    if(userInfo.email.length == 0 || userInfo.name.length == 0 || userInfo.password.length==0 || userInfo.rpassword.length==0) {alert("Vui long nhap day du thong tin")}
    
    else if (userInfo.password != userInfo.rpassword) {alert("Mat khau khong khop. Vui long nhap lai.")}

    else if (userInfo.password.length <8) {alert("Mat khau phai co it nhat 8 ky tu")}

    else if (!userInfo.password.match(lowerCaseLetter)) {alert("Mat khau phai co it nhat mot ky tu in thuong")}

    else if(!userInfo.password.match(upperCaseLetter)) {alert("Mat khau phai co it nhat mot ky tu in hoa")}
    
    else if(!userInfo.password.match(numbers)) {alert("Mat khau phai co it nhat mot chu so")}

    else {
        if(localStorage.userInfo) {
            let userInfo = JSON.parse(localStorage.userInfo)
            users.push(userInfo)
            localStorage.setItem("users", JSON.stringify(users))
        } else {
            localStorage.setItem("users",
            JSON.stringify(
            [
                userInfo
            ]));
        }
        location.replace("Home.html")
    }
    
}