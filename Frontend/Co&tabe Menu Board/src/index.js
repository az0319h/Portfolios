// wife 비 연결시 와이파이 연결 후 접속하라는 alert 출력 후 사이트 꺼짐
const inOnline = navigator.onLine; //현재 브라우저의 on,off상태를 확인
if(!inOnline){
    alert("인터넷이 연결되지 않았습니다. 확인 후 다시 QR코드를 카메라로 찍어주세요!")
    window.close(); // 자동으로 창 닫음
}
window.addEventListener('offline', function(e) {
    alert("인터넷이 연결되지 않았습니다. 확인 후 다시 QR코드를 카메라로 찍어주세요!")
    //window.close(); // 자동으로 창 닫음
})

// 310px 미만의 디스플레이 회전 png
let smartPhoneSizeErrorBox = document.querySelector('.smart_phone_size_errorbox')
let content = document.querySelector(".content")
let setMenuBoard = document.querySelectorAll('.br')
if(window.innerWidth < 310) {
    // 모든 컨텐츠는 없어지고 디스플레이를 뒤집으라는 이미지가 나온다.   
    smartPhoneSizeErrorBox.style.display = 'block'
    content.style.display = 'none'
}
// 세트메뉴 길이로 인한 br태그 활성화
if(window.innerWidth <= 767){
    for(let i = 0; i < setMenuBoard.length; i++){
        setMenuBoard[i].style.display = 'block'
    }
}
window.addEventListener('resize', function(e) {
    // 세트메뉴 길이로 인한 br태그 활성화
    if(window.innerWidth <= 767){
        for(let i = 0; i < setMenuBoard.length; i++){
            setMenuBoard[i].style.display = 'block'
        }
    } else {
        for(let i = 0; i < setMenuBoard.length; i++){
            setMenuBoard[i].style.display = 'none'
        }
    }
})

// heer 슬라이더 
$('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
});
let slickBtns = document.querySelectorAll(".single-item > button")
for(let i = 0; i < slickBtns.length; i++){
    slickBtns[i].style.display = 'none'
}


// menu btns 누르면 active 클랙스 추가 및 해당 영역만 디스플레이 출력
let menuBtn1 = document.querySelector('.menu_btn1')
let menuBtn2 = document.querySelector('.menu_btn2')
let menuBtn3 = document.querySelector('.menu_btn3')
let menuBtn4 = document.querySelector('.menu_btn4')
let menuBtn5 = document.querySelector('.menu_btn5')
let menuBtn6 = document.querySelector('.menu_btn6')
let menuBtn7 = document.querySelector('.menu_btn7')
let menuBtn8 = document.querySelector('.menu_btn8')
let menuBtn9 = document.querySelector('.menu_btn9')
let menuBtn10 = document.querySelector('.menu_btn10')
let menuBtn11 = document.querySelector('.menu_btn11')
let menuBtn12 = document.querySelector('.menu_btn12')
let menuBtn13 = document.querySelector('.menu_btn13')
let menuBtn14 = document.querySelector('.menu_btn14')
let menuBtn15 = document.querySelector('.menu_btn15')
let menuBtn16 = document.querySelector('.menu_btn16')
let boardsUlItems = document.querySelectorAll('.main_content__menu_board > ul')

