// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then( (response) => {
    console.log(response);
    const dataObj = response.data.articles;
    console.log(dataObj);
    Object.values(dataObj).forEach(element => {
        const localArray = element;
        console.log(localArray);
        localArray.forEach(element => {
            console.log(element);
            const thatCard = newCard(element);
            cards.appendChild(thatCard);
        })
    });

  })
  .catch(error => console.log('Here is some troubles', error));


function newCard(data){
  
    // Creating elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor= document.createElement('div');
    const cardImgcontainer= document.createElement('div');
    const cardImg = document.createElement('img');
    const cardName = document.createElement('span');
  
    // Styles here
    card.classList.add('card');
    cardHeadline.classList.add('headline'); 
    cardAuthor.classList.add('author');
    cardImgcontainer.classList.add('img-container');
    
   // Put data inside
    cardImg.src = data.authorPhoto;
    cardName.textContent = data.authorName;
    cardHeadline.textContent = data.headline;
  
    // Positioning here
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgcontainer);
    cardImgcontainer.appendChild(cardImg);
    cardAuthor.appendChild(cardName);

    return card;
  }
  
