
import {sq, Sequelize} from "dbConfig";

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

sq.sync();