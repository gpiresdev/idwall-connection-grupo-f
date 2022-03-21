/* javascript */
function displayIcon(iconName) {

    if (iconName === 'search') {
        return `
        <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
            <g><path d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35   c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"/></g>
        </svg>
        `;
    }

    if (iconName === 'menu') {
        return `<svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`
    }

    if (iconName === 'ball') {
        return `
        <svg version="1.1" id="circle-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
            <path d="M10,5.5C10,7.9853,7.9853,10,5.5,10S1,7.9853,1,5.5S3.0147,1,5.5,1S10,3.0147,10,5.5z"/>
        </svg>
        `
    }

    if (iconName === 'setting') {
        return `
            <svg enable-background="new 0 0 32 32" id="Editable-line" class="icon" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="16" cy="16" fill="none" id="XMLID_224_" r="4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><path d="  M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2  c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732  c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732  l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2  c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732  c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z  " fill="none" id="XMLID_242_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>
        `
    }

    if (iconName === 'data') {
        return `
        <svg class="icon" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <!-- Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch -->
            <title>icon 37 clipboard upload</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="icon-37-clipboard-upload" sketch:type="MSArtboardGroup" fill="#000000">
                    <path d="M14,20 L10.75,23.25 L10,22.5 L14.5,18 L19,22.5 L18.25,23.25 L15,20 L15,30 L14,30 L14,20 L14,20 Z M12,5 L12,3.99791312 C12,2.89826062 12.897616,2 14.0048815,2 L14.9951185,2 C16.1061002,2 17,2.89449617 17,3.99791312 L17,5 L19.0044225,5 C19.555163,5 20,5.44724809 20,5.99895656 L20,7.00104344 C20,7.55733967 19.5542648,8 19.0044225,8 L9.9955775,8 C9.44483697,8 9,7.55275191 9,7.00104344 L9,5.99895656 C9,5.44266033 9.44573523,5 9.9955775,5 L12,5 L12,5 Z M11.0000005,4 L10.0027601,4 C8.89828672,4 8.00262776,4.89128252 8.00000577,6 L6.99742191,6 C5.89427625,6 5,6.88976324 5,8.00359486 L5,28.9964051 C5,30.10296 5.89092539,31 6.99742191,31 L22.0025781,31 C23.1057238,31 24,30.1102368 24,28.9964051 L24,8.00359486 C24,6.89703997 23.1090746,6 22.0025781,6 L20.9999942,6 L20.9999942,6 C20.9973726,4.89497907 20.1048269,4 18.9972399,4 L17.9999995,4 C17.9990959,2.34299141 16.6497738,1 14.9907455,1 L14.0092545,1 C12.3478441,1 11.0008998,2.33812603 11.0000005,4 L11.0000005,4 L11.0000005,4 Z M20.9999942,7 L22.0000398,7 C22.5452911,7 23,7.44908998 23,8.00307055 L23,28.9969294 C23,29.5610822 22.5523026,30 22.0000398,30 L6.9999602,30 C6.45470893,30 6,29.55091 6,28.9969294 L6,8.00307055 C6,7.43891776 6.44769743,7 6.9999602,7 L8.00000579,7 C8.00262739,8.10502093 8.89517314,9 10.0027601,9 L18.9972399,9 C20.1017133,9 20.9973722,8.10871748 20.9999942,7 L20.9999942,7 L20.9999942,7 Z M14.5,5 C14.7761424,5 15,4.77614239 15,4.5 C15,4.22385761 14.7761424,4 14.5,4 C14.2238576,4 14,4.22385761 14,4.5 C14,4.77614239 14.2238576,5 14.5,5 L14.5,5 Z" id="clipboard-upload" sketch:type="MSShapeGroup"></path>
                </g>
            </g>
        </svg>
        `
    }

    if (iconName === 'report') {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><style type="text/css">.st0{fill:none;}</style><g id="XMLID_74_"><path id="XMLID_170_" class="st0" d="M355.9 128h52L345 67.2v51.3c0 5 5.1 9.5 10.9 9.5z" fill="none"/><path id="XMLID_174_" class="st0" d="M355.9 168c-28.1 0-50.9-22.2-50.9-49.6V40.7l-216.6-.6c-5.5 0-10.4 4.7-10.4 10v411.8c0 5.2 5.3 10.2 10.9 10.2h339c5.7 0 9.1-5.2 9.1-10.2V168h-81.1zM320 247c11 0 20 9 20 20s-9 20-20 20H145c-11 0-20-9-20-20s9-20 20-20h175zm-176-80h116c11 0 20 9 20 20s-9 20-20 20H144c-11 0-20-9-20-20s9-20 20-20zm226 200H145c-11 0-20-9-20-20s9-20 20-20h225c11 0 20 9 20 20s-9 20-20 20z" fill="none"/><path id="XMLID_488_" d="M467.2 129.8L345.5 12C338.1 4.8 328 .7 317.6.7L88.4.1C60.6.1 38 22.5 38 50.1v411.8C38 489 61.3 512 88.9 512h339c27.1 0 49.1-22.5 49.1-50.2V153.7c0-9.3-3.5-17.8-9.8-23.9zM345 67.2l62.9 60.8h-52c-5.8 0-10.9-4.5-10.9-9.6V67.2zM427.9 472h-339c-5.6 0-10.9-4.9-10.9-10.2V50.1c0-5.3 4.9-10 10.4-10l216.6.6v77.7c0 27.3 22.8 49.6 50.9 49.6H437v293.8c0 5-3.4 10.2-9.1 10.2z"/><path id="XMLID_490_" d="M125 267c0 11 9 20 20 20h175c11 0 20-9 20-20s-9-20-20-20H145c-11 0-20 9-20 20z"/><path id="XMLID_491_" d="M144 207h116c11 0 20-9 20-20s-9-20-20-20H144c-11 0-20 9-20 20s9 20 20 20z"/><path id="XMLID_492_" d="M370 327H145c-11 0-20 9-20 20s9 20 20 20h225c11 0 20-9 20-20s-9-20-20-20z"/></g><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="report,seo" dc:description="report,seo" dc:publisher="Iconscout" dc:date="2018-04-23" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Neelpari Artist</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
        `
    }
}

// SELECT ELEMENTS
const menu = document.getElementById('menu');
const icon = document.querySelectorAll('[icon]');
const topbar = document.getElementById('topbar');

// DISPLAY SVG IMAGES ON ALL ELEMENTS CONTAINING ATTRIBUTE ICON
icon.forEach(iconImg => {
    iconImg.innerHTML = displayIcon(iconImg.getAttribute('icon'));
});

// EXPAND TOPBAR MENU
menu.onclick = () => {
    if ((topbar.style.height == '60px') || (topbar.style.height == '')) {
        topbar.style.height = '100%';
    } else {
        topbar.style.height = '60px';
    }
}

/* ANIMATION NUMBER COUNTING */
const counters = document.querySelectorAll(".count");
counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(1);

        if (count < target) {
            counter.innerText = (count + increment);
            setTimeout(updateCount, 70);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});