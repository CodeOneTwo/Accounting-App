var Sequelize = require('sequelize');

var sq = new Sequelize('todo', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
		freezeTableName: true,
		timestamps: true
  }
});

var Company = sq.define('Company', {
	id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
	name: { 
		type: Sequelize.STRING,
		allowNull: false, 
		defaultValue: 'Company'
	},
	description: Sequelize.STRING
});

var User = sq.define('User', {
	id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'User'
	},
	note: Sequelize.STRING
});

sq.sync();

var CompanyUsers = sq.define('companyUsers', {
	id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
	right: {
		type: Sequelize.ENUM,
		values: ['read', 'write']
	},
});

User.belongsToMany(Company, {
	through: {
		model: CompanyUsers
	}
});

Company.belongsToMany(User, {
	through: {
		model: CompanyUsers
	}
});

sq.sync();

module.exports.user = function(){
var user = User.create({
	name: 'Tobi',
	right: 'write',
	note: 'ueppa'
})	
}

module.exports.company = function(){
var company = Company.create({
	name: 'Company',
	type: 'important'
})
}

