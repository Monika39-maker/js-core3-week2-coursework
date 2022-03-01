const ul = document.querySelector('ul')
const li = document.querySelector('li');
const btn = document.getElementById('btn');


function getImage() {
    li.innerHTML = ' '
    fetch('https://dog.ceo/api/breeds/image/randoms')
    .then(response => {
        //the response has property-'ok' which is 'false if there is an error. Check by console.log(response), if needed.
        if (!response.ok) {
            //the one of the property seen on console is 'status'. we can save it for our error message, which I have used in my '.catch' part
            throw Error(response.status) // stops any further execution if there is an error
        }
        return response.json();
    
    }).then(data => {
        const image = document.createElement('img');
        image.src = data.message
        li.appendChild(image)
        
    }).catch((error) => { // this part only executes if there is an error
        li.innerText = `Sorry  ${error} has occured`;
        console.log(error)
    })
}
getImage();



