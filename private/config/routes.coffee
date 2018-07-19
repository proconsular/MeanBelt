main = require '../controllers/main.coffee'
path = require 'path'

router = (server) ->
    server.get '/api/products', main.readAll
    server.get '/api/products/:id', main.readOne
    server.post '/api/products', main.create
    server.put '/api/products/:id', main.put
    server.delete '/api/products/:id', main.delete
    server.all "*", (req, res, next) ->
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    

module.exports = router