const Jimp = require('jimp');

async function removeBackgroundFloodFill() {
  try {
    // Read the original un-messed-up image
    const imagePath = './public/images/daily-activities-original.jpg';
    console.log('Reading image...');
    const image = await Jimp.read(imagePath);
    
    console.log('Processing image with flood fill...');
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Create a boolean mask of visited pixels
    const visited = new Array(width * height).fill(false);
    
    const threshold = 50; // Tolerance for "black"
    
    function isBlack(x, y) {
      if (x < 0 || y < 0 || x >= width || y >= height) return false;
      const hex = image.getPixelColor(x, y);
      const rgba = Jimp.intToRGBA(hex);
      return rgba.r < threshold && rgba.g < threshold && rgba.b < threshold;
    }
    
    // Stack for iterative flood fill
    const stack = [];
    
    // Start flood fill from the 4 corners
    const startPoints = [
      {x: 0, y: 0},
      {x: width-1, y: 0},
      {x: 0, y: height-1},
      {x: width-1, y: height-1}
    ];
    
    for (const pt of startPoints) {
      if (isBlack(pt.x, pt.y)) {
        stack.push(pt);
        visited[pt.y * width + pt.x] = true;
      }
    }
    
    while (stack.length > 0) {
      const {x, y} = stack.pop();
      
      // Make this pixel transparent
      image.setPixelColor(0x00000000, x, y);
      
      // Check 4 neighbors
      const neighbors = [
        {x: x+1, y: y},
        {x: x-1, y: y},
        {x: x, y: y+1},
        {x: x, y: y-1}
      ];
      
      for (const n of neighbors) {
        if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
          const idx = n.y * width + n.x;
          if (!visited[idx] && isBlack(n.x, n.y)) {
            visited[idx] = true;
            stack.push(n);
          }
        }
      }
    }
    
    // Optional: soften the edge slightly
    
    console.log('Saving image...');
    await image.writeAsync('./public/images/daily-activities.png');
    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeBackgroundFloodFill();
