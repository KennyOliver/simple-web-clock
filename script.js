function clockUpdate() {
  const time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  
  mins = leadingZero(mins);
  secs = leadingZero(secs);
  
  document.getElementById("clock").innerHTML = hours + ":" + mins + ":" + secs;
}

function leadingZero(num) {
  if (num < 10) {num = "0" + num;}
  return num;
}

setInterval(clockUpdate,500);