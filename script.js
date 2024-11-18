var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const swiperWrapper = document.querySelector("#swiper-slider-wrapper");
let nextBtn = document.querySelector("#next-btn");
let body = document.querySelector("body");

let backBtn = document.querySelector('#back-btn')


let arr = [
    {
        id: 0,
        img: "img/Frame 24.svg",
        color: "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"
    },
    {
        id: 1,
        img: "img/Frame 25.svg",
        color: "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"
    },
    {
        id: 2,
        img: "img/Frame 26.svg",
        color: "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"
    },
    {
        id: 3,
        img: "img/Frame 27.svg",
        color: "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"
    },
]

const render = () => {
    arr.forEach(data => {
        swiperWrapper.insertAdjacentHTML("beforeend", `
            <div class="swiper-slide" data-index="${data.id}">
                <img src="${data.img}" alt="watch">
            </div>
        `);
    });

    body.style.background = arr[0].color;
}

nextBtn.addEventListener("click", () => {
    const data = swiper.slides[swiper.activeIndex];
    body.style.background = arr[data.getAttribute("data-index")].color;
});

backBtn.addEventListener("click", () => {
    const data = swiper.slides[swiper.activeIndex];
    body.style.background = arr[data.getAttribute("data-index")].color;
});

render();



  