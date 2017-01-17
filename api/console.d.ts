interface Console {
	/**
	 * Get logged messages
	 * ```
	 * var lastLogs = console.content.join('\n');
     * ```
	 */
	content: Array<String>;
	/**
	 * Writes message to the log file and the debugger's console with a visual "ERROR" label.
	 * @see console.log() for more details
	 */
	error(message: String, ...subst: Any[]) : void;
	error(message: Object) : void;
	/**
	 * Writes message to the log file and the debugger's console.
	 * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
	 * @param subst Substitution value
	 * ```
	 * console.log('Hello World!');
	 * // Hello World!
	 * console.log("I'm %d years old.", userAge);
	 * // I'm 20 years old.
	 * console.log('My first car was a', car, '. The object is: ', someObject);
	 * // My first car was a Toyota. The object is: { name: 'Toyota' }
	 * console.log({ str: 'Some text', id: 5 });
	 * // { str: 'Some text', id: 5 }
	 * ```
	 */
	log(message: String, ...subst: Any[]) : void;
	log(message: Object) : void;
	/**
	 * Writes message to the log file and the debugger's console with a visual "WARNING" label.
	 * @see console.log() for more details
	 */
	warn(message: String, ...subst: Any[]) : void;
	warn(message: Object) : void;
}
