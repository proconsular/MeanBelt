db = require 'mongoose'
Product = db.model 'Product'

createProduct = (request, response) ->
    product = new Product request.body
    product.save (error) ->
        if error
            response.json error
        else
            response.json { message: "Success" }

readAll = (request, response) ->
    Product.find().then (data) ->
        response.json data
    .catch (errors) ->
        response.json errors

readOne = (request, response) ->
    Product.findById(request.params.id).then (data) ->
        response.json data
    .catch (error) ->
        response.json error

replace = (request, response) ->
    Product.findByIdAndUpdate(request.params.id, request.body,
    { runValidators: true }).then (data) ->
        response.json { message: "Success" }
    .catch (error) ->
        response.json error

deleteProduct = (request, response) ->
    Product.findByIdAndRemove(request.params.id).then (result) ->
        response.json { message: "Success" }
    .catch (error) ->
        response.json error

module.exports = {
    readAll: readAll,
    readOne: readOne,
    create: createProduct,
    put: replace,
    delete: deleteProduct
}