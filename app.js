const box = document.getElementById("ball");
box.addEventListener('mouseover',function(){
    let randomNum1 = Math.floor(Math.random() * 90) + 1;
    let randomNum2 = Math.floor(Math.random() * 90) + 1;
    box.style.top =`${randomNum1}vh`;
    box.style.left =`${randomNum2}%`;
});