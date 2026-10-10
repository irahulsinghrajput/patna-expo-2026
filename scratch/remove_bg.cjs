const Jimp = require('jimp');

async function removeBlackBackground() {
  try {
    const imagePath = './public/images/daily-activities.png';
    console.log('Reading image...');
    const image = await Jimp.read(imagePath);
    
    console.log('Processing image pixels...');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Tolerance for "black" (0-255)
    const threshold = 40; // Increased threshold for softer edges
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const hex = image.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(hex);
        
        // If pixel is very dark (close to black), make it transparent
        if (rgba.r < threshold && rgba.g < threshold && rgba.b < threshold) {
          // Calculate an alpha based on how close to black it is to soften edges
          const lightness = (rgba.r + rgba.g + rgba.b) / 3;
          let alpha = Math.max(0, Math.min(255, (lightness / threshold) * 255));
          if (alpha < 50) alpha = 0; // strict cutoff
          
          image.setPixelColor(Jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, alpha), x, y);
        }
      }
    }
    
    console.log('Saving image...');
    await image.writeAsync('./public/images/daily-activities.png');
    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBlackBackground();
