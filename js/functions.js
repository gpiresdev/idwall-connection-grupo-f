/* javascript */
function displayIcon(iconName) {

    if (iconName === "search") {
        return `
        <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
            <g><path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/></g>
        </svg>
        `;
    }
    
    if (iconName === "rocket") {
        return `
        <svg class="icon" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:none;stroke:#595959;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#595959;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
            .st2{fill:none;stroke:#595959;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:5.2066,0;}
        </style>
        <circle class="st0" cx="16" cy="13" r="2"/>
        <path class="st0" d="M10,15.9c-1.9,1.5-3.4,3.6-4,6.1h2.3c1.5,0,2.6-1.4,2.2-2.8c-0.4-1.4-0.6-2.8-0.6-4.3C10,9.4,12.5,4.7,16,3
            c3.5,1.7,6,6.4,6,11.8c0,1.5-0.2,3-0.6,4.3c-0.4,1.4,0.7,2.8,2.2,2.8H26c-0.6-2.5-2.1-4.7-4-6.1"/>
        <line class="st0" x1="16" y1="22" x2="16" y2="30"/>
        <line class="st0" x1="13" y1="24" x2="13" y2="28"/>
        <line class="st0" x1="19" y1="24" x2="19" y2="28"/>
        </svg>
        `;
    }
}

// GET ALL ELEMENTS WITH ICONS SVG TO BE DISPLAYED
const icon = document.querySelectorAll('[icon]');
icon.forEach(iconImg => {
    iconImg.innerHTML = displayIcon(iconImg.getAttribute('icon'));
});