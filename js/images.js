const url = "https://jsonplaceholder.typicode.com/photos";
const albumHolder = document.getElementById('album-holder');
fetch(url).then(response => response.json()).then(data => {
    for (let i = 0; i < 100; i++) {
        const img = document.createElement('img');
        const div = document.createElement('div');
        div.classList.add('album');
        img.src = data[i].url;
        img.alt = data[i].title;
        albumHolder.appendChild(div).appendChild(img);
    }
    // for (const image of data) {
    //     const imgUrl = image.url;
    //     const altText = image.title;

    //     console.log(imgUrl)

    //     albumHolder.innerHTML += `
    //         <div class="album">
    //             <img src="${imgUrl}" alt="${altText}">
    //         </div>`;
    // }
})