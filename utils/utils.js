const spacetime = require('spacetime');

function formatTask(title, date, completed) {
    let dateObject = spacetime(date);
    let dateString = spacetime.now().year() === dateObject.year() ? dateObject.format('{day-short}, {month-short} {date}') : dateObject.format('{day-short}, {month-short} {date}, {year}');
    if (spacetime.tomorrow().time('00:00').epoch === dateObject.epoch) dateString = 'Tomorrow';
    if (spacetime.now().time('00:00').epoch === dateObject.epoch) dateString = 'Today';

    return {
        title,
        due: {
            string: dateString,
            date: date,
            object: new Date(date)
        },
        completed: completed ? completed : false
    }
}

function formatTaskList(tasks) {
    let formattedTasks = [];

    tasks.forEach(task => {
        formattedTasks.push(formatTask(task.title, task.date, task.completed ? task.completed : false));
    })

    formattedTasks = formattedTasks.sort(function (a, b) {
        return a.due.object - b.due.object;
    });;

    return formattedTasks;
}

function getStats(tasks, user) {
    let tasksSoon = [];
    let totalTasks = [];
    let completedToday = [];
    let subjects = user.subjects ? user.subjects.length : 0;

    tasks.forEach((task) => {
        if (task.due.string === 'Tomorrow' || task.due.string === 'Today') tasksSoon.push(task);
        if (!task.completed) totalTasks.push(task);
        if (task.completed && spacetime.now().time('00:00').epoch === spacetime(task.completed).epoch) completedToday.push(task);
    })

    return {
        tasks: {
            soon: tasksSoon.length,
            total: totalTasks.length,
            completedToday: completedToday.length
        },
        subjects
    }
}

module.exports = {
    formatTask,
    formatTaskList,
    getStats
}