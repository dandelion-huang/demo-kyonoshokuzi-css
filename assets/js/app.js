// --vh Re-define
// Ref: https://juejin.cn/post/6844904106549575687

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});



// --vw Re-define
// Ref: https://stackoverflow.com/questions/8339377/how-to-get-screen-width-without-minus-scrollbar

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vw = document.documentElement.clientWidth * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vw', `${vw}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vw = document.documentElement.clientWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
});



// 因為我自己有裝反廣告
// 所以先不修這裡
// yt player API
// var ytPlayer;
// window.onYouTubeIframeAPIReady = function () {
// 	ytPlayer = new YT.Player('mv-video-embed', {
// 		videoId: 'c494h2siteo',
// 		playerVars: {
// 			playsinline: 1,
// 			autoplay: 1,
// 			fs: 0,
// 			rel: 0,
// 			controls: 0,
// 			modestbranding: 1,
// 			showinfo: 0,
// 			iv_load_policy: 3,
// 			start: 0,
// 			events: {
// 				'onReady': onPlayerReady,
// 				'onStateChange': onPlayerStateChange
// 			}
// 		});
// 	};
	
// 	function onPlayerReady(event) {
// 		event.target.mute();
// 		event.target.playVideo();
// 		setTimeout(function () {
// 			$("#mv-video-embed").addClass("is-loaded");
// 		},
// 		1000);  
// 	}

// 	function onPlayerStateChange(event) {
// 		if (event.data == YT.PlayerState.ENDED) {      event.target.playVideo();
// 		}
// 	}
// }



// --header__trigger  
$(".header__trigger").click(function(){
    var element = document.getElementById("headerTriggerBtn");
    element.classList.toggle("is-active");
    var element = document.getElementById("scrollBtnWrap");
    element.classList.toggle("is-active");
    var element = document.getElementById("navFullPage");
    element.classList.toggle("is-active");
})



// Scroll to Top button
$(document).ready( () => {
    $(window).scroll( () => {
        if ( $(window).scrollTop() === 0 ) {
            if ( $(".header__scroll-btn-wrap").hasClass("is-active") ) {
                $(".header__scroll-btn-wrap").toggleClass("is-active");
            }
        }

        if ( $(window).scrollTop() > 0 ) {
            $(".header__scroll-btn-wrap").addClass("is-active");
        }
        

    });

    $(".header__scroll-btn-line2").click( () => {
        $("html,body").animate(
            {
            scrollTop: 0,
            },
            1000
        )    
    });
});



// About IMG Change
let aboutImgWrap = document.querySelector(".about__img-wrap");
// 這邊模擬一下丟資料進來
let aboutImgList = [];
aboutImgList.push("./assets/img/top_about.jpg");
aboutImgList.push("./assets/img/top_about_02.jpg");
aboutImgList.push("./assets/img/top_about_03.jpg");

let aboutImgIndex = 0;
const aboutImgChange = () => {
    if ( aboutImgIndex == aboutImgList.length ) {
        aboutImgIndex = 0;
    }   
    aboutImgWrap.innerHTML = `<img src="${aboutImgList[aboutImgIndex]}" alt="">`
    aboutImgIndex++;
    setTimeout(aboutImgChange, 5000);
}
setTimeout(aboutImgChange);



// Kyoto Street
// 想要先讓自己好懂 重寫一次
// 這邊我沒有修很細
$(document).ready( () => {
    $(window).scroll( () => {
        let setHeight = $(window).scrollTop();
        $(".kyoto-street__img--sp").css("bottom", 1 * setHeight * 0.035 - 100 + "px");
    });
});



// Carousel
// Carousel 是鬼吧
// 首先圖片一樣要從後端來
// 正常來說要套資料庫去上不同欄位的資料
// 但是還沒學到
let carouselList = [];
// 一開始多推最後一個進來左邊
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-06.jpg" alt="">
            <p class="fz-sm fw-bold">日本料理の心意気を居酒屋スタイルで愉しむ<br>「酒と魚DNA」</p>
        </a>
    </div>`);
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-01.jpg" alt="">
            <p class="fz-sm fw-bold">京都を味わうベトナム風バゲットサンド<br>「120ｇバインミー京都」</p>
        </a>
    </div>`);
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-02.png" alt="">
            <p class="fz-sm fw-bold">素材と人をジェラートでつなぐ　笑顔溢れる<br>「ともみジェラーto」</p>
        </a>
    </div>`);
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-03.png" alt="">
            <p class="fz-sm fw-bold">京の四季を感じさせる粋な隠れ家<br>「祇園つじや」</p>
        </a>
    </div>`);
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-04.jpg" alt="">
            <p class="fz-sm fw-bold">アートを五感で愉しむ<br>「sui東山」</p>
        </a>
    </div>`);
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-05.jpg" alt="">
            <p class="fz-sm fw-bold">お腹も気分も満足度120%!!<br>「KAMOGAWA BAKERY 京都本店」</p>
        </a>
    </div>`);
carouselList.push(`
    <div class="carousel-wall__carousel-card">
        <a href="">
            <img src="./assets/img/carousel-06.jpg" alt="">
            <p class="fz-sm fw-bold">日本料理の心意気を居酒屋スタイルで愉しむ<br>「酒と魚DNA」</p>
        </a>
    </div>`);
// 邏輯上是 hover 時停止
// 點擊時也要 clearInterval
let carouselWall = document.querySelector(".carousel-wall__carousel-area");
//兩種寫法選一個就可以
// for ( let i = 0 ; i < carouselList.length ; i++)  {
//     carouselWall.innerHTML += `${carouselList[i]}`;
// }
for( let carouselCard of carouselList ) {
    console.log(carouselCard);
    carouselWall.innerHTML += carouselCard;
}


// const carouselSlide = () => {
//     if ( window.scrollWidth < 992 ) {
//         console.log(vw);
//         carouselWall.style.marginLeft = (-1) * vw * 67 + "px";
//     }
// }

// setInterval(carouselSlide, 500);