let arrLogin = JSON.parse(localStorage.getItem("userInfo"))
console.log(arrLogin)
let tk = document.querySelector("#tk");
let mk = document.querySelector("#mk");

function login(e) {

    if(tk.value.trim().length==0 || mk.value.trim().length==0) alert("Vui lòng nhập email hoặc mật khẩu")

    let d=true;

    var indexArr = arrLogin.map(e => e.name).indexOf(tk.value)
    console.log(indexArr)

    if(indexArr>=0 && (arrLogin[indexArr].password == mk.value)) {location.replace("Home.html")}
    else alert("Sai tài khoản hoặc mật khẩu");

    if(d==false) {alert("Sai tài khoản hoặc mật khẩu")}
}

//return trả 1 giá trị 

function showpass() {

    if(mk.type === "password") {
        mk.type = "text"
    } else mk.type = "password"
}