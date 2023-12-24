let slideIndex = 1; //先設預設變數為1

function showSlides(props) {
  let i;
  //取得所有的mySlides 因為他是取class 而不是id 所以要用getElementsByClassName
  let slides = document.getElementsByClassName("singleSlide");

  //如果n大於slides的長度，代表已經到最後一張，所以要從第一張開始
  if (props > slides.length) {
    slideIndex = 1;
  }

  if (props < 1) {
    slideIndex = slides.length;
  }

  //將所有圖片隱藏
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //將新的圖片顯示
  //   console.log(slideIndex - 1, 25);

  //array都從0開始，所以要減一，因為我們的slideIndex是從1開始 ，已經賦予值
  slides[slideIndex - 1].style.display = "flex";
}

function plusSlides(a) {
  showSlides((slideIndex += a));
}
//使用者點擊左右按鈕時，並傳入參數1或-1，代表下一張或上一張
plusSlides(slideIndex);

document.getElementById('showSearchBtn').addEventListener('click', function() {
  var searchContainer = document.getElementById('searchContainer');
  if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
      searchContainer.style.display = 'flex';
  } else {
      searchContainer.style.display = 'none';
  }
});

//熱銷
let left = document.querySelector('.button-left')
    let right = document.querySelector('.button-right')
    let min = document.querySelectorAll('.min')
    let images = document.querySelector('.images')

    let index=0
    let time 

    function position(){
      images.style.left = (index* -100)+ "%"
    }

    function add() {
      if(index >= min.length-1){
        index=0
      }else{
        index++
      }
    }
    function desc() {
      if(index <1){
        index = min.length-1
      }else{
        index--
      }
    }
    function timer(){
      time = setInterval(()=>{
        index++
        desc()
        add()
        position()
      },3000)
    }
    left.addEventListener('click',()=>{
      add()
      position()
      clearInterval(time)
      timer()   
    })
    right.addEventListener('click',()=>{
      add()
      position()
      clearInterval(time)
      timer()   
    })
    for(let i = 0;i<min.length;i++){
      min[i].addEventListener('click',()=>{
        index=i
        position()
        clearInterval(time)
        timer()
      })
    }
    timer()




// 熱銷商品
