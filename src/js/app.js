// let contact = document.getElementById('contactButton');


//podpięcie drugiej strony do buttona
let contact = document.querySelector("[data-href]");

contact.addEventListener('click', function () {

console.log('aaaaaa')
 window.location.href = contact.getAttribute('data-href');



})



var _btn = document.querySelector("[data-js=\"navbtn\"]");

_btn.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});




var _videoCont = document.querySelector("[data-js=\"video\"]"),
    _btnPlay = document.querySelector("[data-js=\"videoplay\"]"),
    _btnPause = document.querySelector("[data-js=\"videopause\"]"),
    _progress = document.querySelector("[data-js=\"videoprogr\"]"),
    _video = document.querySelector("[data-js=\"videoel\"]");


_btnPlay.addEventListener('click', function(){
    _videoCont.classList.add('playing');
    _video.play();
});
_btnPause.addEventListener('click', function(){
    _videoCont.classList.remove('playing');
    _video.pause();
});

_video.addEventListener('ended', function(){
    _videoCont.classList.remove('playing');
    _video.pause();
    _video.currentTime = 0;
});

_video.addEventListener('timeupdate', function(){
    //_progress.style.width = Math.ceil(_video.currentTime / _video.duration * 100) + "%";
    _progress.style.transform = "scaleX("+ _video.currentTime / _video.duration + ")";
});




// header animation

var hdrData = {
    element: document.querySelector('[data-js=header]'),
    scrollPosition: 0,
    ticking: false,
    state: 'top'
};

if( hdrData.element ){
    window.addEventListener('scroll', function onScroll(){

        hdrData.scrollPosition = window.pageYOffset;

        if (!hdrData.ticking) {
            window.requestAnimationFrame(function() {
                scrollCallback(hdrData.scrollPosition);
                hdrData.ticking = false;
            });
            hdrData.ticking = true;
        }
    });
}

function scrollCallback(position){
    //console.log("scrollCallback:", position);
    if( position > 1 ){
        if( hdrData.state !== 'moving' ){
            hdrData.state = 'moving';
            hdrData.element.classList.add('compact');
        }
    }
    else {
        if( hdrData.state !== 'top' ){
            hdrData.state = 'top';
            hdrData.element.classList.remove('compact');
        }
    }
}