document.addEventListener("DOMContentLoaded", function() {
    let text = "EduSelf Academy is Coming Soon...";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
