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