function menuButtonClassRemoveAction(){
    let menuBtnAll = document.querySelectorAll('.main_content__menu_btns > button')
    for(let i = 0; i < menuBtnAll.length; i++){
        menuBtnAll[i].classList.remove('active')
    }    
}
function menuBoardDisplayAction(value) {
    for(let i = 0; i < boardsUlItems.length; i++){
        boardsUlItems[i].style.display = 'none'
    }
    boardsUlItems[value].style.display = 'block'
}
menuBtn1.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn1.classList.add('active')
    for(let i = 0; i < boardsUlItems.length; i += 1) boardsUlItems[i].style.display = 'block'
})
menuBtn2.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn2.classList.add('active')
    menuBoardDisplayAction(0); 
})
menuBtn3.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn3.classList.add('active')
    menuBoardDisplayAction(1); 
})
menuBtn4.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn4.classList.add('active')  
    menuBoardDisplayAction(2); 
})
menuBtn5.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn5.classList.add('active')
    menuBoardDisplayAction(3); 
})
menuBtn6.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn6.classList.add('active')  
    menuBoardDisplayAction(4); 
})
menuBtn7.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn7.classList.add('active')
    menuBoardDisplayAction(5); 
})
menuBtn8.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn8.classList.add('active')  
    menuBoardDisplayAction(6); 
})
menuBtn9.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn9.classList.add('active')
    menuBoardDisplayAction(7); 
})
menuBtn10.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn10.classList.add('active')  
    menuBoardDisplayAction(8); 
})
menuBtn11.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn11.classList.add('active')  
    menuBoardDisplayAction(9); 
})
menuBtn12.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn12.classList.add('active')
    menuBoardDisplayAction(10); 
})
menuBtn13.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn13.classList.add('active')  
    menuBoardDisplayAction(11); 
})
menuBtn14.addEventListener('click', function(e){
    menuButtonClassRemoveAction();
    menuBtn14.classList.add('active')
    menuBoardDisplayAction(12); 
})
menuBtn15.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn15.classList.add('active')  
    menuBoardDisplayAction(13); 
})
menuBtn16.addEventListener('click', function(e){
    menuButtonClassRemoveAction(); 
    menuBtn16.classList.add('active')  
    menuBoardDisplayAction(14); 
})


// aside Btn 번역 및 상단 이동
let languageBtn = document.querySelector(".languageBtn")
let upBtn = document.querySelector(".upBtn")
let menuBtnItems = null;
let boards = document.querySelectorAll(".main_content__menu_board > ul > .category > span");
let kor = document.querySelectorAll(".kor")
let eng = document.querySelectorAll(".eng")

function menuBtnItemsTextChange(items){
    let menuBtnAll = document.querySelectorAll('.main_content__menu_btns > button')
    for(let i = 0; i < items.length; i++){
        menuBtnAll[i].innerHTML = items[i]
    }
}

languageBtn.addEventListener('click', function(e) {
    if(languageBtn.innerHTML == 'ENG'){
        // header
        languageBtn.innerHTML = "KOR"
        document.querySelector('.banner1_span').innerHTML = `As the first dining brand in Korea with a luxurious concept aimed at being a high-end pub, we strive to captivate our main consumer base, women. We have meticulously prepared to offer a unique experience that delivers a different level of satisfaction.`
        //이벤트 후 제거가능한 코드(시작)
        document.querySelector('.banner2_sub_title_span').innerHTML = 'July Special Event'
        document.querySelector('.banner2_title_span').innerHTML = '50% Off Soju Event'
        document.querySelector('.banner2_span').innerHTML = 'Co&Tabe Dongducheon Branch 1st Anniversary Soju Discount Event! The discounted soju options are limited, so please ask our staff for details.'
        // menu buttons
        menuBtnItems = ['Full Menu', 'Set Menu', 'New Menu', 'Soup Dishes', 'Pizza Dishes', 'Special Dishes','Dried Snacks', 'Fried Dishes', 'Dessert Dishes', 'Main Dishes', 'Beverages', 'Soju', 'Beer', 'Makgeolli', 'Imported Beer', 'Liquor or Spirits']
        menuBtnItemsTextChange(menuBtnItems)    
        // menu board
        for(let i  = 0; i < boards.length; i++){
            boards[i].innerText = menuBtnItems[i + 1];
        }
        //메뉴 스위치 
        for(let i = 0; i < kor.length; i++){
            let temp = kor[i].innerHTML
            kor[i].innerHTML = eng[i].innerHTML
            eng[i].innerHTML = temp; 
        }
    } else {
        // header
        languageBtn.innerHTML = "ENG" 
        document.querySelector('.banner1_span').innerHTML = `국내 최초 럭셔리 분위기의 컨셉으로 요리 주점을 지향하는 외식 브랜드는 주요 소비 계층인
        여심을 사로잡을 수 있어야 합니다. 만족의 온도가 다른 특별함으로 완벽히 준비했습니다.`
        //이벤트 후 제거가능한 코드(시작)
        document.querySelector('.banner2_sub_title_span').innerHTML = '7월 스페셜 이벤트'
        document.querySelector('.banner2_title_span').innerHTML = '소주 50% 할인 이벤트'
        document.querySelector('.banner2_span').innerHTML = `코앤타베 동두천점 1주년 기념 소주 할인 행사! 할인 가능한 소주는 정해져 있으니 직원에게 문의 바랍니다.`
        //  menu buttons
        menuBtnItems = ['전체메뉴', '세트메뉴', '신메뉴', '탕류', '피자류', '별미류','마른안주', '튀김류', '후식류', '식사류', '음료', '소주', '맥주', '막걸리', '수입맥주', '양주']
        menuBtnItemsTextChange(menuBtnItems)    
        // menu board
        for(let i  = 0; i < boards.length; i++){
            boards[i].innerText = menuBtnItems[i + 1];
        }
        //메뉴 스위치 
        for(let i = 0; i < kor.length; i++){
            let temp = eng[i].innerHTML
            eng[i].innerHTML = kor[i].innerHTML
            kor[i].innerHTML = temp; 
        }
    }
})

