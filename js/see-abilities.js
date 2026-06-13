function showAbilities() {

  document
    .getElementById("profile-tab")
    .classList.remove("active");

  document
    .getElementById("abilities-tab")
    .classList.add("active");
}

function showProfile() {

  document
    .getElementById("abilities-tab")
    .classList.remove("active");

  document
    .getElementById("profile-tab")
    .classList.add("active");
}