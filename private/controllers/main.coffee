db = require 'mongoose'
Pet = db.model 'Pet'

createRequest = (request, response) ->
    valid = true
    Pet.find({ name: request.body.name }).then (pets) ->
        if pets.length > 0
            valid = false
        if valid
            product = new Pet request.body
            product.save (error) ->
                if error
                    response.json error
                else
                    response.json { message: "Success" }
        else
            response.json { errors: { message: "Name already in use." } }

readAll = (request, response) ->
    Pet.find().then (data) ->
        response.json data
    .catch (errors) ->
        response.json errors

readOne = (request, response) ->
    Pet.findById(request.params.id).then (data) ->
        response.json data
    .catch (error) ->
        response.json error

replace = (request, response) ->
    valid = true
    Pet.find({ name: request.body.name }).then (pets) ->
        if pets.length > 0
            valid = false
        if valid
            Pet.findByIdAndUpdate(request.params.id, request.body,
            { runValidators: true }).then (data) ->
                response.json { message: "Success" }
            .catch (error) ->
                response.json error
        else
            response.json { errors: { message: "Name already in use." } }

deleteRequest = (request, response) ->
    Pet.findByIdAndRemove(request.params.id).then (result) ->
        response.json { message: "Success" }
    .catch (error) ->
        response.json error

module.exports = {
    readAll: readAll,
    readOne: readOne,
    create: createRequest,
    put: replace,
    delete: deleteRequest
}