document.querySelectorAll('.work__img').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("img01");
        modal.style.display = "block";
        modalImg.src = item.querySelector('img').src;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById("myModal").style.display = "none";
});
