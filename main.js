// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let allImgs = document.querySelectorAll(".images img");
let modalImg = document.getElementById("modal-img");
let captionText = document.getElementById("caption");

//loop through all images and add click event
allImgs.forEach(img => {
    img.addEventListener("click", openMadel);
});

function openMadel() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
let closeBtn = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}
