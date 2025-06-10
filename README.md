# AR Museum Demo

This is a simple Augmented Reality (AR) museum demonstration project that showcases different types of AR interactions using web technologies. The project uses A-Frame and AR.js to create an interactive AR experience accessible through web browsers.

## Features

- Multiple AR markers with different interactive elements
- Custom 3D model loading and display
- Animated AR objects
- Interactive information panels
- Responsive design for mobile devices
- Loading screen with smooth transitions

## AR Markers

1. **Hiro Marker**: Displays an animated red cube
2. **Custom Pattern Marker**: Shows a 3D museum artifact
3. **Kanji Marker**: Presents animated text

## Setup

1. Clone or download this repository
2. Host the files on a web server (local or remote)
   - For local testing, you can use Python's built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Or use any other local server solution

3. Access the website through HTTPS (required for AR features)
4. Allow camera permissions when prompted

## Usage

1. Print the AR markers (available in the `patterns` folder)
2. Open the website on a mobile device
3. Point your camera at the markers to see the AR content
4. Interact with the 3D models by moving your device around

## Technical Details

- Built with A-Frame framework
- Uses AR.js for augmented reality features
- Responsive design for various screen sizes
- Custom 3D model in GLTF format
- Interactive UI elements

## Browser Compatibility

- Works best on recent versions of Chrome, Firefox, and Safari
- Requires a device with a camera
- HTTPS connection required
- WebGL support needed

## Development

To modify the project:

1. Edit `index.html` to change AR markers and 3D models
2. Modify `styles.css` for visual adjustments
3. Update `script.js` to change interactions and behaviors

## Project Structure

```
/
├── index.html          # Main HTML file
├── styles.css         # CSS styles
├── script.js          # JavaScript functionality
├── models/            # 3D model files
│   └── artifact.gltf  # Sample 3D model
└── patterns/          # AR marker patterns
    └── pattern-marker_1.patt
```

## Tips

- Ensure good lighting for better marker detection
- Keep markers flat and avoid creases
- Hold device steady for better tracking
- Maintain proper distance from markers (30-100cm)

## License

This project is available for educational and demonstration purposes.

## Acknowledgments

- [A-Frame](https://aframe.io/)
- [AR.js](https://ar-js-org.github.io/AR.js/)
- [Three.js](https://threejs.org/)