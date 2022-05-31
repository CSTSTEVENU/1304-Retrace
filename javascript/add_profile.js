function addNewUser (){
    console.log("Success!")
        createUserProfile()
}

function createUserProfile() {
    const profile = document.getElementById('newProfileUsers')
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

    profile.innerHTML += newProfile
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
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}
