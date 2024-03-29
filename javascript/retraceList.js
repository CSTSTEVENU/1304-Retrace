let idNum = 0

//When App place is clicked
function addPlace (){
    createForm(idNum)
    // appendElement("listParent", idNum)
    idNum += 1  
};

function createForm (number){
    console.log(`locationName_${number}`)
    let itemsDescription = `key, phone, book,...`

    let newForm = `
    <div id="container" class="d-flex align-items-stretch">
    <div class="reveal-modal d-flex flex-column bd-highlight mb-3" id="exampleModal">
        <div class="mb-3 d-flex flex-column ">
            <label for="locationName" class="form-label">Location</label>
            <input type="name" class="form-control" id="updateLocationName_${number}" placeholder="Location Name">
    
            <label for="Lost items" class="form-label">Lost items<br>Please separate items with comma (,)</label>
            <input type="name" class="form-control" id="updatedLocationItems_${number}" placeholder="${itemsDescription}">
        </div
        <div>
            <button class="btn btn-primary" onclick="deleteListCard('\container\')">Cancel</button>
            <button class="btn btn-primary" onclick="addValues(${number})">Add</button>
        </div>
    </div>
    </div>
    `
    const parentDom = document.querySelector('body')
    parentDom.innerHTML += newForm

}

function addValues(number){
    console.log(`${number} in addValues function!`)
    let updatedName = document.getElementById(`updateLocationName_${number}`).value
    let updatedItems = document.getElementById(`updatedLocationItems_${number}`).value
    console.log(updatedName)
    console.log(updatedItems)
    const itemArr = updatedItems.split(',')

    // set Array  
    localStorage.setItem(`locationName_${number}`, updatedName)
    localStorage.setItem(`locationItems_${number}`, JSON.stringify(itemArr))
    deleteListCard('container') //exit popup

    appendElement("listParent", number)

}

function appendElement(parentID, number){
    const parentDom = document.getElementById(parentID)

    if(document.getElementById("stevens_barbar")){
        deleteListCard("stevens_barbar")
    }

    let location = localStorage.getItem(`locationName_${number}`)
    let storedItems = JSON.parse(localStorage.getItem(`locationItems_${number}`))
    
    parentDom.innerHTML += `
    <div class="p-2" id="location_${number}">
        <h1>${location}</h1>
        ${generateCheckbox(storedItems)}
        <div>
            <button class="btn btn-warning delete_button" onclick="deleteListCard('\location_${number}\')">Delete</button>
        </div>
    </div>
    `
}

function deleteListCard(domID){
    const parentDom = document.getElementById(domID)
    parentDom.parentNode.removeChild(parentDom)
}

const generateCheckbox = (array) =>{
    let checkboxHolder = ''

    for (let index = 0; index < array?.length; index++) {
        checkboxHolder+=`
        <div>
        <input type="checkbox" id="phone" , name="phone">
        <label for="phone">${array[index]}</label>
    </div>
        `
        
    }

    return checkboxHolder
}

const updateLocalStorage = (number) =>{
    console.log(`${number} is updated on LocalStorage!`)
    let locationName = localStorage.getItem(`locationName_${number}`)
    let items = localStorage.getItem(`locationItems_${number}`)
    console.log(locationName)
    console.log(items)

    let newForm = `
    <div id="container">
    <div id="exampleModal" class="reveal-modal">
        <div class="mb-3">
            <fieldset>
                <div>
                    <label for="locationName" class="form-label">Location name</label>
                    <input type="name" class="form-control" id="updateLocation_${number}" placeholder="${locationName}">
                </div>
                <div>
                    <label for="Lost items" class="form-label">Lost items</label>
                    <input type="name" class="form-control" id="updateItem_${number}" placeholder="${items}">
                </div>
            </fieldset>
            <button class="btn btn-primary" onclick="updateValues(${number})">Update</button>
            <button class="btn btn-warning" onclick="deleteListCard('\container\')">Cancel</button>
    </div>
</div>
    `
    const parentDom = document.querySelector('body')
    parentDom.innerHTML += newForm
    // deleteListCard('container') //exit popup
}




function updateValues(number){
    console.log(`${number} in updateValues function!`)
    let updatedName = document.getElementById(`updateLocation_${number}`).value
    let updatedItems = document.getElementById(`updateItem_${number}`).value
    console.log(updatedName)
    console.log(updatedItems)
    const itemArr = updatedItems.split(',')

    // set Array  
    localStorage.setItem(`locationName_${number}`, updatedName)
    localStorage.setItem(`locationItems_${number}`, JSON.stringify(itemArr))
    deleteListCard('container') //exit popup

    appendElement("listParent", number)

}