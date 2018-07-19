db = require 'mongoose'

productSchema = new db.Schema({
    name: { type: String, required: true, minlength: 4 },
    price: { type: Number, required: true, min: 0 },
    url: String,
}, { timestamps: true })

db.model('Product', productSchema)
model = db.model('Product')

module.exports = {
    schema: productSchema,
    model: model
}