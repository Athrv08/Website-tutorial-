// Countdown Timer
function startCountdown() {
    const launchDate = new Date("June 14, 2026 00:00:00").getTime();
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const remaining = launchDate - now;

        if (remaining <= 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "We are LIVE!";
            return;
        }

        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

window.onload = startCountdown;
