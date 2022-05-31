const newProfile = `
  <div class="shared_profiles" id="closeProfile">
    <h3 class="">Add another user?</h3>
    <div class="profile_icons" id="profile_pannel">
      <div>
        <a href="">
          <img class="profile_round"
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="" srcset="">
        </a>
      </div>
      <div>
        <a href="">
          <img class="profile_round"
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="" srcset="">
        </a>
      </div>
      <div>
        <a href="">
          <img class="profile_round"
            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="" srcset="">
        </a>
      </div>
      <div>
      <button class = 'transparent_button' href="" onclick="closeProfile()">
          <img class="profile_round"
            src="./images/plus.svg"
            alt="" srcset="">
        </button>
      </div>
    </div>
  </div>
`

const sendEmailContent = `
<div class="shared_profile_form">
<h3 class="text-light text-center">User List</h3>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-light">Name</label>
    <input type="email" class="form-control" id="f1" aria-describedby="emailHelp">
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-light">Email address</label>
    <input type="email" class="form-control" id="f2" aria-describedby="emailHelp">
  </div>
  <button class = 'transparent_button' href="" onclick="sharedProfile()">
  Submit
  </button>

  <button class = 'transparent_button' href="" onclick="sharedProfile()">
  Cancel
  </button>
  </form>
</div>
` 


function sharedProfile (){
    console.log("Success!")
        appendHTML(newProfile, 'newProfileUsers')
}

function sendEmail(){
  console.log("Success email!")
  appendHTML(sendEmailContent, 'emailForm')
}

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

function copyContent(id){
 
}


function sendEmail() {
  
}

function takeshot() {
  const screenshotTarget = document.body;
  
  html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      localStorage.setItem('image', base64image);
  });
}
