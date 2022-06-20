// const sendEmailContent = `
// <div class="shared_profile_form">
// <h3 class="text-light text-center">User List</h3>
// <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label text-light">Name</label>
//     <input type="email" class="form-control" id="f1" aria-describedby="emailHelp">
//   </div>

//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label text-light">Email address</label>
//     <input type="email" class="form-control" id="f2" aria-describedby="emailHelp">
//   </div>
//   <button class = 'transparent_button' href="" onclick="sharedProfile()">
//   Submit
//   </button>

//   <button class = 'transparent_button' href="" onclick="sharedProfile()">
//   Cancel
//   </button>
//   </form>
// </div>
// ` 


function sharedProfile (){
    console.log("Success!")
    let newProfile = getScreenshot ()
    appendHTML(newProfile, 'newProfileUsers')
}

// function sendEmail(){
//   console.log("Success email!")
//   appendHTML(sendEmailContent, 'emailForm')
// }

function appendHTML(newContent, elementID) {
    const profile = document.getElementById(elementID)

    profile.innerHTML += newContent
}

function closeProfile (){
    console.log("close")
    document.getElementById("newProfileUsers").innerHTML = ""; 
}

function clearContent(){
  console.log("Clicked")
  let checkBox = document.querySelectorAll("input[type='checkbox']");
  for(i = 0; i < checkBox.length; i++)
  {
    checkBox[i].checked = false;
  }
}

function sendEmail() {

  document.getElementById("hidden").style.display = "block";
}

function takeshot() {
  const screenshotTarget = document.body;
  
  html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      localStorage.setItem('image', base64image);
  });
}

function getScreenshot (){
  let screenshot = localStorage.getItem('image')

  const newProfile = `
  <div class="shared_profiles" id="closeProfile">
    <h3 class="">Shared User Profile</h3>
    <div class="profile_icons" id="profile_pannel">
      <div>
        <a href="">
          <img class="localStorage_round"
            src="${screenshot}"
            alt="" srcset="">
        </a>
      </div>
    </div>
  </div>
`
return newProfile
}

function sent(){

  console.log("cliked")

  let email = [];

  if (localStorage.getItem('email'))    {
    e = JSON.parse(localStorage.getItem('email')) ;
}
  
  let emailObj = {};

  emailObj.email = document.getElementById('email').value;

  email.push(emailObj);

  localStorage.setItem('email', JSON.stringify(email));
  

  if(document.getElementById('alerts'))
  {
    (document.getElementById('wrapper').removeChild(document.getElementById('alerts')))
  }
  console.log("clicked")
  x = document.getElementById('wrapper')
  y = document.createElement('div')
  y.className = "alert alert-success"
  y.id = "alerts"
  y.role = "alert"
  y.textContent = `Email successfully sent to ${document.getElementById('email').value}`
  x.prepend(y)


}

function sent2() {
  
    if (localStorage.getItem('email'))    {
      e = JSON.parse(localStorage.getItem('email')) ;
      document.getElementById('f2').value = e[0].email;
  }
}



function save() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (i = 0; i < checkboxes.length; i++) {
    localStorage.setItem(checkboxes[i].id+i, checkboxes[i].checked);
  }
}
 
 
 function load_() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]');
  for (i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = localStorage.getItem((checkboxes[i].id+i)) === 'true' ? true:false
  }
}
// edit
 