/**
 * Confetti celebration effect for puzzle completion.
 * Uses canvas-confetti library (loaded via CDN).
 * Exposes a single global function: launchConfetti()
 */
(function() {
    'use strict';

    function launchConfetti() {
        if (typeof confetti !== 'function') {
            return;
        }

        var duration = 2500;
        var end = Date.now() + duration;
        var colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#01a3a4', '#f368e0'];

        function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: colors,
                zIndex: 10000,
                disableForReducedMotion: true
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: colors,
                zIndex: 10000,
                disableForReducedMotion: true
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }

        // Initial burst from center
        confetti({
            particleCount: 80,
            spread: 100,
            origin: { y: 0.6 },
            colors: colors,
            zIndex: 10000,
            disableForReducedMotion: true
        });

        // Continuous side streams
        frame();
    }

    window.launchConfetti = launchConfetti;
})();
