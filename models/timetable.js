const mongoose = require('mongoose')

const SchoolTimesSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        yesterdayDay: { type: Number, required: true },
        day: { type: Number, required: true },
        times: { type: Number, required: true },
        customTimes: {
            l1: String,
            l2: String,
            break1: String,
            l3: String,
            l4: String,
            l5: String,
            break2: String,
            l6: String,
            l7: String
        },
        customTimesActive: { type: Boolean, default: false }
	},
	{ collection: 'schoolTimetables' }
)

const model = mongoose.model('TimetableSchema', UserSchema)

module.exports = model