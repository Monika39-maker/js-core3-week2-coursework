const mainEl = document.getElementById('main');
const image = document.createElement('img');
mainEl.appendChild(image)

fetch('https://xkcd.now.sh/?comic=latest')
.then(response => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status)
    }
    return response.json();
    console.log(response.json)
})
.then (data => {
    image.src = data.img
})
.catch ((err)=> {
    console.log(err)
}
    
)