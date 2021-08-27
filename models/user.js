const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        subjects: { type: Array },
        timetable: { type: Object },
	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model