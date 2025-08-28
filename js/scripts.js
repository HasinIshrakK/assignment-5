hearts = document.getElementById("heart");

document.getElementById("like 1").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 2").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 3").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 4").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 5").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 6").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 7").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 8").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})
document.getElementById("like 9").addEventListener('click', function increaseHeart() {
     hearts.innerText = parseInt(hearts.innerText) + 1
})


let coins = document.getElementById("coin");
let cn = parseInt(coins.innerText);

// console.log(coins);

let hist = document.getElementById("add");

const c = document.getElementsByClassName("call");

// console.log(c);

let cs = []

for (let index = 0; index < c.length; index++) {
     const element = c[index];
     // console.log(element);
     // cs.push(element[index]);
     // let text = element.innerText;
     // console.log(text);
     element.addEventListener('click', function () {
          // console.log(987);
          if (parseInt(cn) > 0) {
               const n1 = element.parentNode.parentNode.children[0].children[1].innerText;
               const n3 = element.parentNode.parentNode.children[0].children[3].innerText;
               alert("📞 Calling" + " " + n1 + " " + n3 + "...");
               // console.log(element.parentNode.parentNode.children[0].children[1].innerText);

               cn = parseInt(cn) - 20;
               coins.innerText = cn;
               let hst1 = document.createElement("h1");
               let hst2 = document.createElement("p");
               // console.log(hst.textContent = "Hello");
               hst1.textContent = element.parentNode.parentNode.children[0].children[1].innerText;
               hst2.textContent = element.parentNode.parentNode.children[0].children[3].innerText;
               hist.appendChild(hst1);
               hist.appendChild(hst2);
          }
          else {
               alert("❌ You don't have sufficient balance. You need at least 20 coins to make a call.");
          }
     })

}

// console.log(cs);


copies = document.getElementById("copy");