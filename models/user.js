var passwordHash     = require('password-hash');
var Sequelize        = require('sequelize');

var User = Sequelize.define('User', {
  username: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
  },
	passwordHash: {
		type: Sequelize.STRING,
		validate: {
			isPasswordHash: function(value) {
        return passwordHash.isHashed((value);
			}
		}
	}
});
