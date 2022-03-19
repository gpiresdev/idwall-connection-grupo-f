const btnFilter = document.getElementById('btn-filter-status');
const offlineServices = document.getElementsByClassName('badge bg-danger');
const hiddenOfflineServices = document.getElementsByClassName('badge bg-danger hidden');

document.getElementById('offline-badge').innerHTML = offlineServices.length;
btnFilter.addEventListener('click', filter);


function filter() {
    if (hiddenOfflineServices.length === 0) {
        for (let index = 0; index < offlineServices.length; index++) {
            addClass(offlineServices[index], 'hidden');        
        }
    } else {
        for (let index = 0; index < offlineServices.length; index++) {
            removeClass(offlineServices[index], 'hidden');        
        }
    }
}


function addClass(el, cl) {
    el.classList.add(cl);
}

function removeClass(el, cl) {
    el.classList.remove(cl);
}

