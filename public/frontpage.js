fetch("/gettime")
.then(response => response.json())
.then(data => {
    document.getElementById("get-time-current").addEventListener("click", ()=> {    
        document.getElementById("p-tag-current-time").innerText = "current time: " + data.timeCurrent + "\n " + "todays date: " + data.dateCurrent
    })

    document.getElementById("get-time-newyork").addEventListener("click", ()=> {    
        document.getElementById("p-tag-newyork-time").innerText = "current time: " + data.timeNewYork + "\n " + "todays date: " + data.dateNewYork
    })
})

const countDownDate = new Date("May 1, 2023, 13:00:00 ").getTime();

let updateEverySecond = setInterval(function() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "t "
    + minutes + "m " + seconds + "s ";
})
    
