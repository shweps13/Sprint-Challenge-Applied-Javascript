// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



const headerPlace = document.querySelector('.header-container');

headerPlace.appendChild(Header('SMARCH 28, 2019', 'Lambda Times', '98°'))

function Header(date, title, temp) {
    // Creating new elements here
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    // Making a structure here

    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    // Applying styles here
    header.classList.add('header');
    header.classList.add('header');
    headerTemp.classList.add('temp');

    // Adding content here
    headerDate.textContent = `${date}`;
    headerTitle.textContent = `${title}`;
    headerTemp.textContent = `${temp}`;

    return header;
}
