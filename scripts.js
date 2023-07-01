var wheel = document.getElementById("wheel");
var spinButton = document.getElementById("spin-button");
var gift = document.getElementById("gift");
var rotation = 0;
var spinCount = 0;

spinButton.addEventListener("click", spinWheel);

function spinWheel() {
  if (spinCount === 0) {
    rotation = 0;
    wheel.style.transform = "rotate(" + rotation + "deg)";
    wheel.style.transition = "transform 1s ease-in-out";
    spinButton.textContent = "Try Again";
    spinCount++;
  } else if (spinCount >= 1) {
    gift.innerHTML = "Wait for 5 seconds your gift is arriving...";
    rotation += 720;
    wheel.style.transform = "rotate(" + rotation + "deg)";
    wheel.style.transition = "transform 5s ease";
    spinButton.textContent = "Spinning...";
    spinButton.style.pointerEvents = "none";
    setTimeout(showPrize, 5000);
    spinCount++;
  }
}

function showPrize() {
  spinButton.style.pointerEvents = "auto"; // Enable the button again
  gift.innerHTML = "Woohoo! your <b>Gift Card</b> has arrived!";

  spinButton.textContent = "Spin again";

  // Add your code here to deliver the coupon prize to the user
}
