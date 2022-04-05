let body = document.getElementsByTagName("body");
let parent = document.createElement("div");
parent.className = "blocks";
const buttons = [
  { name: "A", sound: "" },
  { name: "S", sound: "" },
  { name: "D", sound: "" },
  { name: "F", sound: "" },
  { name: "G", sound: "" },
];

buttons.map(({ name, sound }) => {
  let block = document.createElement("div");
  block.className = "squares";
  block.id = name + "1";
  block.textContent = name;
  parent.appendChild(block);
});
document.addEventListener("keydown", function (event) {
  console.log(event);
  let id = event.key.toUpperCase();
  let sound = document.getElementById(id);
  if (sound) {
    sound.play();
    let block = document.getElementById(id + "1");
    block.classList.add("animation");
    function removeAnim() {
      block.classList.remove("animation");
    }

    setTimeout(()=> block.classList.remove("animation"), 1000);
  }
});

console.log(parent);
body[0].appendChild(parent);
