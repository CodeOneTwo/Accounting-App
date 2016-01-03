require('../DBInterface');

var Sequelize = require('sequelize');

 class pdb implements db {
     
    /* Interface relay */
    status = DBStatus.IDLE;
    createDB(dbName: string){
        return this._createDB(dbName); 
    }
    connect(dbName: string, dbUser: string, dbPassword: string){
        return this._connect(dbName, dbUser, dbPassword);
    }
    initdb(dbName: string){
        return DBErrorCode.DB_NOT_RUNNING;
    }
    createCompany(companyName: string, description: string){
        return DBErrorCode.DB_NOT_RUNNING;
    }
    createUser(userName: string, notes?: string){
        return DBErrorCode.DB_NOT_RUNNING;
    }
    addUserToCompany(companyId: number, userId:number){
        return DBErrorCode.DB_NOT_RUNNING;
    }
    
    /* implementation */
    private sq: any;
    private _createDB(dbName: string): DBErrorCode{
        var exec = require('child_process').exec;
        var child: any;
        
        var executionError: string;
        
        child = exec('sudo -u postgres createdb ' + dbName,
            function (error: string, stdout: string, stderr:string) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                    executionError = error;
                }
            } 
        );
        child();
        
        if (executionError!== null){
            return DBErrorCode.NO_RIGHT_TO_CREATE_DB;
        }
        
        return DBErrorCode.OK;
    }
    
    private _connect(dbName: string, dbUser: string, dbPassword: string): DBErrorCode {
        this.sq = new Sequelize('todo', 'postgres', 'postgres', {
            host: 'localhost',
            dialect: 'postgres',
            define: {
                freezeTableName: true,
                timestamps: true
            }
        });
        this.sq.connect();
        this.status = DBStatus.CONNECTED;
        
        return DBErrorCode.OK;
    }
}
