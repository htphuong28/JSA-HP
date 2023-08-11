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

    if(email.value.trim().length == 0 || username.value.trim().length == 0 || password.value.trim().length==0 || rpassword.value.trim().length==0) {alert("Vui long nhap day du thong tin")}
    
    else if (password.value.trim() != rpassword.value.trim()) {alert("Mat khau khong khop. Vui long nhap lai.")}

    else if (password.value.trim().length <8) {alert("Mat khau phai co it nhat 8 ky tu")}

    else if (!password.value.trim().match(lowerCaseLetter)) {alert("Mat khau phai co it nhat mot ky tu in thuong")}

    else if(!password.value.trim().match(upperCaseLetter)) {alert("Mat khau phai co it nhat mot ky tu in hoa")}
    
    else if(!password.value.trim().match(numbers)) {alert("Mat khau phai co it nhat mot chu so")}

    else {
        if(localStorage.userInfo) {
            let userInfo = JSON.parse(localStorage.userInfo)
            userInfo.push({
                email: email.value.trim(),
                name: username.value.trim(),
                password: password.value.trim()
        })
            localStorage.setItem("userInfo", JSON.stringify(userInfo))
        } else {
            localStorage.setItem("userInfo",
            JSON.stringify(
            [{
                email: email.value.trim(),
                name: username.value.trim(),
                password: password.value.trim()
        }]));
        }
        location.replace("Home.html")
    }
    
}