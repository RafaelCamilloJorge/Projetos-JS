const btn = document.querySelector('button');
const apiUnsplash = "https://source.unsplash.com/2000x965/?";
const busca = document.querySelector('#searchTerm');
const form = document.querySelector('form');

btn.addEventListener('click', async () => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = apiUnsplash + busca.value;
    form.appendChild(li);
    li.appendChild(img);
    form.insertBefore(li, form.firstChild);
});

