const utils = require('utility')

const utilTool = {
  md5Fun(pwd) {
    return utils.md5(utils.md5(`happyPig@${pwd}pompeyy&brace`))
  }
}

module.exports = utilTool
