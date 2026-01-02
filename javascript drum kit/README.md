# 01 - JavaScript Drum Kit

This is the first project of the Javascript30 challenge. It's a virtual drum kit where you can play different percussion sounds by pressing keys on your keyboard.

## Features
- **Keyboard interaction**: Press keys A, S, D, F, G, H, J, K, L to play sounds.
- **Visual feedback**: Buttons light up and scale down when pressed.
- **Mouse support**: You can also click the buttons to play.

## What I Learned
- **Key Events**: How to listen for `keydown` events globally on the window.
- **Audio API**: Creating `new Audio()` instances and resetting `currentTime` to 0 to allow rapid-fire playback.
- **CSS Transitions**: Using `transitionend` event in JavaScript to remove classes after an animation finishes, which is much cleaner than hardcoding a `setTimeout` to match the CSS duration.

## Optimizations
I initially used `setTimeout` to remove the `.playing` class, but realized that if I changed the CSS transition time, I'd have to update the JS too. Switching to the `transitionend` event fixed this and made the code more robust.
