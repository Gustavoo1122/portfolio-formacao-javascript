const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const acordeonIsOpen = acordeon.classList.contains('open');

        if(acordeonIsOpen) acordeon.classList.remove('open');
        else acordeon.classList.add('open');
    })
})