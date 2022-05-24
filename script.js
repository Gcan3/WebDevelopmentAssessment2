//Setting variable and linking the html button into the script
const showOnPx = 400;
const backUp = document.querySelector(".back-to-top")

//Variable for returning to the html element or the body
const scrollContainer = () => {
  return document.documentElement || document.body;
};

//Event listener for triggering the scroll function
document.addEventListener("scroll", () => {
  //scrollTop is represents the number of pixels that element has been scrolled from the top
  //If the user scrolls, the hidden style class for the back to top button will be removed
  //This makes the button appear when scrolled
  if (scrollContainer().scrollTop > showOnPx) {
    backUp.classList.remove("hidden")
  } 
  //Otherwise, the button will be kept hidden
  //This else statement can also be used when scrolled back up again
  else {
    backUp.classList.add("hidden")
  }
})

//This is the variable that acts as a function for the html element
const goUp = () => {
    document.body.scrollIntoView();
};
//Links the button and the variable function
backUp.addEventListener("click", goUp)


//This script is for the slideshow
//Setting the variables and calling the function
var index = 0;
slideShow();

//Function slideshow
function slideShow() {
  //Variables for the function
  //Including the slides' class
  var x;
  var y = document.getElementsByClassName("mySlides");
  //For loop to automatically change the slides
  //This is done by making the rest of the images turn invisible
  for (x = 0; x < y.length; x++) {
    y[x].style.display = "none";  
  }
  //Add up the index
  index++;
  //If the index becomes greater than the number of pictures,
  //It turns the index to the first
  if (index > y.length) {
      index = 1
  }
  //This is to display the slides corresponding to the index
  y[index-1].style.display = "block";  
  //This is for repeating the function every 4 seconds
  setTimeout(slideShow, 5500);
}