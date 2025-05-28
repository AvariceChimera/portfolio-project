//Open the correct modal when a "trigger" image is clicked
document.querySelectorAll('.open-modal').forEach(trigger => {
    trigger.addEventListener('click', function() {
        //The ID of the modal we want to open which is stored on its respective image
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        //Protection against having multiple modals open at the same time
        document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));

        //Showing and activating the modal
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    });
});

document.querySelectorAll('.close-modal').forEach(trigger => {
    trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    })
})

//Close the correct modal when a close button is clicked