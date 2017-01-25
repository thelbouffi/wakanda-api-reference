/// <reference path="./file.d.ts" />

interface TextStream {
	/**
	 * Creates a textStream.
	 * @param file Binary text file to reference. The file does not to exist
	 * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
	 * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
	 * 
	 * ```
	 * // The file does not have to exist
	 * var myStream = TextStream( 'PROJECT/backend/my-streamed-file.js', 'write' );
	 * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	new (file: String, mode: String, charset?: Number): TextStream;
	/**
	 * Creates a textStream.
	 * @param file Binary text file to reference. The file does not to exist
	 * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
	 * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
	 * 
	 * ```
	 * // The file does not have to exist
	 * var myFile = File( 'PROJECT/backend/my-streamed-file.js' );
	 * var myStream = TextStream( file, 'write' );
	 * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	new (file: File, mode: String, charset?: Number): TextStream;
	/**
	 * Closes the file referenced in the TextStream object.
	 * 
	 * ```
	 * var myFile = File( 'PROJECT/backend/my-streamed-file.js' );
	 * var myStream = TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	close(): void;
	/**
	 * Checks if the the cursor position is after the last character of the file referenced in the TextStream object.
	 * @returns `true` if the cursor position is at the end of file, `false` otherwise.
	 * 
	 * ```
	 * var myStream = TextStream( 'PROJECT/backend/bootstrap.js', 'Read' );
	 * // Is end of file reached ?
     * while( !myStream.end() ){
	 *     console.log( myStream.read( 10 ) );
     * }
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	end(): Boolean;
	/**
	 * Saves the contents of the TextStream buffer to the disk file.
	 */
	flush(): void;
	/**
	 * Get the current cursor position in the text stream.
	 * 
	 * ```
	 * var myStream = TextStream( 'PROJECT/backend/bootstrap.js', 'Read' );
     * while( !myStream.end() ){
	 *     myStream.read( 10 );
	 *     console.log( myStream.getPos() );
	 *     // 10, 20, 30, ...
     * }
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	getPos(): Number;
	/**
	 * Get the current text stream size.
	 * 
	 * ```
	 * var myStream = TextStream( 'PROJECT/backend/bootstrap.js', 'Read' );
     * console.log( myStream.getSize() );
	 * // 183
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	getSize(): Number;
	/**
	 * Reads bytes from the text stream.
	 * @param nbBytes (default: `TextStream.getSize()`) Number of bytes to read
	 * 
	 * ```
	 * var myStream = TextStream( 'PROJECT/backend/bootstrap.js', 'Read' );
     * while( !myStream.end() ){
	 *     // Read the next 10 bytes and moves the cursor position accordingly
	 *     console.log( myStream.read( 10 ) );
     * }
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	read(nbBytes?: Number): String;
	/**
	 * Set the cursor position to the beginning of the TextStream.
	 * 
	 * ```
     * var myStream = TextStream( 'PROJECT/backend/bootstrap.js', 'Read' );
     * console.log( 'Start: '+ myStream.getPos() );
     * myStream.read(20);
     * console.log( 'After read: '+ myStream.getPos() );
     * myStream.rewind();
     * console.log( 'After rewind: '+ myStream.getPos() );
	 * // Important to close the stream every time.
     * myStream.close();
     * ```
	 */
	rewind(): void;
	/**
	 * Writes the text in the TextStream.
	 * @param text String to write in the TextStream
	 * 
	 * ```
	 * var myFile = File( 'PROJECT/backend/my-streamed-file.js' );
	 * var myStream = TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
	 * // Important to close the stream every time.
     * myStream.close();
	 * ```
	 */
	write(text: String): void;
}