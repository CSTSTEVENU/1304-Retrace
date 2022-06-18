let idNum = 0
function addListCard (){
    console.log("Add")
    appendElement("listParent", idNum)
    idNum += 1
}

function editListCard(){
    console.log("edit")
}

function deleteListCard(domID){
    deleteElement(domID)
}





function appendElement(parentID, number){
    const parentDom = document.getElementById(parentID)
    parentDom.innerHTML += `
    <div id="location_${number}">
        <h1>Add Element</h1>
        <div>
            <button class="btn btn-primary" onclick="addListCard()">Add Place</button>
            <button class="btn btn-primary" onclick="editListCard()">Edit</button>
            <button class="btn btn-warning delete_button" onclick="deleteListCard('\location_${number}\')">Delete Place</button>
        </div>
    </div>
    `
}

function deleteElement(parentID){
    const parentDom = document.getElementById(parentID)
    parentDom.parentNode.removeChild(parentDom)
}