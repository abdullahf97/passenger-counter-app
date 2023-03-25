let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(saveEl);
console.log(count);
console.log(countEl);

function increment() {
  count += 1;
  countEl.textContent = count;

  console.log(count);
}

function save() {
  let saveCount = count + " - ";
  saveEl.textContent += saveCount;
  countEl.textContent = 0;
  count = 0;

  console.log(count);
}
