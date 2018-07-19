app = require './private/config/settings.coffee'
require './private/config/mongoose.coffee'
require './private/models/products.coffee'
router = require './private/config/routes.coffee'
router(app)


