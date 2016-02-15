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
	company_id: {
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
	user_id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'User'
	},
	note: Sequelize.STRING
});

var CompanyUsers = sq.define('companyUsers', {
	companyusers_id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
	right: Sequelize.ENUM('read', 'write')
});

User.belongsToMany(Company, {
	through: CompanyUsers
});

Company.belongsToMany(User, {
	through: CompanyUsers
});

var Account = sq.define('Account', {
	account_id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
    number: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }
});

var companyAccounts = sq.define('companyAccount', {
    companyaccounts_id: {
        type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
    }
})

Company.belongsToMany(Account, {
    through: companyAccounts,
    constraints: false
})

Account.belongsTo(Company, {
    through: companyAccounts,
    constraints: true
});

/*
var Booking = sq.define('Booking', {
	id: {
		type: Sequelize.INTEGER, 
		unique: true,
		autoIncrement: true,
		primaryKey: true
	},
    date: Sequelize.DATE,
    type: Sequelize.ENUM('user', 'auto')
});

/**/
sq.sync();

var a = User.create({
	name: 'Tobi',
	right: 'write',
	note: 'ueppa',
    email: 'abc'
});
    
Company.create({
    name: 'Company',
    type: 'important'
});	


/*
var company = Company.create({
	name: 'Company',
	type: 'important'
});

//company.setUser([user]);
*/

