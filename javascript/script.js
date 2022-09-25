var x = document.querySelector("#iletisim");
var y = document.querySelector("#degerlendir");
var btn = document.querySelector("#btn");
var btn1 = document.querySelector(".toggle-btn-1");
var btn2 = document.querySelector(".toggle-btn-2");

function button2() {
    x.style.left = "-500px";
    y.style.left = "50px";
    btn.style.left = "110px";
    btn1.style.color = "black";
    btn2.style.color = "#fff";
}

function button1() {
    x.style.left = "50px";
    y.style.left = "500px";
    btn.style.left = "0px";
    btn1.style.color = "#fff";
    btn2.style.color = "black";
}


/*-------------------blog----------------------------*/
const up = document.querySelector(".up")

window.addEventListener("scroll", function () {
    const mesafe = window.scrollY;
    if(mesafe> 300){
        up.classList.add("active")
    }
    else{
        up.classList.remove("active")
    }
})
up.addEventListener("click" , function(){
    window.scrollTo(0,0)
})

// -----------------project Details--------------------
// const nav = document.querySelector(".home-nav")

// window.addEventListener("scroll", function () {
//     const mesafe = window.scrollY;
    
//     if(mesafe> 200){
//         console.log(mesafe);
//     console.log(nav);
//        nav.style.background="white"
//     }
//     else{
//         nav.style.background="red"
//     }
// })

    