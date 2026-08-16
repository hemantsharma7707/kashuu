function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML = ["❤️", "💋", "💕", "💖", "💗"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.floor(Math.random() * 25 + 15) + "px";

        heart.style.animationDuration =
            Math.floor(Math.random() * 3 + 4) + "s";

        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}

// Automatically create some hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "18px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 700);