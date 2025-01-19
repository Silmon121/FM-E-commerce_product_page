const first_thumbnail_img = document.getElementById('thumbnail1');
const second_thumbnail_img = document.getElementById("thumbnail2");
const third_thumbnail_img = document.getElementById("thumbnail3");
const fourth_thumbnail_img = document.getElementById("thumbnail4");
const main_img = document.getElementById("main_img");

let selected_thumbnail_img = first_thumbnail_img;

first_thumbnail_img.addEventListener('click', e => {
    selected_thumbnail_img.classList.remove('active');
    selected_thumbnail_img = first_thumbnail_img;
    main_img.src = "images/image-product-1.jpg";
    first_thumbnail_img.classList.add('active');
})
second_thumbnail_img.addEventListener('click', e => {
    selected_thumbnail_img.classList.remove('active');
    selected_thumbnail_img = second_thumbnail_img;
    main_img.src = "images/image-product-2.jpg";
    second_thumbnail_img.classList.add('active');
})
third_thumbnail_img.addEventListener('click', e => {
    selected_thumbnail_img.classList.remove('active');
    selected_thumbnail_img = third_thumbnail_img;
    main_img.src = "images/image-product-3.jpg";
    third_thumbnail_img.classList.add('active');

})
fourth_thumbnail_img.addEventListener('click', e => {
    selected_thumbnail_img.classList.remove('active');
    selected_thumbnail_img = fourth_thumbnail_img;
    main_img.src = "images/image-product-4.jpg";
    fourth_thumbnail_img.classList.add('active');
})