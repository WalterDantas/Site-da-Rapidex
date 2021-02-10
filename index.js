const mainBanner = document.getElementById("mainBanner");

const imgs = ['living-room-2569325_1920.jpg','dining-room-3108037.jpg','bed-4416515_1920.jpg'];
let index = 0;

function changeImg(element) {
  console.info(element);
  element.style.backgroundImage = `url('assets/${imgs[index]}')`;
  console.log("caraio",element.style);
  console.info("img",element.style.backgroundImage);
  index++;
  if(index > 2) {
    index = 0;
  }
}

setInterval(() => {
  changeImg(mainBanner);
}, 4000);

