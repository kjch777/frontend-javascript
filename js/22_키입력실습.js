const keys = document.querySelectorAll(".key");

function keydown(e) {
  let numSave;

  switch (e.key) {
    case "a": // case "a" 나 case "A" 나 똑같다.
      numSave = 0;
      break;
    case "s":
      numSave = 1;
      break;
    case "d":
      numSave = 2;
      break;
    case "f":
      numSave = 3;
      break;
    default:
      return;
  }

  keys[numSave].style.background = "lightblue";
  keys[numSave].style.color = "lightpink";
}

function keyup(e) {
  let numSave;

  switch (e.key) {
    case "a":
      numSave = 0;
      break;
    case "s":
      numSave = 1;
      break;
    case "d":
      numSave = 2;
      break;
    case "f":
      numSave = 3;
      break;
    default:
      return;
  }

  keys[numSave].style.background = "lightpink";
  keys[numSave].style.color = "lightblue";
}

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
