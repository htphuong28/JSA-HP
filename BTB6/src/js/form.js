const arrLogin = [
    {
        tk: "ABC",
        mk: 123,
        role: 0,
    }
]


function login() {
    let tk = document.querySelector("#tk");
    let mk = document.querySelector("#mk");
    let d=true;
    for(let item of arrLogin) {
        if(tk.value==item.tk && mk.value==item.mk) {
            window.location="Home.html"
            return d=true;
        } else  {d=false};

    }
    if(d==false) {alert("Sai tài khoản hoặc mật khẩu")}
}

//return trả 1 giá trị 