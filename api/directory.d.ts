///<reference path="./connectionsession.d.ts" />
///<reference path="./connectionsessioninfo.d.ts" />
///<reference path="./user.d.ts" />
///<reference path="./group.d.ts" />

/**
 * References the directory of the application
 * 
 * ```
 * // directory is available from the global object
 * console.log(directory);
 * ```
 */

interface Directory {
	/**
	 * Create a new user session and sets it as the current session
	 * @param sessionObj Describes the session to create
	 * @param keepPreviousSession (default `false`) Set to `true` if you want to keep the previous user session, `false` if you want to expire the previous user session.
	 * 
	 * ```
	 * var cur = currentSession();
	 * console.log(cur.ID);
	 * // BF44D6E51B8FAKE485D8966ED3EDF6DD
	 * 
	 * // Create a new session and keep previous session
	 * directory.createUserSession(
	 *   {
	 *     ID: '0001000100010001000100010001000100010001',
	 *     name: 'jsmith',
	 *     fullName: 'Jennifer Smith',
	 *     belongsTo: [ 'Manager' ]
	 *   },
	 *   true
	 * );
	 * 
	 * console.log(directory.currentSession.ID);
	 * // 1E121BA4AE82446B9FDB430F0A9055C6
	 * // The new session is now the current session
	 * 
	 * var previousSession = getSession('BF44D6E51B8FAKE485D8966ED3EDF6DD');
	 * console.log(previousSession.ID);
	 * // BF44D6E51B8FAKE485D8966ED3EDF6DD
	 * // The previous session is still valid
	 * ```
	 */
	createUserSession(sessionObj: ConnectionSessionInfo, keepPreviousSession?: Boolean) : void;
	/**
	 * The current user who opened the user session
	 */
	currentUser : User;
	/**
	 * The current user session
	 */
	currentSession : ConnectionSession;
	/**
	 * Add a new group to the directory and returns it
	 * @param name Describes the group name
	 * @returns Returns the new group
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot.
	 * 
	 * ```
	 * var myNewGroup = directory.addGroup('astronauts');
	 * ```
	 */
	addGroup(name: String) : Group;
	/**
	 * Add a new user to the directory and returns it
	 * @param name Describes the user name
	 * @param password Describes the user password
	 * @param fullName Describes the user fullname
	 * @returns Returns the new user
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot.
	 * 
	 * ```
	 * var myNewUser = directory.addUser('Thomas Pesquet');
	 * ```
	 */
	addUser(name: String, password: String, fullName?: String) : User;
	/**
	* Gets the HA1 key resulting from the combination of userName, password and (optionally) realm parameters using a hash Function
	*/
	computeHA1(userName: String, password: String, realm?: String) : String;
	/**
	 * Returns all directory groups starting with `filterString`
	 * @param filterString Describe the filtering string
	 * @returns Returns an array of group
	 * 
	 * ```
	 * var myGroups = directory.filterGroups("*pers");
	 * ```
	 */
	filterGroups(filterString: String) : Array<Group>;
	/**
	 * Returns all directory users starting with `filterString`
	 * @param filterString Describe the filtering string
	 * @returns Returns an array of user
	 * 
	 * ```
	 * var myUsers = directory.filterUsers("Jo*");
	 * ```
	 */
	filterUsers(filterString: String) : Array<User>;
	/**
	*returns the local Group Object referencing the remote group with the alias (i.e. the local name) you passed in the alias parameter
    * @warning Requires LDAP component.
	*/
	/**
	 * Get an active session object from a session id
	 * @param sessionID Describes the string session id
	 * @returns Returns the session object if any
	 * 
	 * ```
	 * var previousSession = getSession('BF44D6E51B8FAKE485D8966ED3EDF6DD');
	 * ```
	 */
	getSession(sessionID: String) : ConnectionSession;
	/**
	 * Get all active user sessions
	 * @returns Returns an array of session object if any
	 * 
	 * ```
	 * // Get all active user session
	 * var sessionArray = getUserSessions();
	 * ```
	 */
	getUserSessions() : Array<ConnectionSession>;
	/**
	 * Get all active user sessions for a user ID
	 * @param userId Describes a user ID.
	 * @returns Returns an array of session object if any.
	 * 
	 * ```
	 * // Get all active user session for the current user
	 * var sessionArray = getUserSessions(currentSession().user.ID);
	 * ```
	 */
	getUserSessions(userId: String) : Array<ConnectionSession>;
	/**
	 * Get all active user sessions for a user
	 * @param user Describes a user object.
	 * @returns Returns an array of session object if any.
	 * 
	 * ```
	 * // Get all active user session for the current user
	 * var sessionArray = getUserSessions(currentSession().user);
	 * ```
	 */
	getUserSessions(user: User) : Array<ConnectionSession>;
	getRemoteGroupByAlias(alias: String) : Group;
	/**
	*returns a local Group Object referencing the remote group that corresponds to the unique Distinguished Name (DN) you passed in the dn parameter
	* @warning Requires LDAP component.
	*/
	getRemoteGroupByDN(dn: String) : Group;
	/**
	 * Gets a group from its name or ID
	 * @param name Describes the group name or ID
	 * @returns Returns the group
	 * 
	 * ```
	 * var myGroup = directory.group( "Spies" );
	 * ```
	 */
	group(name: String) : Group;
	/**
	 * Authenticates a user by their name and key and, in case of success, opens a new user Session on the server
	 * @param name Describes the user name
	 * @param key Describes a computed key associated to the user
	 * @param timeOut Defines the user session timeout (in seconds)
	 * @returns Returns `true` if authentication succeed and `false` if an error occured
	 * 
	 * ```
	 * loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9');
	 * loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9', 60*60);
	 * ```
	 */
	loginByKey(name: String, key: String, timeOut?: Number) : Boolean;
	/**
	 * Authenticates a user by their name and password and, in case of success, opens a new user Session on the server
	 * @param name Describes the user name
	 * @param password Describes the user password
	 * @param timeOut Defines the user session timeout (in seconds)
	 * @returns Returns `true` if authentication succeed and `false` if an error occured
	 * 
	 * ```
	 * loginByPassword('john', 'my-password');
	 * loginByPassword('john', 'my-password', 60*60);
	 * ```
	 */
	loginByPassword(name: String, password: String, timeOut?: Number) : Boolean;
	/**
	 * Logs out the user from its current session on the Wakanda server
	 * @returns Returns `true` if the user has been successfully logged out and `false` if an error occured
	 * 
	 * ```
	 * logout();
	 * ```
	 */
	logout() : Boolean;
	/**
	 * Saves all changes made in the directory
	 * @param backup Describes a file path for the directory backup.
	 * @returns Returns `true` if successfully saved, `false` otherwise.
	 * 
	 * ```
	 * directory.save();
	 * directory.save( 'c:/wakanda/backups/date.waDirectory' );
	 * ```
	 */
	save(backup?: String) : Boolean;
	/**
	 * Saves all changes made in the directory
	 * @param backup Describes a file for the directory backup.
	 * @returns Returns `true` if successfully saved, `false` otherwise.
	 * 
	 * ```
	 * var myFile = File( 'c:/wakanda/backups/date.waDirectory' );
	 * directory.save( myFile );
	 * ```
     */
	save(backup?: File) : Boolean;
	/**
	 * sets the session whose UUID is passed in sessionID as the new current session of the running thread
	 * @param sessionId Describes the active user session to set as current user session
	 * @param forceExpire (default: `false`) Set to `true` if the previous user session must expire, `false` otherwise. 
	 * 
	 * ```
	 * console.log(directory.currentSession.ID);
	 * // 2EA82764A075497181278B2F05DA2EDA
	 * setCurrentSession('E8CBA745124D4BE4BF7D5A224183EC8E', true);
	 * console.log(directory.currentSession.ID);
	 * // E8CBA745124D4BE4BF7D5A224183EC8E
	 * getSession('2EA82764A075497181278B2F05DA2EDA');
	 * // null
	 * // Previous session has expire
	 * ```
	 */
	setCurrentSession(sessionId: String, forceExpire?: Boolean) : void;
	/**
	 * Set a SSJS module as session manager
	 * @param modulePath Describes the module path
	 * 
	 * ```
	 * directory.setSessionManager('session'); // Refers to <project>/backend/modules/session module
	 * ```
	 * 
	 * The module must export the following methods to handle all session operations:
	 * 
	 * ```
	 * exports.readSession = function(session){
	 *   // Handle your read action here
	 *   return true; // Return true if success, false otherwise
	 * }
	 * exports.writeSession = function(session){
	 *   // Handle your write action here
	 *   return true; // Return true if success, false otherwise
	 * }
	 * exports.deleteSession =function(session){
	 *   // Handle your delete action here
	 *   return true; // Return true if success, false otherwise
	 * }
	 * ```
	 */
	setSessionManager(modulePath: String);
	/**
	 * Defines a module to manage all login requests to Wakanda Server.
	 * 
	 * ```
	 * directory.setLoginManager('my-login-module');
	 * directory.setLoginManager('my-login-module', 'myDirectoryGroup');
	 * ```
	 * 
	 * This module is defined inside `<PROJECT>/backend/modules/my-login-module` or `<SOLUTION>/modules/my-login-module`.
	 * If the module is not found in the project, it is then check inside the solution.
	 * It must export a `login()` method and return the `user` object.
	 * 
	 * ```
	 * exports.login = function(username, password){
	 *   // Verify the username/password through Directory or any other User DB
	 *   if (user) // If user is authenticated then return the user object
	 *     return {
	 *       ID: 545642165412, // Unique user ID. It must not collide with an existing Wakanda User ID from the Directory.
	 *       name: user.name,
	 *       fullName: user.fullname,
	 *       belongsTo: 'free-customer', // References the Directory group where the user belongs
	 *       storage: {} // Defines the sessionStorage property of the user session
	 *     };
	 *   }
	 *   else if (!user) // If user not authenticated then return an error
	 *   {
	 *     return {
	 *       error: 548, // Error code returned
	 *       errorMessage: 'Authentication failed. Login or Password maybe wrong.' // Error text returned
	 *     };
	 *   }
	 *   else // or continue using the standard process (with the internal directory)
	 *   {
	 *     return false;
	 *   }
	 * }
	 * ```
	 */
	setLoginManager(moduleName: String, group?: String) : void;
	/**
	 * Synchronizes the local Wakanda directory with a remote LDAP directory
	 * @warning Requires LDAP component.
	 */
	sync(remoteLDAP?: Object) : void;
	/**
	 * Gets a user from its name or ID
	 * @param name Describes the user name or ID
	 * @returns Returns the user
	 * 
	 * ```
	 * var myUser = directory.user( "Thomas Pesquet" );
	 * ```
	 */
	user(name: String) : User;
}
