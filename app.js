//init github
const github = new GitHub();

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
      } else {
        //Show Profile
      }
    });
  } else {
    //clear profile
  }
});
