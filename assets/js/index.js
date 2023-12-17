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
