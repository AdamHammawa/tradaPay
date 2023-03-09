document.querySelector("#show-pop").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

// Get Started Tabs

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// uuuuuuuuuuuuuuuuuuu

function openCity_two(evt_two, cityName_two) {
  // Declare all variables
  var i, tab_twocontent, tab_twolinks;

  // Get all elements with class="tab_twocontent" and hide them
  tab_twocontent = document.getElementsByClassName("tab_twocontent");
  for (i = 0; i < tab_twocontent.length; i++) {
    tab_twocontent[i].style.display = "none";
  }

  // Get all elements with class="tab_twolinks" and remove the class "active"
  tab_twolinks = document.getElementsByClassName("tab_twolinks");
  for (i = 0; i < tab_twolinks.length; i++) {
    tab_twolinks[i].className = tab_twolinks[i].className.replace(
      " active",
      ""
    );
  }

  // Show the current tab_two, and add an "active" class to the button that opened the tab_two
  document.getElementById(cityName_two).style.display = "block";
  evt_two.currentTarget.className += " active";
}