// 상단 이동
$("#scroll-top").on("click",function(){
    
    if(window.innerWidth >= 1021){
        $('html, body').animate({
            scrollTop : 500
            }, 500)
            return false;
    } else if(window.innerWidth <= 1020 && window.innerWidth >= 768){
        $('html, body').animate({
            scrollTop : 486
            }, 500)
            return false;
    } else {
        $('html, body').animate({
            scrollTop : 300
            }, 500)
            return false;
    }
});

window.addEventListener('scroll',function(){
    let caret = document.querySelector('.upBtn > i')
    windowY = window.scrollY
    if(window.innerWidth >= 1021){
        if(windowY < 500){
            caret.classList.replace('fa-caret-up', 'fa-caret-down')
        } else {
            caret.classList.replace('fa-caret-down', 'fa-caret-up')
        }
    } else if(window.innerWidth <= 1020 && window.innerWidth >= 768){
        if(windowY < 486){
            caret.classList.replace('fa-caret-up', 'fa-caret-down')
        } else {
            caret.classList.replace('fa-caret-down', 'fa-caret-up')
        }
    } else{
        if(windowY < 300){
            caret.classList.replace('fa-caret-up', 'fa-caret-down')
        } else {
            caret.classList.replace('fa-caret-down', 'fa-caret-up')
        }
    }
})

