let iterval = setInterval(() => {
    console.log("heloo");
  }, 1000);
  
  let timeout = setTimeout(() => {
    console.log("timeout started");
  }, 3000);
  let walper = document.querySelector(".walper");
  let boll = document.createElement("div");
  let p = document.createElement("p");
  walper.appendChild(boll);
  boll.appendChild(p);
  p.classList.add("p");
  
  let count = 0;
  
  boll.classList.add("boll");
  let bolltime = setTimeout(() => {
    let bollinterval = setInterval(() => {
      count += 1;
      p.innerHTML = count;
      if (count % 2 == 0) {
        boll.style.backgroundColor = "red";
      } else {
        boll.style.backgroundColor = "green";
      }
    }, 1000);
  }, 2000);
  
  let time = document.createElement("div");
  walper.appendChild(time);
  let clock = new Date();
  
  let houercouter = document.createElement("p");
  time.appendChild(houercouter);
  let minutecouter = document.createElement("p");
  time.appendChild(minutecouter);
  
  let secendcouter = document.createElement("p");
  time.appendChild(secendcouter);
  let clock1 = setInterval(() => {
    houercouter.innerHTML = "სთ:  " + new Date().getHours();
  
    minutecouter.innerHTML = "წთ:  " + new Date().getMinutes();
    secendcouter.innerHTML = "წმ:  " + new Date().getSeconds();
  
    if (secendcouter == 59) {
      minutecouter += 1;
      secendcouter = 0;
    }
    if (minutecouter == 59) {
      houercouter += 1;
      minutecouter = 0;
    }
  }, 1000);
  console.log(clock);
  
  time.classList.add("time");