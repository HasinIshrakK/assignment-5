// for hearts
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


// for calling
let coins = document.getElementById("coin");
let cn = parseInt(coins.innerText);


let hist = document.getElementById("add");

const c = document.getElementsByClassName("call");

for (let index = 0; index < c.length; index++) {
     const element = c[index];

     element.addEventListener('click', function () {
          if (parseInt(cn) > 0) {
               const n1 = element.parentNode.parentNode.children[0].children[1].innerText;
               const n3 = element.parentNode.parentNode.children[0].children[3].innerText;
               alert("📞 Calling" + " " + n1 + " " + n3 + "...");

               cn = parseInt(cn) - 20;
               coins.innerText = cn;
               let h = document.createElement("div");
               let hst = document.createElement("div");
               let hst0 = document.createElement("div");
               let hst1 = document.createElement("h1");
               let hst2 = document.createElement("p");
               let hst3 = document.createElement("p");
               const now = new Date();
               const time = now.toLocaleTimeString();
               h.style.backgroundColor = "rgba(211, 211, 211, 0.2)";
               h.classList.add("shundor");
               hst1.style.fontSize = "24px";
               hst1.style.fontWeight = 600;
               hst3.style.fontWeight = 500;
               hst2.style.color = "gray";
               hst1.textContent = element.parentNode.parentNode.children[0].children[1].innerText;
               hst2.textContent = element.parentNode.parentNode.children[0].children[3].innerText;
               hst3.textContent = time;
               hst0.appendChild(hst1);
               hst0.appendChild(hst2);
               hst.appendChild(hst3);
               h.appendChild(hst0);
               h.appendChild(hst);
               hist.appendChild(h);
               h.style.display = "flex";
               h.style.justifyContent = "space-between";
               h.style.alignItems = "center";
          }
          else {
               alert("❌ You don't have sufficient balance. You need at least 20 coins to make a call.");
          }
     })

}


document.getElementById("clr").addEventListener('click', function () {
     while (hist.children.length > 1) {
          hist.removeChild(hist.lastChild);
     }
})


// for copying
const copies = document.getElementById("copy");


// Warning!:The code written for copying in the upcoming lines aren't my very own effort as it was said to use ChatGPT. Those are mainly copy paste thing. I tried to understand it and understand a great part but there were some problems I faced. So, I am looking forward to get some modules on foreach, navigator, catch, error handling etc. If this line bothers you then ignore it kindly.

const cpBtns = document.querySelectorAll(".copied");

cpBtns.forEach(button => {
     button.addEventListener("click", function () {
          const card = button.closest(".card");
          const txtCp = card.querySelector(".description").innerText;
          copies.innerText = parseInt(copies.innerText) + 1;  // this line is obviously mine
          navigator.clipboard.writeText(txtCp)
               .then(() => {
                    alert("Number copied to clipboard: " + txtCp);
               })
               .catch(err => {
                    console.error("Failed to copy text: ", err);
               });
     });
});
