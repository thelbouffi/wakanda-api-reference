/// <reference path="./buffer.d.ts" />
/// <reference path="./folder.d.ts" />

interface SystemWorker {
	/**
	 * Calls a system worker (asynchronous mode).
	 * Use the system worker proxy to get the result.
	 * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
	 * @param cli Command line to execute
	 * @param options Describes command line options
	 * @returns Returns a system worker proxy
	 * 
	 * ```
	 * // Example 1: Do a simple CLI command
	 * // Launch "sh" executable with "-c" parameter and "ls -la /Volumes/MyDisk/MyFolder/MySubFolder/" as the action to do
	 * var myProxy = new SystemWorker( 'sh -c ls -la /Volumes/MyDisk/MyFolder/MySubFolder/' );
	 * 
	 * // Example 2: Get the result and display the ouput
	 * // Launch "git" executable with "--version" parameter
	 * // Store the result (Buffer) in a variable
	 * var myProxy = new SystemWorker.exec( 'git --version' );
	 * 
	 * // Example 3: Pass root folder options to the system worker
	 * var options = { folder: '/Users/yann/Desktop' };
	 * var myProxy = new SystemWorker.exec( 'sh -c ls -la', options);
	 * 
	 * // Example 4: Pass parameters, quotes and env variables options to the system worker
	 * var myFolder = new Folder( 'PROJECT/backend' );
	 * var options = {
	 *   parameters : { folder_ref : myFolder },
	 *   quote : '"',
	 *   variables : { ENV_VAR_1 : 'value1' }
	 * };
     * var myProxy = new SystemWorker.exec( ['ls -la {file_ref}'], options);
	 * ```
	 */
	new(cli: String, options?: SystemWorkerOptions) : SystemWorkerProxy;
	/**
	 * Calls a system worker (asynchronous mode).
	 * Use the system worker proxy to get the result.
	 * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
	 * @param cli Command line to execute
	 * @param options Describes command line options
	 * @returns Returns a system worker proxy
	 * 
	 * ```
	 * // Example 1: Do a simple CLI command
	 * // Launch "sh" executable with "-c" parameter and "ls -la /Volumes/MyDisk/MyFolder/MySubFolder/" as the action to do
	 * var myProxy = new SystemWorker( 'sh -c ls -la /Volumes/MyDisk/MyFolder/MySubFolder/' );
	 * 
	 * // Example 2: Get the result and display the ouput
	 * // Launch "git" executable with "--version" parameter
	 * // Store the result (Buffer) in a variable
	 * var myProxy = new SystemWorker( 'git --version' );
	 * 
	 * // Example 3: Pass root folder options to the system worker
	 * var options = { folder: '/Users/yann/Desktop' };
	 * var myProxy = new SystemWorker( 'sh -c ls -la', options);
	 * 
	 * // Example 4: Pass parameters, quotes and env variables options to the system worker
	 * var myFolder = new Folder( 'PROJECT/backend' );
	 * var options = {
	 *   parameters : { folder_ref : myFolder },
	 *   quote : '"',
	 *   variables : { ENV_VAR_1 : 'value1' }
	 * };
     * var myProxy = new SystemWorker( ['ls -la {file_ref}'], options);
	 * ```
	 */
	new(cli: String[], options?: SystemWorkerOptions): SystemWorkerProxy;
	/**
	 * Calls a system worker (asynchronous mode).
	 * Use the system worker proxy to get the result.
	 * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
	 * @param cli Command line to execute
	 * @param options Describes command line options
	 * @returns Returns the exit status, stdout and sterr
	 * 
	 * ```
	 * // Example 1: Do a simple CLI command
	 * // Launch "sh" executable with "-c" parameter and "ls -la /Volumes/MyDisk/MyFolder/MySubFolder/" as the action to do
	 * var myProxy = new SystemWorker( 'sh -c ls -la /Volumes/MyDisk/MyFolder/MySubFolder/' );
	 * 
	 * // Example 2: Get the result and display the ouput
	 * // Launch "git" executable with "--version" parameter
	 * // Store the result (Buffer) in a variable
	 * var myProxy = new SystemWorker( 'git --version' );
	 * 
	 * // Example 3: Pass root folder options to the system worker
	 * var options = { folder: '/Users/yann/Desktop' };
	 * var myProxy = new SystemWorker( 'sh -c ls -la', options);
	 * 
	 * // Example 4: Pass parameters, quotes and env variables options to the system worker
	 * var myFolder = new Folder( 'PROJECT/backend' );
	 * var options = {
	 *   parameters : { folder_ref : myFolder },
	 *   quote : '"',
	 *   variables : { ENV_VAR_1 : 'value1' }
	 * };
     * var myProxy = new SystemWorker( ['ls -la {file_ref}'], options);
	 * ```
	 */
	exec(cli: String, options?: SystemWorkerOptions) : SystemWorkerResult;
	/**
	 * Calls to system worker and waits for its response (synchronous mode).
	 * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
	 * @param cli Command line to execute. First element is the executable. Then all next elements describe the parameters
	 * @param options Describes command line options
	 * @returns Returns the exit status, stdout and sterr
	 * 
	 * ```
	 * // Example 1: Do a simple CLI command
	 * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
	 * SystemWorker.exec( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
	 * 
	 * // Example 2: Get the result and display the ouput
	 * // Launch "git" executable with "--version" parameter
	 * // Store the result (Buffer) in a variable
	 * var result = SystemWorker.exec( ['git', '--version'] );
     * console.log(result.output.toString());
	 * // git version 2.10.0
	 * 
	 * // Example 3: Pass root folder options to the system worker
	 * var options = { folder: '/Users/<user>/Desktop' };
     * var result = SystemWorker.exec( ['sh', '-c', 'ls -la'], options);
	 * console.log(result.output.toString());
	 * 
	 * // Example 4: Pass parameters, quotes and env variables options to the system worker
	 * var myFolder = new Folder( 'PROJECT/backend' );
	 * var options = {
	 *   parameters : { folder_ref : myFolder },
	 *   quote : '"',
	 *   variables : { ENV_VAR_1 : 'value1' }
	 * };
     * var result = SystemWorker.exec( ['sh', '-c', 'ls -la {folder_ref}'], options);
	 * console.log(result.output.toString());
	 * ```
	 */
	exec(cli: String[], options?: SystemWorkerOptions) : SystemWorkerResult;
}

