//listen for click
document.addEventListener('click', function (event) {

    //Bail if our clicked element doesn't have the class
    if (!event.target.classList.contains('ac-select')) return;

    // Hide url change unless you want to
    event.preventDefault();

    // Get the target content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Close if it was already open
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    // Get all open accordion content, loop through it, and close it
    var accordions = document.querySelectorAll('.ac-content.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }

    // Toggle the selected
    content.classList.toggle('active');
})