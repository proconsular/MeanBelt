main = require '../controllers/main.coffee'
path = require 'path'

router = (server) ->
    server.get '/api/pets', main.readAll
    server.get '/api/pets/:id', main.readOne
    server.post '/api/pets', main.create
    server.put '/api/pets/:id', main.put
    server.delete '/api/pets/:id', main.delete
    server.all "*", (req, res, next) ->
      res.sendFile(path.resolve("./public/dist/public/index.html"))

module.exports = router