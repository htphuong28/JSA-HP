let arrNavi = [
    {
        id: "Home"
    },
    {
        id: "Learning with me"
    },
    {
        id: "Dictionary"
    },
    {
        id: "My blog"
    },
    {
        id: "About me"
    }
]

function navigateLink () {
    let nagivate = document.querySelector(".navigate");
    if(navigate) {
            navigate.innerHTML = `
            <li><a href="">Home</a></li>
            <li><a href="">Learning with me</a></li>
            <li><a href="">Dictionary</a></li>
            <li><a href="">My blog</a></li>
            <li><a href="">About me</a></li>`
        
        
    }
}