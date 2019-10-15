const slideList = [{
 img: "images/img1.jpg",
 text: 'first'
},
{
 img: "images/img2.jpg",
 text: 'second'
},
{
 img: "images/img3.jpg",
 text: 'third'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots=[...document.querySelectorAll('.dots span')]
// Interfejs
let time = 3000;
let active = 0;

const changeDot= ()=> { 
const activeDot= dots.findIndex(dot=>dot.classList.contains('active'));
dots[activeDot].classList.remove('active');
dots[active].classList.add('active');
}

const keyChangeSlide=(e)=>{
    if(e.keyCode==37||e.keyCode==39) {
        e.keyCode==37 ? active--: active++;
        if (active === slideList.length) {
            active = 0;
           }
           else if (active<0) active=2

           console.log(active);
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    time=0;
    changeDot()
}
const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
changeDot();
}
setInterval(changeSlide, time);

//keyCode=37- left
//keyCode=39- right 
// window.addEventListener('keydown', keyChangeSlide);;