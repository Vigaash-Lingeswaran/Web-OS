function updatetime()
        {
            var currentTime = new Date().toLocaleString();
            var timeText = document.querySelector("#timeElement");
            timeText.innerHTML = currentTime;
        }
    setInterval(updatetime, 1000);