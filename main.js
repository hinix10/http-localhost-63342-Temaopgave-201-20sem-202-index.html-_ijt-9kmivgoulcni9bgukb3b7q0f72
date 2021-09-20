<script>

    var menu = document.querySelectorAll('.has-dropdown');
    menu.forEach((elem) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('is-open');
    });
});

    const topBarTrigger = document.querySelector('.menu-icon a');
    const topBarContainer = document.querySelector('.top-bar');
    topBarTrigger.addEventListener('click', () => {
    topBarContainer.classList.toggle('is-open');
});

</script>
