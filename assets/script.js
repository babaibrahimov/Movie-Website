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

let btn = document.getElementById('eye');
let PasswordInput = document.getElementById('password');
let body = document.querySelector('body')

let showpassword = true
btn.addEventListener('click', () => {
    
    if (PasswordInput.type === "password") {
        btn.classList.remove('ri-eye-off-line');
        btn.classList.add('ri-eye-line');
        PasswordInput.type = "text";
    } else {
        btn.classList.remove('ri-eye-line');
        btn.classList.add('ri-eye-off-line');
        PasswordInput.type = "password";
    }

})

let profileBox = document.querySelector('.profile');
let profileClose = document.getElementById('profile-close');
let user = document.getElementById('user');

function showprofile() {
    profileBox.classList.toggle('active');
}
user.addEventListener('click', () => {
    profileBox.classList.add('active')
});

profileClose.addEventListener('click', () => {
    profileBox.classList.remove('active')
});