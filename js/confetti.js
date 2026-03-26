/**
 * Custom canvas-based confetti celebration effect for puzzle completion.
 * No external dependencies - pure vanilla JS + Canvas API.
 * Exposes a single global function: launchConfetti()
 */
(function() {
    'use strict';

    var COLORS = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#01a3a4', '#f368e0'];
    var PARTICLE_COUNT = 120;
    var DURATION = 2500;
    var GRAVITY = 0.0004;
    var DRAG = 0.02;

    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticle(x, y, angle, speed) {
        var rad = angle * Math.PI / 180;
        return {
            x: x,
            y: y,
            vx: Math.cos(rad) * speed,
            vy: Math.sin(rad) * speed,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            width: randomRange(4, 8),
            height: randomRange(2, 4),
            rotation: randomRange(0, 360),
            rotationSpeed: randomRange(-8, 8),
            opacity: 1
        };
    }

    function launchConfetti() {
        // Respect prefers-reduced-motion
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        var canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '10000';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        var ctx = canvas.getContext('2d');
        var particles = [];
        var startTime = Date.now();

        // Center burst
        var cx = canvas.width / 2;
        var cy = canvas.height * 0.5;
        for (var i = 0; i < PARTICLE_COUNT / 2; i++) {
            var angle = randomRange(200, 340);
            var speed = randomRange(0.3, 1.2);
            particles.push(createParticle(cx, cy, angle, speed));
        }

        // Side bursts
        for (var j = 0; j < PARTICLE_COUNT / 4; j++) {
            particles.push(createParticle(0, canvas.height * 0.6, randomRange(-70, -20), randomRange(0.4, 1.0)));
        }
        for (var k = 0; k < PARTICLE_COUNT / 4; k++) {
            particles.push(createParticle(canvas.width, canvas.height * 0.6, randomRange(200, 250), randomRange(0.4, 1.0)));
        }

        var lastFrame = startTime;

        function animate() {
            var now = Date.now();
            var dt = now - lastFrame;
            lastFrame = now;
            var elapsed = now - startTime;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            var fadeStart = DURATION * 0.6;
            var alive = false;

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];

                p.vy += GRAVITY * dt;
                p.vx *= (1 - DRAG);
                p.vy *= (1 - DRAG * 0.5);
                p.x += p.vx * dt;
                p.y += p.vy * dt;
                p.rotation += p.rotationSpeed;

                if (elapsed > fadeStart) {
                    p.opacity = Math.max(0, 1 - (elapsed - fadeStart) / (DURATION - fadeStart));
                }

                if (p.opacity <= 0) continue;
                alive = true;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
                ctx.restore();
            }

            if (alive && elapsed < DURATION) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(canvas);
            }
        }

        requestAnimationFrame(animate);
    }

    window.launchConfetti = launchConfetti;
})();
