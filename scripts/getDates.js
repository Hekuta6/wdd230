todaysDate = new Date(document.lastModified);
dayName = todaysDate.getDate();
monthName = todaysDate.getMonth() + 1;
year = todaysDate.getFullYear();
time = todaysDate.toLocaleTimeString('it-IT');
document.querySelector('#year').textContent = year;
document.querySelector('#lastModified').textContent = `Last Modification: ${dayName}/${monthName}/${year} ${time}`;

const hamburgerButton = document.getElementById('hamburgerButton');
const mainMenu = document.getElementById('mainMenu');

hamburgerButton.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});

function incrementPageVisits() {
    let pageVisits = localStorage.getItem('pageVisits');
    if (pageVisits) {
        pageVisits = parseInt(pageVisits) + 1;
    } else {
        pageVisits = 1;
    }
    localStorage.setItem('pageVisits', pageVisits.toString());
}

function getPageVisits() {
    let pageVisits = localStorage.getItem('pageVisits');
    return pageVisits ? parseInt(pageVisits) : 0;
}

incrementPageVisits();

let pageVisitsCount = getPageVisits();
document.querySelector('#sectionTwo ul li:nth-child(3)').textContent = 'Page Visits: ' + pageVisitsCount;


copyNameState();
updateDateTime();