//  detail설정
let body = document.querySelector("body")
let li = document.querySelectorAll('.main_content__menu_board > ul > li')
let detail_menu_list = [
    ['아무거나','Anything is Fine','./images/detail_img1.jpg',`이번에 새롭게 선보이는 모둠 플레이트를 소개합니다. 후라이드 치킨 그리고 모둠 튀김, 신선한 과일과 마른안주 및 새콤한 야채 소면을 한 번에 즐길 수 있습니다.
            이 모둠 플레이트는 다양한 맛과 식감을 제공하여 친구나 가족과 함께 나눠 먹기에 완벽합니다. 맛있는 안주를 한 번에 즐겨보세요!`,`Introducing our new assorted platter!
        You can enjoy fried chicken, an assortment of fried snacks, fresh fruit, dried snacks, and tangy vegetable noodles all in one. This assorted platter offers a variety of flavors and textures, making it perfect for sharing with friends or family. Enjoy a delicious selection of snacks all at once!`],
    ['버팔로윙&amp;포테이토', 'Buffalo Wings &amp; Potatoes','./images/detail_img2.jpg',`이 버팔로윙과 감자튀김은 군침이 도는 완벽한 조합입니다. 바삭하게 튀겨진 감자튀김 위에 잘 튀겨진 버팔로윙이 얹어져 있어 한 입 먹으면 고소함이 입안 가득 퍼집니다. 버팔로윙의 바삭한 겉껍질과 부드러운 속살이 조화를 이룹니다. 감자튀김은 바삭하면서도 부드러운 식감을 자랑하며, 버팔로윙과 함께 먹을 때 최상의 맛을 선사합니다. 전체적으로 다양한 식감과 맛이 어우러져 아주 맛있는 한 접시입니다.`,'This buffalo wings and fries are a mouth-watering combination. Crispy fries are topped with perfectly fried buffalo wings, filling your mouth with a delightful savoriness with each bite. The buffalo wings have a crunchy exterior and tender interior, creating a perfect balance. The fries boast a crispy yet soft texture, offering the best taste when paired with the wings. Altogether, the variety of textures and flavors blend into a truly delicious dish.'],
    ['초코빙수','Chocolate Bingsoo (Korean shaved ice dessert)','./images/detail_img3.jpg','이 초콜릿 빙수는 다양한 재료로 가득 채워져 있어 매우 맛있고 즐거운 디저트로 세 개의 바닐라 아이스크림 스쿱이 중심에 자리잡고 있으며, 각각 초콜릿 소스와 연유가 뿌려져 있어 달콤한 맛을 더해줍니다. 그 위에는 알록달록한 스프링클이 뿌려져 있어 눈까지 즐겁게 해줍니다. 다양한 텍스처와 맛이 어우러져 입 안에서 풍부한 맛의 조화를 이루어내는, 정말 맛있는 디저트입니다.',`This chocolate bingsu is filled with a variety of ingredients, making it a delicious and delightful dessert. Three scoops of vanilla ice cream sit at the center, each topped with chocolate sauce and condensed milk, adding a sweet flavor. Colorful sprinkles are sprinkled on top, making it visually appealing. The combination of various textures and flavors creates a rich harmony in your mouth, making it a truly delicious dessert.`],
    ['한맥','Hanmac','./images/detail_img4.jpg','한맥 맥주는 이름 그대로 한국의 맥주를 의미하는 한글 표현으로 이 맥주는 전통적인 한국의 맥주 양조 기법과 현대적인 양조 기술을 결합하여 만들어져 한국에서의 다양한 경험을 고스란히 전달해줍니다.',`Hanmaek beer, as its name suggests in Korean, represents Korean beer. This beer combines traditional Korean brewing techniques with modern brewing technology, delivering a diverse experience that encapsulates Korea's rich cultural heritage.`]
]

for(let i = 0; i < li.length; i++){ //각각의 li에 함수 추가
    li[i].addEventListener('click', function(e){
        //childNodes는 해당 요소의 자식 요소의 찾는다 반대로 parentNode는 해당 요소의 부모 요소를 찾는다.
        let temp = li[i].childNodes[1].childNodes
        if(temp[1].classList[2] == 'detail') {
            //만약 detail을 찾는다면 함수 발생
            detailBoardDisplayAction(String(temp[1].innerHTML))
        }
    })
}

function detailBoardDisplayAction(text) {
    document.querySelector('.detail_board').style.display = 'block'
    body.style.overflow='hidden'
    console.log(text)
    for(let i = 0; i < detail_menu_list.length; i++){
        if(text == detail_menu_list[i][0] || text == detail_menu_list[i][1]) {
            document.querySelector('.txt').innerHTML = detail_menu_list[i][1]
            document.querySelector('.detail_title').innerHTML = detail_menu_list[i][0]
            document.querySelector('.detail_img > img').src = detail_menu_list[i][2]
            if(languageBtn.innerHTML == 'ENG') {
                document.querySelector('.detail_desc').innerHTML = detail_menu_list[i][3]                
            } else {
                document.querySelector('.detail_desc').innerHTML = detail_menu_list[i][4]                
            }
            break;
        }
    }
}
document.querySelector(".close_btn").addEventListener('click', function() {
    document.querySelector('.detail_board').style.display = 'none'
    body.style.overflow='visible'

})
document.querySelector('html').addEventListener('click', function(e) {
    if(e.target.className == 'detail_board') {
        document.querySelector('.detail_board').style.display = 'none'
        body.style.overflow='visible'
    }
})


