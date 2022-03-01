const ul = document.querySelector('ul')
const li = document.querySelector('li');
const btn = document.getElementById('btn');


function getImage() {
    li.innerHTML = ' '
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        return response.json();
    
    }).then(data => {
        const image = document.createElement('img');
        image.src = data.message
        li.appendChild(image)
    }).catch((error) => {

        li.innerText = `Sorry An Error occored.Check console`;
        console.log(error)
    })
}
getImage();



