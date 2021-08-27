const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');

router.get('/', (req, res) => {
    const tasks = utils.formatTaskList([
        {
            title: 'English Excercise 1',
            date: '23 Aug 2021'
        },
        {
            title: 'Afrikaans Worksheet',
            date: '24 Aug 2021'
        },
        {
            title: 'EMS Unit 6',
            date: '22 Aug 2021'
        },
        {
            title: 'History Activity 3',
            date: '27 Aug 2021'
        },
        {
            title: 'Life Science Test',
            date: '23 Aug 2021'
        },
        {
            title: 'Physical Science Test',
            date: '1 Sep 2021'
        },
        {
            title: 'Mathematics Science Test',
            date: '2 Sep 2021'
        },
        {
            title: 'Life Skills Worksheet Excercise',
            date: '27 Aug 2021'
        }
    ]);

    const stats = utils.getStats(tasks, { subjects: ['Physical Science', 'Life Science'] });

    res.render('dashboard', {
        tasks,
        stats
    });
})

module.exports = router;