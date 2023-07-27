
const myFaceImg = document.getElementById("myFaceImg");
const front = document.getElementById("Card-1");

cnt=0;

myFaceImg.addEventListener('click', e=>{
    if(cnt%2==0){
        cnt++;
        front.style.display="none";
    }else{
        cnt++
        front.style.display="flex";
    }
})