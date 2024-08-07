cart = document.getElementById("cart");
let shopcard = document.querySelectorAll(".shopcard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a class="empty href="">Cart is Empty</a>'
})

shopcard.forEach(function(card){
    card.addEventListener("click",function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailcard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Trends At NZS</h1>
        <h1>Upto 50% Off ON Cloths</h1>
        <p>Lorem ispum dolor sit amet consectetur.</p>
        <p>Lorem ispum dolor sit amet consectetur</p>
        <p>Lorem ispum dolor sit amet consectetur</p>
        <p>Lorem ispum dolor sit amet consectetur</p>
        <a href="">Shop Now</a>
        </div>
        
        `
          console.log(card);
          document.querySelector("body").appendChild(div)
    })
})