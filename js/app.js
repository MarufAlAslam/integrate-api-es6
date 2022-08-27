const url = "https://jsonplaceholder.typicode.com/posts";
const postHolder = document.getElementById('post-holder');
fetch(url).then(response => response.json()).then(posts => {
    for (const post of posts) {
        const title = post.title;
        const body = post.body;
        const author = post.id;

        postHolder.innerHTML += `
            <div class="post">
                <p class="author">${author}</p>
                <h3>${title}</h3>
                <p>${body}</p>
                </div>
                `;
    }
})