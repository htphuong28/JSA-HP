let courseContent = {
    name: "Khóa nhập môn",
    description: "Khóa học đầu tiên giúp bạn làm quen với các kí hiệu cơ bản, tính chất của ngôn ngữ kí hiệu, là nền tảng cho việc học sâu hơn",
    progress: 70,
    chapter: [
        {
            name: "chào hỏi cơ bản",
            description: "Hãy học những từ vựng hàng ngày đầu tiên: chào hỏi",
            lessonlist: [
                {
                    type: "video",
                    display: "link",
                },
                {
                    type: "theory",
                    display: "Paragraph",
                },
                {
                    type: "multiplechoiequestion",
                    display: "question for this part",
                    answerchoice: ["answerchoiceA",
                     "answerchoiceB", "answerchoiceC"],
                    correctanswer: "answerchoiceA"
                    
                }
            ]
        },
        {
            name: "các chữ số",
            description: "Hãy học những từ vựng hàng ngày đầu tiên: chào hỏi",
            lessonlist: [
                {
                    type: "theory",
                    display: "Paragraph",
                },
                {
                    type: "multiplechoiequestion",
                    display: "question for this part",
                    answerchoice: ["answerchoiceA",
                     "answerchoiceB", "answerchoiceC"],
                    correctanswer: "answerchoiceA"
                    
                }
            ]
        }
    ]
}


function dropdownFunc(dropdownsection) {
    console.log(dropdownsection)
    document.getElementsByClassName(dropdownsection).classList.toggle("chapter-lesson-show")
    
}

function renderCourseDetail(placeholder) {
    if(placeholder) {
        placeholder.innerHTML = `
        <div class="course-info-text">
                    <h1>${courseContent.name}</h1>
                    <p> ${courseContent.description}</p>
                    <button class="getstartedbt">${(courseContent.progress>0)?"CONTINUE LEARNING":"GET STARTED"}</button>
                </div>
                <div class="course-info-graph">
                    
                    <svg width="150" height="150" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)">
                        <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e0" stroke-width="16px" stroke-dasharray="565.48px" stroke-dashoffset="0"></circle>
                        <circle r="90" cx="100" cy="100" stroke="#76e5b1" stroke-width="16px" stroke-linecap="round" stroke-dashoffset="118.692px" fill="transparent" stroke-dasharray="565.48px"></circle>
                        <text x="71px" y="115px" fill="#6bdba7" font-size="52px" font-weight="bold" style="transform:rotate(90deg) translate(0px, -196px)">${courseContent.progress}</text>
                    </svg>
    
                </div>`
    }
}

function renderCourseContent(placeholder) {
    if(placeholder) {
        for(let item = 0; item< courseContent.chapter.length; item++) {
            placeholder.innerHTML+= `
            <div class="chapter">
                            <div class="chapter-info">
                                <h2>${courseContent.chapter[item].name}</h2>
                                <p>${courseContent.chapter[item].description}</p>
                            </div>
                            
                            <div class="chapter-lesson-dropdown">
                                <button class="dropdownbt">Show lessons</button>
                                <div class="chapter-lesson">
                                    
                                </div>
                                
                            </div>
                            
                        </div>`
            let chapterLesson = document.getElementsByClassName("chapter-lesson")

            for(let i=0; i<courseContent.chapter[item].lessonlist.length;i++) {
                chapterLesson[item].innerHTML+= `<li><a href="">Lesson ${i+1}</a></li>`
            }
            
            let dropdownbt = document.getElementsByClassName("dropdownbt")
            console.log(dropdownbt[item])
            for(let j=0; j<dropdownbt.length;j++) {
                dropdownbt[j].onclick = function() {
                    chapterLesson[j].classList.toggle("chapter-lesson-show")
                }
            }
            
        }
        
            

                        
    }
}

let courseContentContain = document.querySelector(".course-content-contain")

renderCourseContent(courseContentContain)
courseContentContain.classList
let courseInfo = document.querySelector(".course-info")

renderCourseDetail(courseInfo)