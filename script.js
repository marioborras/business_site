// function onClick() {
//   if (document.getElementById("dropdown").style.display == "block") {
//     document.querySelector("body").style = "background: white";
//     document.getElementById("dropdown").style = "display:none";
//   } else {
//     document.getElementById("dropdown").style = "display:block";
//     document.querySelector("body").style = "background: #555";
//   }
// }
setTimeout(function() {
  document.querySelector("#modal").style = "display: block";
}, 3000);

function onclickx() {
  document.getElementById("modal").style = "display: none";
}

function onClickOpen() {
  document.getElementById("dropdown").style = "display:block";
  document.getElementById("close").style = "display:block";
  document.getElementById("menu-button").style = "display:none";
  document.getElementById("navCon").style = "background: #555";
  document.querySelector("body").style = "background: #555";
}
function onClickClose() {
  document.getElementById("dropdown").style = "display:none";
  document.getElementById("close").style = "display:none";
  document.getElementById("menu-button").style = "display:block";
  document.querySelector("body").style = "background: white";
  document.getElementById("navCon").style = "background: white";
}
