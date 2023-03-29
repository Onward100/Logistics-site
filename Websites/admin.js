const toggleList = document.querySelector('.navbar-toggler');
const listGroup = document.querySelector('.navbar-collapse');

toggleList.addEventListener('click', function () {
  listGroup.classList.toggle('show');
});
