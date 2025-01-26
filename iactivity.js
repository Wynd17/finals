document.addEventListener('DOMContentLoaded', function() {
    const whoAmI = document.getElementById('who-am-i');
    const hiddenText = document.getElementById('hidden-text');

    whoAmI.addEventListener('click', function() {
        hiddenText.classList.add('show');
    });
});