// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log(response);
        const dataObj = response.data.topics;
        console.log(dataObj);
        dataObj.forEach((element) => {
           let userTab = newTab(element);
           console.log(userTab);
           topics.appendChild(userTab);
        });
    })
    .catch(error => console.log('Here is some troubles', error))

function newTab(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');

    tab.textContent = `${data}`;

    return tab;
}
    