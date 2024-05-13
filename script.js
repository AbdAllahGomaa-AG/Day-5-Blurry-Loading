const lodiText = document.querySelector(".lodging-text");
const bg = document.querySelector(".bg");
console.log("====================================");
console.log(lodiText);
console.log("====================================");

let load = 0;
let int = setInterval(bluer, 30);

function bluer() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  lodiText.innerText = `${load}%`;
  lodiText.style.opacity = scale(load, 0, 50, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 70, 30, 0)}px)`;
}
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
