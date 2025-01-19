const first_thumbnail_img = document.getElementById('thumbnail1');
const second_thumbnail_img = document.getElementById("thumbnail2");
const third_thumbnail_img = document.getElementById("thumbnail3");
const fourth_thumbnail_img = document.getElementById("thumbnail4");
const main_img = document.getElementById("main_img");
const overlay = document.getElementById("overlay");

let selected_thumbnail_img = first_thumbnail_img;

const first_thumbnail_img_overlay = document.getElementById('thumbnail1-overlay');
const second_thumbnail_img_overlay = document.getElementById("thumbnail2-overlay");
const third_thumbnail_img_overlay = document.getElementById("thumbnail3-overlay");
const fourth_thumbnail_img_overlay = document.getElementById("thumbnail4-overlay");
const main_img_overlay = document.getElementById("main_img-overlay");
const exit = document.getElementById("exit");

let selected_thumbnail_img_overlay = first_thumbnail_img_overlay;
//Main image dynamics
main_img.addEventListener("click", function(){

})
//Thumbnail dynamics
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
main_img.addEventListener("click", function(){
    overlay.style.display = "flex";
    main_img_overlay.src = main_img.src;
    switch (selected_thumbnail_img) {
        case first_thumbnail_img:
            selected_thumbnail_img_overlay.classList.remove('active');
            selected_thumbnail_img_overlay = first_thumbnail_img_overlay;
            first_thumbnail_img_overlay.classList.add('active');
            break;
        case second_thumbnail_img:
            selected_thumbnail_img_overlay.classList.remove('active');
            selected_thumbnail_img_overlay = second_thumbnail_img_overlay;
            second_thumbnail_img_overlay.classList.add('active');
            break;
        case third_thumbnail_img:
            selected_thumbnail_img_overlay.classList.remove('active');
            selected_thumbnail_img_overlay = third_thumbnail_img_overlay;
            third_thumbnail_img_overlay.classList.add('active');
            break;
        case fourth_thumbnail_img:
            selected_thumbnail_img_overlay.classList.remove('active');
            selected_thumbnail_img_overlay = fourth_thumbnail_img_overlay;
            fourth_thumbnail_img_overlay.classList.add('active');
            break;
    }
})

//OVERLAY CONFIG

first_thumbnail_img_overlay.addEventListener("click", e => {
    selected_thumbnail_img_overlay.classList.remove('active');
    selected_thumbnail_img_overlay = first_thumbnail_img_overlay;
    main_img_overlay.src = "images/image-product-1.jpg";
    first_thumbnail_img_overlay.classList.add('active');
})
second_thumbnail_img_overlay.addEventListener("click", e => {
    selected_thumbnail_img_overlay.classList.remove('active');
    selected_thumbnail_img_overlay = second_thumbnail_img_overlay;
    main_img_overlay.src = "images/image-product-2.jpg";
    second_thumbnail_img_overlay.classList.add('active');
})
third_thumbnail_img_overlay.addEventListener("click", e => {
    selected_thumbnail_img_overlay.classList.remove('active');
    selected_thumbnail_img_overlay = third_thumbnail_img_overlay;
    main_img_overlay.src = "images/image-product-3.jpg";
    third_thumbnail_img_overlay.classList.add('active');
})
fourth_thumbnail_img_overlay.addEventListener("click", e => {
    selected_thumbnail_img_overlay.classList.remove('active');
    selected_thumbnail_img_overlay = fourth_thumbnail_img_overlay;
    main_img_overlay.src = "images/image-product-4.jpg";
    fourth_thumbnail_img_overlay.classList.add('active');
})
exit.addEventListener("click", function(){
    overlay.style.display = "none";
})
overlay.addEventListener("click", e =>{
    if(e.target === overlay){
        overlay.style.display = "none";
    }
})
