const toggleButtons = document.getElementsByClassName('toggle-button');

for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    this.classList.toggle('bg-blue-500');
    const toggleIndicator = this.querySelector('.toggle-indicator');
    toggleIndicator.classList.toggle('translate-x-full');
  });
}