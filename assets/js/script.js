/* Width of each carousel image, in pixels */
let carouselWidth = 625; 

/* Part 1.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

prevButton.classList.add("hidden");

/* Create variable to keep track of which image we're on */
let imageNum = 0;

/* The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	imageNum += 1;

	// how many pixels from the left should imageRow now be?
	let offset = -imageNum * carouselWidth;

	// change css for imageRow
	imageRow.style.left = offset + "px";

	checkControls();
}

/* Change the onclick property for the next button */
nextButton.onclick = showNextImage;


/* The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum
	imageNum -= 1;

	// how many pixels from the left should imageRow now be?
	let offset = -imageNum * carouselWidth;

	// change css for imageRow
	imageRow.style.left = offset + "px";

	checkControls();
}

/* Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;


/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");

	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
		
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages - 1) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
		
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");
	}
}

