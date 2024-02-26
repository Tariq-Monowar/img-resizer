# img-resizer
img-resizers is a lightweight JavaScript module for effortlessly resizing images and adjusting image quality. Optimize storage and reduce loading times with ease.

## Installation
npm i img-resizers

## Example Usage
#### As a JavaScript Module
Import and use the module in your JavaScript and typeScript code:

```javascript 
// Import the resizeImage function from 'img-resizers'
import { resizeImage } from 'img-resizers';

// State declaration
const [image, setImage] = useState(null);

// Function to handle image change
const handleImageChange = (e) => {
  // Retrieve the selected image from the input element
  const selectedImage = e.target.files[0];
  
  // Call the resizeImage function with the selected image, desired width, quality, and a callback function to set the resized image
  resizeImage(selectedImage, width, quality, (resizedImage) => {
    // Set the resized image as the state
    setImage(resizedImage);
  });
};


