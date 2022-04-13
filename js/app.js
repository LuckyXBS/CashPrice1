const loader = document.querySelector(".loader");
         window.onload = function(){
           setTimeout(function(){
			 document.title = 'Cash Price - загрузка'
             loader.style.opacity = "0";
             setTimeout(function(){
               loader.style.display = "none";
			   document.title = 'Cash Price'
             }, 500);
           },1000);
         }
		 
const dropDown = document.querySelector(".dropdown-menu");
const closeDrop = document.querySelector(".close-menu");
const openDrop = document.querySelector(".profile");
	
	openDrop.addEventListener("click", () => {
      dropDown.classList.add("active");
    });
	
	closeDrop.addEventListener("click", () => {
      dropDown.classList.remove("active");
    });