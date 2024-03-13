document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.querySelector('.loader-container');
    const pageContent = document.querySelector('.page-content');

    console.log(pageContent)

    loaderContainer.classList.add('hidden')
    pageContent.classList.add('visible')
});