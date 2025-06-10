// Wait for the DOM to load and AR.js to initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if camera access is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: { exact: 'environment' },
                width: { ideal: 1280 },
                height: { ideal: 960 }
            } 
        })
            .then(function(stream) {
                console.log('Camera access granted');
            })
            .catch(function(err) {
                console.error('Camera access denied:', err);
                alert('Veuillez autoriser l\'accès à la caméra pour utiliser l\'AR');
            });
    } else {
        console.error('getUserMedia is not supported');
        alert('Votre navigateur ne supporte pas l\'accès à la caméra');
    }
    // Initialize variables
    let isInfoVisible = false;
    const infoPanel = document.getElementById('info-panel');
    const loadingScreen = document.querySelector('.loading-screen');

    // Hide loading screen immediately
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }

    // Add marker detection event listeners
    const markers = document.querySelectorAll('a-marker');
    markers.forEach((marker, index) => {
        marker.addEventListener('markerFound', () => {
            showInfo(index);
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        });

        marker.addEventListener('markerLost', () => {
            hideInfo();
        });
    });

    // Function to show information panel with specific content
    function showInfo(markerIndex) {
        const artifactInfo = getArtifactInfo(markerIndex);
        updateInfoPanel(artifactInfo);
        
        if (!isInfoVisible) {
            infoPanel.classList.remove('hidden');
            isInfoVisible = true;
        }
    }

    // Function to hide information panel
    function hideInfo() {
        if (isInfoVisible) {
            infoPanel.classList.add('hidden');
            isInfoVisible = false;
        }
    }

    // Function to get artifact information based on marker index
    function getArtifactInfo(index) {
        const artifacts = [
            {
                title: 'Interactive Cube',
                description: 'A dynamic red cube that rotates and scales, demonstrating basic AR animations.',
                type: 'Interactive Element',
                era: 'Digital Age',
                details: 'This exhibit showcases fundamental 3D transformations in augmented reality.'
            },
            {
                title: '3D Museum Artifact',
                description: 'An interactive 3D model showing the possibilities of AR in museum exhibitions.',
                type: '3D Model',
                era: 'Contemporary',
                details: 'Examine this artifact from all angles by moving your device around it.'
            },
            {
                title: 'Dynamic Text Display',
                description: 'Color-changing text that demonstrates interactive AR capabilities.',
                type: 'Text Installation',
                era: 'Modern',
                details: 'This piece combines traditional text with modern AR animation techniques.'
            }
        ];

        return artifacts[index] || artifacts[0];
    }

    // Function to update the info panel content
    function updateInfoPanel(info) {
        const title = infoPanel.querySelector('h2');
        const description = infoPanel.querySelector('p');
        const details = infoPanel.querySelector('.artifact-details');

        title.textContent = info.title;
        description.textContent = info.description;
        details.innerHTML = `
            <p><strong>Type:</strong> ${info.type}</p>
            <p><strong>Era:</strong> ${info.era}</p>
            <p><strong>Description:</strong> ${info.details}</p>
        `;
    }

    // Handle errors
    const scene = document.querySelector('a-scene');
    scene.addEventListener('arError', function(ev) {
        console.error('AR error:', ev);
        alert('AR Error: Please ensure camera permissions are granted and you\'re using a compatible device/browser.');
    });

    // Add touch interaction for mobile devices
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            // Handle pinch-to-zoom here if needed
        }
    }, { passive: false });

    // Handle window resize
    window.addEventListener('resize', function() {
        // Update UI elements positioning if needed
        const width = window.innerWidth;
        if (width <= 768) {
            // Adjust for mobile layout
            infoPanel.style.bottom = '80px';
        } else {
            // Reset to default layout
            infoPanel.style.bottom = '20px';
        }
    });
});