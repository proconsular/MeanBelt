app = require './private/config/settings.coffee'
require './private/config/mongoose.coffee'
require './private/models/skills.coffee'
require './private/models/pets.coffee'
router = require './private/config/routes.coffee'
router(app)


