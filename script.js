const items = document.querySelector(".items");
const button = document.querySelector("button");
const result = document.querySelector(".score");

const getData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
};

let sum = 0;

button.addEventListener("mouseover", () => {
  button.style.backgroundImage =
    "linear-gradient(to bottom,hsl(252, 100%, 67%),hsl(241, 81%, 54%))";
});

function document_loaded() {
  return getData().then(data => {
    //console.log("This is the Arr", data);
    const arrLength = data.length;
    return data.map(item => {
      sum += item.score;
      items.innerHTML += `<div class="py-2 px-2.5 rounded-md flex justify-between">
      <div class="flex items-center"><img src=${item.icon} class="float-left mr-1"
          alt="">${item.category}</div>
      <p><span>${item.score}</span> / 100</p>
    </div>`;
      result.textContent = Math.floor(sum / arrLength);
    });
  });
}

document.readyState == "complete"
  ? document_loaded()
  : window.addEventListener("load", document_loaded);
