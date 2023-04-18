function showTime() {
  var date = new Date();
  var h = date.getHours(); // get 0-23 from date
  var m = date.getMinutes(); // get 0-59 from date
  var s = date.getSeconds(); // get 0-59 from date
  var session = "AM";
  if (h == 0) {
    h = 12; // convert 0 to 12
  }
  if (h > 12) {
    h - 12; // convert 13 to 1 and add pm
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m; 
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myClockDisplay").innerHTML = time; // add function to html
  document.getElementById("myClockDisplay").textContent = time; // get function from html
  setTimeout(showTime, 1000); // set timeout exicute function
}
showTime();