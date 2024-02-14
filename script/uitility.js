function hiddenClick(hide) {
  const hideFast = document.getElementById(hide);
  hideFast.classList.add("hidden");
}

function removeClass(remove) {
  const removeCl = document.getElementById(remove);
  removeCl.classList.remove("hidden");
}

// random alphabet

function randomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const arrayConvert = alphabets.split("");
  // random number

  const randomNumber = Math.random() * 25;
  const convertIndex = Math.round(randomNumber);
  const alphabetAr = arrayConvert[convertIndex];
  return alphabetAr;
}

// key bagrouend  set

function sceBgColor(setBg) {
  const set = document.getElementById(setBg);
  set.classList.add("bg-amber-300");
}
