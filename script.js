let imagesAll = [
  "./img/reptile_snake_1280.jpg",
  "./img/bird_parrot_1280.jpg",
  "./img/amphibian_frog_1280.jpg",
  "./img/mammal_elephant_1280.jpg",
  "./img/amphibian_salamander_1280.jpg",
  "./img/reptile_lizard_1280.jpg",
  "./img/amphibian_toad_1280.jpg",
  "./img/bird_eagle_1280.jpg",
  "./img/mammal_cat_1280.jpg",
  "./img/bird_owl_1280.jpg",
  "./img/mammal_lion_1280.jpg",
  "./img/bird_pinguin_1280.jpg",
  "./img/mammal_dolphin_1280.jpg",
  "./img/reptile_crocodile_1280.jpg", 
  "./img/amphibian_axolotl_1280.jpg",
  "./img/reptile_tortoise_1280.jpg"
];

let imagesMammals = [
  "./img/mammal_elephant_1280.jpg",
  "./img/mammal_cat_1280.jpg",
  "./img/mammal_lion_1280.jpg",
  "./img/mammal_dolphin_1280.jpg",
];

let imagesBirds = [
  "./img/bird_parrot_1280.jpg",
  "./img/bird_eagle_1280.jpg",
  "./img/bird_owl_1280.jpg",
  "./img/bird_pinguin_1280.jpg",
];

let imagesReptiles = [
  "./img/reptile_snake_1280.jpg",
  "./img/reptile_lizard_1280.jpg",
  "./img/reptile_crocodile_1280.jpg", 
  "./img/reptile_tortoise_1280.jpg"
];

let imagesAmphibians = [
  "./img/amphibian_frog_1280.jpg",
  "./img/amphibian_salamander_1280.jpg",
  "./img/amphibian_toad_1280.jpg",
  "./img/amphibian_axolotl_1280.jpg",
];

let currentImages = [];
let currentImageIndex = 0;

function renderImages() {
  let imageTabContent = document.getElementById('tabcontent');
  imageTabContent.innerHTML = "";

    imageTabContent.style.display = "flex";
    imageTabContent.classList.add("active");

  for (let imageIndex = 0; imageIndex < currentImages.length; imageIndex++) {
    imageTabContent.innerHTML += createImageTemplate(imageIndex);
  }
}

function createImageTemplate(imageIndex) {
  return  `<img onclick="openOverlay(${imageIndex})" src="${currentImages[imageIndex]}">`;
}

function renderFiltered(event, index) {

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";

  if(index == 'show-all') {
    currentImages = imagesAll;
  }
  else if(index == 'mammals') {
    currentImages = imagesMammals;
  }
  else if(index == 'birds') {
    currentImages = imagesBirds;
  }
  else if(index == 'reptiles') {
    currentImages = imagesReptiles;
  }
  else if(index == 'amphibians') {
    currentImages = imagesAmphibians;
  }
  renderImages();
}

function toggleOverlay() {
  let overlayRef = document.getElementById('overlay');
  overlayRef.classList.toggle('d-none');
  document.body.classList.toggle('no-scroll');
}

function openOverlay(imageIndex) {

  currentImageIndex = imageIndex;
  
  let overlayRef = document.getElementById('overlay');
  
  overlayRef.innerHTML = getOverlayTemplate(currentImageIndex);
  
  overlayRef.classList.remove('d-none');

  document.body.classList.add('no-scroll');
}

function getOverlayTemplate(imageIndex) {
  return `
    <div class="overlay-content">
      <div class="overlay-header" onclick="noPropagation(event)">
        <button class="close-btn" onclick="toggleOverlay()">×</button>
      </div>
      <img class="overlay-image" src="${currentImages[imageIndex]}">
      <div class="overlay-navigation" onclick="noPropagation(event)">
        <button class="nav-btn prev-btn" onclick="navigateImage(-1)">
          <img src="./img/icons/arrow_left_back.svg" alt="Zurück">
        </button>
        <div class="image-counter">${imageIndex + 1} / ${currentImages.length}</div>
        <button class="nav-btn next-btn" onclick="navigateImage(1)">
          <img src="./img/icons/arrow_right_next.svg" alt="Vor">
        </button>
      </div>
    </div>
  `;
}

function navigateImage(direction) {
  currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
  
  let overlayRef = document.getElementById('overlay');
  overlayRef.innerHTML = getOverlayTemplate(currentImageIndex);
}

function noPropagation(event) {
  event.stopPropagation();
}




