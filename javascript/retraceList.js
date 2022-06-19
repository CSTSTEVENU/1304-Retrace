let idNum = 0


function addListCard (){
    console.log("Add")
    createForm(idNum)
    appendElement("listParent", idNum)

    idNum += 1
}

function editListCard(number){
    console.log(number)
    updateListCard(number)
    let locationItems = ["item1", "Itm"];
    localStorage.setItem(`locationItems_${number}`, JSON.stringify(locationItems));
}

function deleteListCard(domID){
    const parentDom = document.getElementById(domID)
    parentDom.parentNode.removeChild(parentDom)
}

function appendElement(parentID, number){
    const parentDom = document.getElementById(parentID)

    if(document.getElementById("stevens_barbar")){
        deleteListCard("stevens_barbar")
    }


    let location = localStorage.getItem(`locationName_${number}`)
    let storedItems = JSON.parse(localStorage.getItem(`locationItems_${number}`))
    parentDom.innerHTML += `
    <div id="location_${number}">
        <h1>${location || "Location Name"}</h1>
        ${generateCheckbox(storedItems)}
        <div>
            <button class="btn btn-primary" onclick="editListCard('${number}')">Edit</button>
            <button class="btn btn-warning delete_button" onclick="deleteListCard('\location_${number}\')">Delete</button>
        </div>
    </div>
    `
}

function createForm(number){
    let items = `key, phone, book,...`

    let locationName = document.getElementById(`locationName_${number}`)
    localStorage.setItem(`locationName_${number}`, locationName)

    let locationItems = document.getElementById(`locationItems_${number}`)
    console.log(locationItems)


    let newForm = `
    <div id="container" class="d-flex align-items-stretch">
    <div class="reveal-modal d-flex flex-column bd-highlight mb-3" id="exampleModal">
        <div class="mb-3 d-flex flex-column ">
            <label for="locationName" class="form-label">Location</label>
            <input type="name" class="form-control" id="updateLocationName_${number}" placeholder="Location Name">

            <label for="Lost items" class="form-label">Lost items<br>Please separate items with comma (,)</label>
            <input type="name" class="form-control" id="updatedLocationItems_${number}" placeholder="${items}">
        </div
        <div>
            <button class="btn btn-primary" onclick="deleteListCard('\container\')">Cancel</button>
            <button class="btn btn-primary" onclick="">Add</button>
        </div>
    </div>
</div>
    `
    const parentDom = document.querySelector('body')
    parentDom.innerHTML += newForm
    

    
}

const pushItem = (number) =>{
    console.log("Added", number)
    localStorage.setItem(`locationItems_${number}`, JSON.stringify(locationItems));
    

}



function updateListCard(number){
    let locationName = localStorage.getItem(`locationName_${number}`)
    let items = JSON.parse(localStorage.getItem(`locationItems_${number}`))
    let newForm = `
    <div id="container">
    <div id="exampleModal" class="reveal-modal">
        <div class="mb-3">
            <fieldset>
                <div>
                    <label for="locationName" class="form-label">Location name</label>
                    <input type="name" class="form-control" id="locationName" placeholder="${locationName}">
                </div>
                <div>
                    <label for="Lost items" class="form-label">Lost items</label>
                    <input type="name" class="form-control" id="locationName" placeholder="${items}">
                </div>
            </fieldset>
            <button class="btn btn-primary" onclick="updateValues(${number})">Update</button>
            <button class="btn btn-warning" onclick="deleteListCard('\container\')">Cancel</button>
    </div>
</div>
    `
    const parentDom = document.querySelector('body')
    parentDom.innerHTML += newForm

 
}

const updateValues = (number) =>{
    console.log(`${number} is updated!`)
    let updatedName = document.getElementById(`updateLocationName_${number}`)
    let updatedItems = document.getElementById(`updatedLocationItems_${number}`)
    // console.log(updatedName)
    // console.log(updatedItems)
    localStorage.setItem(`locationName_${number}`, updatedName.value)
    localStorage.setItem(`locationItems_${number}`, updatedItems.value)
    deleteListCard('container') //exit popup
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