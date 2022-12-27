let countLn =  document.getElementById("count");
let prev = document.getElementById("prev");
let count = 0;

function increment() {
    count = count + 1;
   countLn.textContent = count;
}

function save() {
    prev.textContent += count + " - ";
    countLn.textContent = 0;
    count = 0;
}