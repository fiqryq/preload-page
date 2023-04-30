import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';
import MouseFollower from 'mouse-follower';

// Preload images
const content = document.querySelector('section');
const imgLoad = imagesLoaded(content);

// Mouse follower
MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
  speed: 0.3,
});

imgLoad.on('done', (instance) => {
  const timeline = gsap.timeline();
  timeline.to('.loader .title', {
    y: -50,
    opacity: 0,
  });

  timeline.to('.loader', {
    scaleY: 0,
    duration: 1,
    ease: 'power4.out',
  });
});
