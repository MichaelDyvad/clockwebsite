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

type="text/javascript"
const months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
let tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear(), + " " + tomorrow.getTime();
 
