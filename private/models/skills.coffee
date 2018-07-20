db = require 'mongoose'

skillSchema = new db.Schema({
    name: { type: String, required: true, minlength: 3 },
}, { timestamps: true })

db.model('Skill', skillSchema)
model = db.model('Skill')

module.exports = {
    schema: skillSchema,
    model: model
}