var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output = document.getElementById("output");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

function _(x) {
  return document.getElementById(x);
}

function processStageOne() {
  const firstname = _("firstname").value;
  const lastname = _("lastname").value;
  const email = _("email").value;

  if (firstname == ""){
    _("firstnameError").style.color = "#ff3b2d";
    _("iconOne").style.color = "#ff3b2d";
    return false;
  }
  if (lastname == ""){
    _("lastnameError").style.color = "#ff3b2d";
    _("iconOne").style.color = "#ff3b2d";
    return false;
  }
  if (email == ""){
    _("emailError").style.color = "#ff3b2d";
    _("iconOne").style.color = "#ff3b2d";
    return false;
  }
    _("stageOne").style.display = "none";
    _("stageTwo").style.display = "block";
    _("iconOne").style.color = "#2fd605";
    _("iconTwo").style.color = "#fdd700";
    _("iconOne").classList.remove("on");
    _("iconOne").classList.add("off");
    _("iconTwo").classList.add("on");

}
function processStageTwo() {
  _("stageTwo").style.display = "none";
  _("stageThree").style.display = "block";
  _("iconTwo").style.color = "#2fd605";
  _("iconThree").style.color = "#fdd700";
  _("iconTwo").classList.remove("on");
  _("iconTwo").classList.add("off");
  _("iconThree").classList.add("on");
}
function processStageThree() {
  _("stageThree").style.display = "none";
  _("stageFour").style.display = "block";
  _("iconThree").style.color = "#2fd605";
  _("iconFour").style.color = "#fdd700";
  _("iconThree").classList.remove("on");
  _("iconThree").classList.add("off");
  _("iconFour").classList.add("on");
}

function processPreStageOne() {
  _("stageOne").style.display = "block";
  _("stageTwo").style.display = "none";
  _("iconOne").style.color = "#fdd700";
  _("iconTwo").style.color = "#bebebe";
  _("iconOne").classList.remove("off");
  _("iconOne").classList.add("on");
  _("iconTwo").classList.remove("on");
  _("iconTwo").classList.add("off");
}
function processPreStageTwo() {
  _("stageTwo").style.display = "block";
  _("stageThree").style.display = "none";
  _("iconTwo").style.color = "#fdd700";
  _("iconThree").style.color = "#bebebe";
  _("iconTwo").classList.remove("off");
  _("iconTwo").classList.add("on");
  _("iconThree").classList.remove("on");
  _("iconThree").classList.add("off");
}
function processPreStageThree() {
  _("stageThree").style.display = "block";
  _("stageFour").style.display = "none";
  _("iconThree").style.color = "#fdd700";
  _("iconFour").style.color = "#bebebe";
  _("iconThree").classList.remove("off");
  _("iconThree").classList.add("on");
  _("iconFour").classList.remove("on");
  _("iconFour").classList.add("off");
}
