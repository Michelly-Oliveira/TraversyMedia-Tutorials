/* Animate Smooth Scroll */

// Select the button
let button = document.querySelector("#view-work");
// Where to scroll
let images = document.querySelector("#images");

button.addEventListener('click', function() {
    smoothScroll(images, 1000);
});

function smoothScroll(target, duration) {
    // Get the position from the top(relative to target)
    let targetPosition = target.getBoundingClientRect().top;
    // Get the number of pixels the document is currently scrolled along the vertical axis(y axis)
    let startPosition = window.pageYOffset;
    // Calculate the distance that needs to be scrolled
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animationLoop(currentTime) {
        if(startTime === null) {
            startTime = currentTime;
        }
        
        // How much time has passed
        let timeElapsed = currentTime - startTime;
        // Call the kind of scroll desired
        let runAnimation = ease(timeElapsed, startPosition, distance, duration);
        // Window scroll down(only on the y axis - vertically)
        window.scrollTo(0, runAnimation); // move on x axis, move on y axis
        // Continue to call the animation
        if(timeElapsed < duration) {
            requestAnimationFrame(animationLoop);
        }
    }

    function ease(t, b, c, d) { // http://www.gizma.com/
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Start animation loop
    requestAnimationFrame(animationLoop);

}
