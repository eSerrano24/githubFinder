//init github
const github = new GitHub();
//init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById("searchUser");

//search input event listener
searchUser.addEventListener("keyup", (e) => {
  //Get input Text
  const userText = e.target.value;

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //Show Profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
