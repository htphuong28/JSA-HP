function showHeader (vitri) {
    if(vitri) {
        vitri.innerHTML = `
        <div class="menu">
                <img src="img/Logotamthoi.png" alt=""><a href="logo" class="logo"></a></img>
                <ul class="navigate">
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="learn.html">Course</a></li>
                    <li><a href="dictionary.html">Dictionary</a></li>
                    <li><a href="bloglanding.html">My blog</a></li>
                    <li><a href="aboutme.html">About me</a></li>
    
                </ul>
                <div class="sign">
                <a href="signup.html"><button class="signup" >Đăng ký</button></a>
                <a href="form.html"><button class="signin">Đăng nhập</button></a>
                </div>
            </div>`
    }
}

function showFooter (vitri) {
    if (vitri) {
        vitri.innerHTML = `
        <div class="footercontent">
                <div class="footercontentcon">
                    <img src="img/Logotamthoi.png" alt="" class="footerimg">
                    <div class="footertext">
                        <img src="img/mail.png" alt="">
                        <p><a href="httphuong2828@gmail.com">httphuong2828@gmail.com</a></p>
                    </div>
                    <div class="footertext">
                        <img src="img/phone.png" alt="">
                        <p>0869264826</p>
                    </div>
                    <div class="footertext">
                        <img src="img/facebook.png" alt="">
                        <p><a href="https://www.facebook.com/hathieu.phuong.7/">Ha Thieu Phuong</a></p>
                    </div>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uyKx9eHpI1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>`
    }
}

let menu = document.querySelector(".menu");
showHeader (menu);

let footer = document.querySelector(".footer");
showFooter (footer)