window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY >0);
});

var play = document.querySelector('.watch-trailer')


function toggle() {
    var trailer = document.querySelector('.trailer')
    var video = document.querySelector('.trailer video')
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause()
}