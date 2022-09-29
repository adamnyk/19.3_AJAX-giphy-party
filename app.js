async function getGif(tag) {
    let response = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {
        api_key: "8J79UDaPaUwLxauXY4DzfMhUWyBjeSBF",
        tag
    }});
    let url = response.data.data.images.downsized_large.url
    const results = document.getElementById('results')
    const img = document.createElement('img');
    img.src = url;
    results.append(img);
}

const form = document.querySelector('#searchForm')
form.addEventListener('submit', (e) => {
    const input = document.querySelector('#search')
    e.preventDefault();
    getGif(input.value);
    form.reset()
})

const removeBtn = document.querySelector('#removeBtn')
removeBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const results = document.getElementById('results')
    results.replaceChildren();
})