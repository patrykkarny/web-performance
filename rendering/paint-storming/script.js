const box = document.querySelector('.box');

box.addEventListener('mouseenter', () => {
  box.style.willChange = 'transform';
});

box.addEventListener('mouseleave', () => {
  box.style.willChange = 'auto';
});

box.addEventListener('click', () => {
  box.classList.toggle('move');
});

box.addEventListener('transitionend', () => {
  box.style.willChange = 'auto';
})

// $box.on('click', () => {
//   $box.animate({
//     marginLeft: '500px',
//   }, 500);
// });
