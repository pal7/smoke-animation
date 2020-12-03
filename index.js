const ghost = document.getElementsByClassName("ghost__container")[0];
const sound = new Audio("./audio/scream.wav");

//ghost imag and sound to sync
setTimeout(() => {
  sound.load();
  sound.play();
  ghost.style.visibility = "visible";
}, 5000);

setTimeout(() => {
  ghost.style.visibility = "hidden";
}, 6500);

document.addEventListener("DOMContentLoaded", (e) => {
  const promise = document.querySelector("video").play();

  if (promise !== undefined) {
    promise
      .catch((error) => {
        console.log("Auto-play failed", error);
      })
      .then(() => {
        console.log("Auto-play started");
      });
  }
});
