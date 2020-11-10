const button = document.querySelector('.btn');

const popover = document.createElement('div');
popover.className = 'popover';
popover.innerHTML = `<h3 class="header-popover">Popover title</h3>
   <p class="content-popover">And here's some amazing content. It's very engaging. Right? </p>`;
button.offsetParent.appendChild(popover);
popover.style.bottom = `${button.offsetTop + 50}px`;
popover.style.left = `${button.offsetTop + button.offsetHeight / 2}px`;
popover.style.display = 'none';

button.addEventListener('click', () => {
  if (popover.style.display === 'none') {
    popover.style.display = 'block';
    popover.classList.remove('hidden');
    popover.classList.add('active');
  } else {
    popover.style.display = 'none';
    popover.classList.remove('active');
    popover.classList.add('hidden');
  }
});
