const searchForm = document.querySelector('#search-post');
const searchInput = document.querySelector('#search-post input');
const posts = document.querySelectorAll(".post-item");

searchForm && searchForm.addEventListener('submit', e => e.preventDefault());

searchInput && searchInput.addEventListener('keyup', () => {
    posts.forEach(post => post.hidden = !isSearchMatchPost(post));
});

function isSearchMatchPost(post) {
    return getSearchTerms().every(term =>
        getPostSearchStrings(post).includes(term));
}

function getSearchTerms() {
    return searchInput.value.toLowerCase().trim().split(" ");
}

function getPostSearchStrings({ textContent, dataset: { tags } }) {
    return `${textContent} ${tags}`.toLowerCase();
}