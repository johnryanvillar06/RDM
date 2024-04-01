document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
    startFireworks();
});

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

// Apply moveButton function to both mouseover and click events
document.getElementById('noBtn').addEventListener('mouseover', moveButton);
document.getElementById('noBtn').addEventListener('click', moveButton);

function startFireworks() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
