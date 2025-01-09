function addEventListeners() {
    document.querySelectorAll('.plus-icon, .minus-icon').forEach(icon => {
        icon.removeEventListener('click', handleEvent); // Remove existing listeners to avoid duplicates
        icon.removeEventListener('keydown', handleEvent);
        icon.addEventListener('click', handleEvent);
        icon.addEventListener('keydown', handleEvent);
    });
}

addEventListeners();

function handleEvent(event) {
    if (event.type === 'click' || event.key === 'Enter') {
        const id = event.target.getAttribute('data-id');
        const iconContainer = document.getElementById(`icon-container-${id}`);
        const answerContainer = document.querySelector(`.answer-container[data-id="${id}"]`);
        const isExpanded = !answerContainer.classList.contains('hidden');

        iconContainer.innerHTML = isExpanded 
            ? `<img 
                  src="./assets/images/icon-plus.svg" 
                  alt="a plus icon"
                  class="plus-icon"
                  data-id="${id}" 
                  role="button"
                  tabindex="${id}" 
                  aria-pressed="false"
                  aria-expanded="false">`
            : `<img 
                  src="./assets/images/icon-minus.svg" 
                  alt="a minus icon"
                  class="minus-icon"
                  data-id="${id}" 
                  role="button"
                  tabindex="${id}" 
                  aria-pressed="true"
                  aria-expanded="true">`;

        addEventListeners(); // Re-add event listeners after updating the icons

        answerContainer.classList.toggle('hidden');
    }
}
