let canvas = document.getElementById('can1');
let image = null, grayImage = null;

//load image
function loadImage() {
  let fInput = document.getElementById('fInput');
 
  image = new SimpleImage(fInput);
  grayImage = new SimpleImage(fInput);
  
  image.drawTo(canvas);
}

//clear canvas and load original image
function doReset() {
  image.drawTo(canvas);
}

function doGray() {
  filterGray();	                      // function performs the grayscale work
  grayImage.drawTo(canvas);	          // display image
}

//grayscale effect 
function filterGray() {
  for (let pixel of grayImage.values()) {
    avg = (pixel.getRed() + pixel.getGreen() + pixel.getRed())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}