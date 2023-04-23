var img = document.querySelector(".img");
var audio = document.querySelector(".audio");

var suppermaro = document.querySelector(".suppermaro");
suppermaro.addEventListener("click", function () {
  img.src = "download (8).jfif";
  audio.src = "Super Mario Bros (NES) Music - Overworld Theme.mp3";
  audio.play();
});
var yenken = document.querySelector(".yenken");
yenken.addEventListener("click", function () {
  console.log(yenken);
  img.src = "dice-3.png";
  audio.src = "Ramy Sabry - Ymken Kher.mp3";
  audio.play();
});
var faker = document.querySelector(".faker");
faker.addEventListener("click", function () {
  console.log(faker);
  img.src = "dice-4.png";
  audio.src = "Ramy Sabry - Faker Nafsak Hedya.mp3";
  audio.play();
});
var supper = document.querySelector(".supper");
supper.addEventListener("click", function () {
  console.log(supper);
  img.src = "dice-5.png";
  audio.src = "Super Mario Bros (NES) Music - Overworld Theme.ogg";
  audio.play();
});
var playbtn = document.querySelector(".playbtn");
playbtn.addEventListener("click", function () {
  audio.play();
});
var Puasebtn = document.querySelector(".Puasebtn");
Puasebtn.addEventListener("click", function () {
  audio.pause();
});
var stopbtn = document.querySelector(".stopbtn");
stopbtn.addEventListener("click", function () {
  audio.load();
  audio.pause();
});
var mutebtn = document.querySelector(".mutebtn");
mutebtn.addEventListener("click", function () {
  audio.muted = !audio.muted;
});
var volume = document.querySelector(".volume");
volume.addEventListener("input", function () {
  var value = volume.valueAsNumber;
  audio.volume = value;
});

window.addEventListener("load", function () {
  time.max = audio.duration;
});
var time = document.querySelector(".time");
audio.addEventListener("durationchange", function () {
  time.max = audio.duration;
});
time.addEventListener("input", function () {
  audio.currentTime = time.value;
});

audio.ontimeupdate = function () {
  setTimeRang();
};
function setTimeRang() {
  time.value = audio.currentTime;
}
