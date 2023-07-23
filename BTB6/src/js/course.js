let courseList = [
    {
        img: "img/stock1.jpg",
        name: "Basic Course",
        description: "Description is put here",
        status: 1,
        progress: 60,
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
// let courseImage = document.querySelector(".course-image")
// let courseName = document.querySelector(".course-name")
// let courseDescription = document.querySelector(".course-description")
// let courseProgress = document.querySelector(".course-progress")
// let courseActionStatus = document.querySelector(".course-action-status")


// for(let i of courseList) {
//     courseImage.innerHTML = 
//     courseName.innerHTML = i.name
//     courseDescription.innerHTML = i.description
//     if(i.status == 0) {
//         courseActionStatus.innerHTML = "Start now"
//         courseProgress.value = 0
//     } else {
//         courseActionStatus.innerHTML = "Continue"
//         courseProgress.value = i.progress
//     }
// }

for(let i of courseList) {
    console.log(i.name)


    courseDisplay.innerHTML += `
    <div class="course">
        <a href="">
            <img src=${i.img} alt="course-image" class="course-image">
            <div class="course-info">
                <h2 class="course-name">${i.name}</h2>
                <p class="course-description">${i.description}</p>
            </div>
            <div class="course-individual-info">
                <button class="course-action-status">${i.status==1?"Continue":"Start"}</button>
                <progress value="${i.progress}" max="100" class="course-progress"></progress>
            </div>
        
        </a>
    </div>`
    

    

}
