db = require 'mongoose'
Skill = require './skills.coffee'

petSchema = new db.Schema({
    name: { type: String, required: true, minlength: 3 },
    type: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, minlength: 3 },
    likes: { type: Number, default: 0 }
    skills: [Skill.schema]
}, { timestamps: true })

db.model('Pet', petSchema)
model = db.model('Pet')

module.exports = {
    schema: petSchema,
    model: model
}
