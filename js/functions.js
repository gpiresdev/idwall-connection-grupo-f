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
}

function displaySidebar(activeLink) {
    let page0, page1, page2, page3, page4, dir = ''; 
    switch (activeLink) {
        case "0":
            page0 = 'link-active';
            dir = '.';
            break
        case "1":
            page1 = 'link-active';
            dir = '..';
            break
        case "2":
            page2 = 'link-active';
            dir = '..';
            break
        case "3":
            page3 = 'link-active';
            dir = '..';
            break
        case "4":
            page4 = 'link-active';
            dir = '..';
            break
    }
    return `
                <!-- SIDEBAR -->
                <div class="sidebar position-fixed h-100 d-none d-sm-none d-md-flex col-md-3 flex-column p-0">
                    <!-- LOGO -->
                    <div class="logo m-0 d-flex justify-content-center">
                        <img class="img-fluid" src="${dir}/images/idwalllogo_500x160.png" alt="logo idwall"> 
                    </div>
                    <nav class="sidebar-nav">
                        <ul> 
                            <li class="${page0}"><a href="${dir}/index.html">Início</a></li>
                            <li class="${page1}"><a href="${dir}/pages/func1.html">Usuários</a></li>
                            <li class="${page2}"><a href="${dir}/pages/func2.html">Monitor</a></li>
                            <li class="${page3}"><a href="${dir}/pages/func3.html">Pipeline</a></li>
                            <li class="${page4}"><a href="${dir}/pages/func4.html">Novo relatório</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- END SIDEBAR-->

                <!-- TOP BAR -->
                <div id="topbar" class="topbar topbar-open position-fixed w-100 d-12 d-sm-12 d-md-none d-flex flex-column p-0">
                    <!-- LOGO -->
                    <div class="logo d-flex flex-row justify-content-between pe-4">
                        <img class="img-fluid" src="${dir}/images/idwalllogo_500x160.png" alt="logo idwall">
                        <i icon="menu" id="menu"></i>
                    </div>
                    <!-- NAVIGATION -->
                    <div class="flex-column">
                        <nav class="sidebar-nav">
                            <ul> 
                                <li class="${page0}"><a href="${dir}/index.html">Início</a></li>
                                <li class="${page1}"><a href="${dir}/pages/func1.html">Usuários</a></li>
                                <li class="${page2}"><a href="${dir}/pages/func2.html">Monitor</a></li>
                                <li class="${page3}"><a href="${dir}/pages/func3.html">Pipeline</a></li>
                                <li class="${page4}"><a href="${dir}/pages/func4.html">Novo relatório</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- END TOP BAR -->
    `
}

// DISPLAY NAVIGATION SIDEBAR
const sidebar = document.querySelectorAll('[sidebar]');
sidebar.forEach(sidebarElement => {
    sidebarElement.innerHTML = displaySidebar(sidebarElement.getAttribute('sidebar'));
});

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