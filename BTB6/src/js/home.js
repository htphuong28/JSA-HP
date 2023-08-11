let loatmau=document.querySelector(".loatmau");

let arrList = [
    {
        id: "xinchao",
        Name: "Xin chào",
        Description: "Make a flat base with your non-dominant hand.  Put your dominant hand flat above it.  Raise your dominant hand in a half-circling motion above the non-dominant hand, ending up around your mouth area.  The half-circling motion looks like waxing a car or cleaning a table.",
        Image: "img/stock1.jpg",
        Usage: "We mainly use above when we point to objects that are placed above each other, such as wooden blocks. We also use it when we describe a hat as being above someone's head.",
    },
    {
        id: "tambiet",
        Name: "Tạm biệt",
        Description: "Make a flat base with your non-dominant hand.  Put your dominant hand flat above it.  Raise your dominant hand in a half-circling motion above the non-dominant hand, ending up around your mouth area.  The half-circling motion looks like waxing a car or cleaning a table.",
        Image: "img/stock2.jpg",
        Usage: "We mainly use above when we point to objects that are placed above each other, such as wooden blocks. We also use it when we describe a hat as being above someone's head.",
    },
    {
        id: "an",
        Name: "Ăn",
        Description: "Make a flat base with your non-dominant hand.  Put your dominant hand flat above it.  Raise your dominant hand in a half-circling motion above the non-dominant hand, ending up around your mouth area.  The half-circling motion looks like waxing a car or cleaning a table.",
        Image: "img/stock3.jpg",
        Usage: "We mainly use above when we point to objects that are placed above each other, such as wooden blocks. We also use it when we describe a hat as being above someone's head.",
    },
    {
        id: "uong",
        Name: "Uống",
        Description: "Make a flat base with your non-dominant hand.  Put your dominant hand flat above it.  Raise your dominant hand in a half-circling motion above the non-dominant hand, ending up around your mouth area.  The half-circling motion looks like waxing a car or cleaning a table.",
        Image: "img/stock4.jpg",
        Usage: "We mainly use above when we point to objects that are placed above each other, such as wooden blocks. We also use it when we describe a hat as being above someone's head.",
    },
    {
        id: "ungho",
        Name: "Ủng hộ",
        Description: "Make a flat base with your non-dominant hand.  Put your dominant hand flat above it.  Raise your dominant hand in a half-circling motion above the non-dominant hand, ending up around your mouth area.  The half-circling motion looks like waxing a car or cleaning a table.",
        Image: "img/stock1.jpg",
        Usage: "We mainly use above when we point to objects that are placed above each other, such as wooden blocks. We also use it when we describe a hat as being above someone's head.",
    },

]

localStorage.setItem("termList", JSON.stringify(arrList))

function render (array, placeholder) {
    if (placeholder) {
        for(var item=0; item<4; item++) {
            placeholder.innerHTML += `
            <div class="mau">
                <img src="${array[item].Image}" alt="">
                <div class="imgtext">
                    <h3><a href="detail.code.html?id=${array[item].id}">"${array[item].Name}"</a></h3>
                    <p><a href="detail.code.html?id=${array[item].id}">${array[item].Description}</a></p>
                </div>  
            </div>
            `
        }
    }
    
}

console.log(new URLSearchParams(window.location.search).get("id"));

render (arrList,loatmau);

//tạo hàm thực hiện show chi tiết
function showDetail () {
    let id = new URLSearchParams(window.location.search).get("id");
    //sử dụng find để lọc object mang giá trị của sản phẩm
    let newProduct = arrList.find(function(item) {return item.id==id});
    let detail =document.querySelector(".detail");
    if (detail) {
        detail.innerHTML = `
        <div class="text1">
            <h1>${newProduct.Name}</h1>
            <p>${newProduct.Description}</p>
        </div>
                
        <img src="${newProduct.Image}" alt="">`
    }
}
function timkiem () {
    let input = document.querySelector(".timkiem").value;
    
    list.innerHTML = ``;
    for (let item of arrList) {
        if(item.Name.toLowerCase().indexOf(input)>-1) {
            console.log(item)
            list.innerHTML +=`
            <a href="detail.code.html?id=${item.id}">
                <li>
                    <img src="${item.Image}" alt="">
                    <p>${item.Name}</p>
                </li>
            </a>
            `
        }
    }
}

function thoat () {
    let closesearch = document.querySelector(".closesearch");
    closesearch.style.display = "block";
    let searchbutton = document.querySelector(".material-symbols-outlined");
    searchbutton.style.display = "none";
    console.log(1)
}

function clear1 () {
    let closesearch = document.querySelector(".closesearch");
    closesearch.style.display = "none";
    console.log(1);
    list.innerHTML = ``
}

let list = document.querySelector(".kq");
showDetail();

const arrBanner = [
    {
        id: 1,
        image: "img/Banner.png",
        title: "Signatie",
        content: "Signatie is a personal project founded with a view to disseminate knowledge about Vietnamese Sign Language (VSL) to everyone, including the Deaf and the normal community.",
    },
    {
        id: 2,
        image: "img/banner1.jpg",
        title: "Sign Language?",
        content: "Sign language is manual communication commonly used by people who are deaf. Sign language is not universal; people who are deaf from different countries speak different sign languages. The gestures or symbols in sign language are organized in a linguistic way.",
    }
]

let index = 0;


setInterval(function () {
    let banner = document.querySelector(".banner")
    //kiểm tra xem index có quá giới hạn mảng không -> quay lại
    if(index>=arrBanner.length) index=0;
    //kiểm tra xem index có nhỏ hơn 0 không -> quay lại
    if(index<0) index=arrBanner.length-1;
    banner.innerHTML=`
        <img src=${arrBanner[index].image} alt="">
        <div class="bannertext">
            <h1>${arrBanner[index].title}</h1>
            <p>${arrBanner[index].content}</p>
            <button>LEARN MORE</button>
        </div>`,
        index++},
    5000)

const arrListSumenh = [
    {
        id: 1,
        image: "img/sumenh1.jpg",
        text: "Help Vietnamese people access Vietnamese Sign Language",
    },
    {
        id: 2,
        image: "img/stock2.jpg",
        text: "Prepare the Hear with some sign so that they can help the Deaf if there is a chance",
    },
    {
        id: 3,
        image: "img/sumenh3.jpg",
        text: "The Deaf can learn through this website",
    },
]

let indexa = 0;
let indexb = 1;

setInterval(function() {
    let sumenh = document.querySelector(".solieu");
    if (indexa>=arrListSumenh.length) indexa=0;
    if (indexb>=arrListSumenh.length) indexb=0;

    sumenh.innerHTML=`
    <div class="solieucon">
        <img src="${arrListSumenh[indexa].image}" alt="Sumenh1">
        <h3>${arrListSumenh[indexa].text}</h3>
    </div>
    <div class="solieucon">
        <img src="${arrListSumenh[indexb].image}" alt="Sumenh1">
        <h3>${arrListSumenh[indexb].text}</h3>
    </div>`
    indexa++;
    indexb++
},5000)


//làm footer đki và trang học tập
//làm giới thiệu, phủ thông tin và blog
//tạo data blog và giao diện blog

//cac muc trong trang web da lam
//tu danh gia
//du kien cach phat trien trong tuong lai
//lam slide va form lien he

//sua thiet ke va slide, trang chu dai hon