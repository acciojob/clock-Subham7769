const clock = document.getElementById("timer");
setInterval(() => {
    clock.innerHTML = new Date().toString();
}, 1000);