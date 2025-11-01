// fetch('http://localhost:3000/api/Backend')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
const urlBase = "http://localhost:3000";
function functionGetData() {
  let list = '';
  // Ask server to send the data


  // Put data on the list variable


// Fill data on the HTML element
document.getElementById('dataPlace').innerHTML = list;
}



var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

function showDetails(productID){
    document.getElementById("produkty").style.display="none";
    document.getElementById("detailsBerserkvol41").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("contact").style.display="none";
}

function showProducts(produkty){
  document.getElementById("produkty").style.display="block";
  document.getElementById("detailsBerserkvol41").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("contact").style.display="none";
}

function showAbout(about){
  document.getElementById("produkty").style.display="none";
  document.getElementById("detailsBerserkvol41").style.display="none";
  document.getElementById("about").style.display="block";
  document.getElementById("contact").style.display="none";
  document.getElementById("offer").style.display="none";
}

function showContact(contact){
  document.getElementById("produkty").style.display="none";
  document.getElementById("detailsBerserkvol41").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("contact").style.display="block";
  document.getElementById("offer").style.display="none";
}