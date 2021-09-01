//console.log("Let's get this party started!"); - I keep this because I like this :D
const giphContainer = document.getElementById('giph-container')

async function getGiphy(q) {
    const randNum = Math.floor(Math.random() * 51);
    const api_key = "dc6zaTOxFJmzC"
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q, api_key } })
    const img = document.createElement('img');
    img.src = res.data.data[randNum].images.original.url
    giphContainer.appendChild(img)
}

//assign button and attach event listener
const form = document.querySelector('#search-form');
form.addEventListener('submit', function (e) {
    const input = document.getElementById('q');
    e.preventDefault();
    if (input.value == '') {
        alert('please enter some text')
    } else {
        getGiphy(input.value);
    }
    input.value = '';
});

//remove giphs onces remove button is clicked
const removeButton = document.querySelector('#remove-btn')
removeButton.addEventListener('click', function () {
    giphContainer.innerHTML = '';
})
