const iconContainers = document.querySelectorAll('.icon-container')

iconContainers.forEach(iconContainer => {
    iconContainer.addEventListener('click', function(e) {
        if(e.target.dataset.id) {
            handleIconClick(iconContainer, e.target.dataset.id)
        }
    })
})

function handleIconClick(iconContainer, id) {
    iconContainer.innerHTML = iconContainer.innerHTML.includes('icon-plus.svg') 
        ? `<img 
              src="./assets/images/icon-minus.svg" 
              alt="a minus icon"
              class="minus-icon"
              data-id="${id}">`
        : `<img 
              src="./assets/images/icon-plus.svg" 
              alt="a plus icon"
              class="plus-icon"
              data-id="${id}">`

    handleAnswer(id)
}

function handleAnswer(id) {
    const answerContainer = document.querySelector(`.answer-container[data-id="${id}"]`)
    answerContainer.classList.toggle('hidden')
}