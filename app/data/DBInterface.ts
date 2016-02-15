interface db {
	
	/**
	 * connection with db established?
	 */
	status: DBStatus;
	
	/**
	 * creates a db if not already existing
	 * Needs sudo rights as cannot be done over pg.
	 * 
	 * ToDo: determine if necessary (only needed for unit-testing)
	 */
	createDB(dbName: string): DBErrorCode;
	
	/**
	 * connects to the database
	 */
	connect(dbName: string, dbUser: string, dbPassword: string): DBErrorCode;
	
	/**
	 * creates the database objects if not present
	 * does not override if already present.
	 */
	initdb(dbName: string): DBErrorCode;
	
	/**
	 * ToDo: Discuss if dbName, dbUser, dbPassword should be provided for every command, or stored in the object?
	 */
	createCompany(companyName: string, description: string): DBErrorCode;
	
	createUser(userName: string, notes?: string): DBErrorCode;
	
	/**
	 * ToDo: are username and company names unique?
	 */
	addUserToCompany(companyId: number, userId:number): DBErrorCode;
};

enum DBStatus {
	IDLE,
	CONNECTED
}

enum DBErrorCode {
	DB_ALREADY_EXISTS = -1,
	OK = 0,
	NO_RIGHT_TO_CREATE_DB,
    DB_USERNAME_NON_EXISTENT,
    DB_PASSWORD_WRONG,
    DB_NOT_RUNNING
};