interface SystemWorkerOptions {
	/**
	 * Root folder for the worker executable. Native relative file paths will be resolved with this folder as parent.
	 */
	folder? : String | Folder;
	/**
	 * Passes named parameters to command line. `{name}` is replaced with the value of the `options.parameters.name` attribute. Parameters can be of type String, Number, File or Folder.
	 */
	parameters? : Object;
	/**
	 * Escapes character (can be an empty string). Named parameters may need to be escaped depending on the system worker and OS on which it is executed.
	 */
	quote? : String;
	/**
	 * String data to pass to system worker.
	 */
	stdin? : String;
	/**
	 * Defines custom environment variables for the system worker
	 */
	variables? : Object;
	/**
	 * (default: `false`) `true` to terminate the process tree started by the system worker once terminated, `false` otherwise.
	 */
	kill_process_tree? : Boolean;
}

interface SystemWorkerResult {
	/**
	 * Integer value depending on the executable. If the executable considers the operation has been executed successfully, exitStatus value is `0`
	 */
	exitStatus : Number;
	/**
	 * stdout result of the command
	 */
	ouput : Buffer;
	/**
	 * stderr result of the command
	 */
	error : Buffer;
}

interface SystemWorkerProxy {
	/**
	*Callback to trigger when an error is received
	*/
	onerror: Function;
	/**
	*Callback to trigger when a message is received
	*/
	onmessage: Function;
	/**
	*Callback to trigger when the external process is terminating
	*/
	onterminated: Function;
	/**
	*closes the input stream (stdin) of the external process
	*/
	endOfInput() : void;
	/**
	*returns an object containing information about the SystemWorker
	*/
	getInfos() : Object;
	/**
	*returns the number of SystemWorker objects currently running on the server
	*/
	getNumberRunning() : Number;
	/**
	*write on the input stream (stdin) of the external process
	*/
	postMessage(stdin: String) : void;
	/**
	*write on the input stream (stdin) of the external process
	*/
	postMessage(stdin: Buffer) : void;
	/**
	*set the type of data exchanged in the SystemWorker through the onmessage and onerror properties
	*/
	setBinary(binary: Boolean) : void;
	/**
	*forces the external process to terminate its execution
	*/
	terminate(waitForTermination: Boolean, killProcessTree?: Boolean) : void;
	/**
	*allows you to set a waiting time for the SystemWorker to execute
	*/
	wait(timeout?: Number) : Boolean;
}

