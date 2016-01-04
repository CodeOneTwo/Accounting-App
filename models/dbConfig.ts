export interface IConfig {
    user: string;
    password: string;
    database: string;
    dialect: string;
    port?: number;
    host?: string;
}

export class Config implements IConfig {
    host: string;
    user: string;
    password: string;
    port: number;
    database: string;
    dialect: string

    constructor(database: string, user: string, password: string, port = 5432, host = "localhost", dialect = "postgres"){
        this.database = database;
        this.user = user;
        this.password = password;
        this.port = port;
        this.host = host;
        this.dialect = dialect;
    }


}

export var dbCfg = new Config("todo", "postgres", "postgres");
export var Sequelize = require('sequelize');
export var sq = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, {
  host: dbCfg.host,
  dialect: 'postgres',
  define: {
		freezeTableName: true,
		timestamps: true
  }
});