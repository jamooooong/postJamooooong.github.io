
const myFaceImg = document.getElementById("myFaceImg");
const front = document.getElementById("Card-1");

cnt=0;

/*myFaceImg.addEventListener('click', e=>{
    if(cnt%2==0){
        cnt++;
        front.style.display="none";
    }else{
        cnt++
        front.style.display="flex";
    }
})*/

document.addEventListener("DOMContentLoaded", function() {
    // 이미지를 클릭하면 다른 페이지로 이동할 수 있도록 이벤트 리스너 추가
    const myFaceImg = document.getElementById("myFaceImg");
    myFaceImg.addEventListener("click", function() {
      // 다른 HTML 파일로 이동 (예시로 other_page.html 파일로 이동)
      window.location.href = "miniBlog.html";
    });
  });