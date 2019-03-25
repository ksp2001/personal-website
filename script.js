window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 450) nav.className = ''; else nav.className = 'scroll';
};

function menuopen() {
  var checkBox = document.getElementById("toggle");
  var menutab = document.getElementById("menu");

  if (checkBox.checked == true){
   menutab.style.display = "block";
  } 
  else {
  	menutab.style.display = "none";
  }
}