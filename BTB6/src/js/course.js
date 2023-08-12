let courseList = [
    {
        img: "img/stock1.jpg",
        name: "Basic Course",
        description: "Description is put here",
        status: 1,
        progress: 60,
        link: "coursedetail.html"
    },
    {
        img: "img/stock1.jpg",
        name: "Medium Course",
        description: "Start this after the Basic Course",
        status: 1,
        progress: 60,
    },
    {
        img: "img/stock1.jpg",
        name: "Advance Course",
        description: "",
        status: 0,
        progress: 0,
    },
]


let courseDisplay = document.querySelector(".course-display")

for(let i of courseList) {
    console.log(i.name)


    courseDisplay.innerHTML += `
    <div class="course">
        <a href="">
            <div class="course-image-section">
                <img src=${i.img} alt="course-image" class="img"> 
            </div>
            
            <div class="course-info">
                <h2 class="course-name">${i.name}</h2>
                <p class="course-description">${i.description}</p>
            </div>
            <div class="course-individual-info">
                <a href="${i.link}"><button class="course-action-status">${i.status==1?"Continue":"Start"}</button></a>
                
                <progress value="${i.progress}" max="100" class="course-progress"></progress>
            </div>
        
        </a>
    </div>`
    

    

}
