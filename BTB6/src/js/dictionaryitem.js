var termList = JSON.parse(localStorage.getItem("termList"))

var listTermGroups = {}

for(var i=0; i<termList.length;i++) {
    var letter = termList[i].id.slice(0,1).toUpperCase();

    if(!listTermGroups[letter]) listTermGroups[letter] =[]
    listTermGroups[letter].push(termList[i])
}

console.log(listTermGroups)

let displayTerm = document.querySelector(".display-term")

function renderTerm(position) {
    for(var letter in listTermGroups) {
        position.innerHTML +=`
            <div class="letter-section">
                <div class="letter">${letter}</div>`
                for(var i=0; i<listTermGroups[letter].length;i++){
                    position.innerHTML += `
                        
                            <div class="term">
                                <img src="${listTermGroups[letter][i].Image}" alt="">
                                <span>${listTermGroups[letter][i].Name}</span>
                            </div>`
                        }
        position.innerHTML+=`</div>`
        
    }
}

renderTerm(displayTerm)