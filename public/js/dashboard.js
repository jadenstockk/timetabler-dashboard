function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
var list = document.getElementById('tasks');
list.addEventListener('click', function (event) {

    let element = event.target;
    if (element.tagName !== 'LI') element = event.target.parentElement;

    if (!element.classList.contains('checked')) {
        const parent = element.parentElement;
        parent.appendChild(element);

        element.classList.toggle('checked');
        new Audio('audio/check.mp3').play();

        setTimeout(() => {

            element.style.display = 'none';

            var ul = document.getElementById("tasks");
            var liNodes = [];

            for (var i = 0; i < ul.childNodes.length; i++) {
                if (ul.childNodes[i].nodeName == "LI" && ul.childNodes[i].style.display !== 'none') {
                    liNodes.push(ul.childNodes[i]);
                }
            }

            if (liNodes.length < tasks.length) {
                element.getElementsByClassName("taskTitle")[0].textContent  = tasks[liNodes.length + 1].title;
                element.getElementsByClassName("taskDate")[0].textContent  = tasks[liNodes.length + 1].due.string;

                console.log(liNodes.length, tasks);

                element.classList.toggle('checked');
                element.style.display = 'block';
                liNodes.push(element);
            }

            if (liNodes.length < 1) {
                document.getElementById('noTasksMsg').style.display = 'flex';
            }

        }, 1000);
    }
});