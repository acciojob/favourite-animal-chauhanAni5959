// Add click toggle border on the image for interaction
document.getElementById('animalImage').addEventListener('click', function () {
  if (this.style.border) {
    this.style.border = '';
  } else {
    this.style.border = '5px solid #42b72a';
  }
});
