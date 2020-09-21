let canvas = document.getElementById('can1');
let image = null, grayImage = null, redImage = null;

//load image
function loadImage() {
  let fInput = document.getElementById('fInput');
 
  image = new SimpleImage(fInput);
  grayImage = new SimpleImage(fInput);
  redImage = new SimpleImage(fInput);
  
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

function doRed() {
  filterRed();
  redImage.drawTo(canvas);
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

//red effect
function filterRed() {
  for (let pixel of redImage.values()) {
    avg = (pixel.getRed() + pixel.getGreen() + pixel.getRed())/3;
    if (avg < 128) {
      pixel.setRed(2*(avg));
      pixel.setGreen(0);
      pixel.setBlue(0);
    } 
    else {
      pixel.setRed(255);
      pixel.setGreen(2*(avg) - 255);
      pixel.setBlue(2*(avg) - 255);
    }
  }
}