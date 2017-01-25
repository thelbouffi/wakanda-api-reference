///<reference path="./buffer.d.ts" />
///<reference path="./blob.d.ts" />
///<reference path="./socket.d.ts" />
///<reference path="./socketSync.d.ts" />

interface BinaryStream {
	/**
	 * Creates a new BinaryStream object.
	 * 
	 * @param binary Describes the binary to read/write.
	 * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
	 * 
	 * ```
	 * var myFile = File( 'PROJECT/backend/logs/HTTPServer.waLog' );
	 * var readstream = BinaryStream( myFile );
     * console.log( '[chunck] '+ readstream.getBuffer(1000).toString() );
	 * // Important to close the stream after every use to release the referenced file
     * readstream.close();
	 * ```
	 */
	new(binary: String, readMode?: String) : BinaryStream;
	new(binary: File, readMode?: String) : BinaryStream;
	/**
	 * Creates a new BinaryStream object.
	 * @warning BinaryStreams on sockets use buffer only data.
	 * 
	 * @param binary Describes the binary to read/write.
	 * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
	 * @param timeOut Defines the socket millisecond timeout
	 * 
	 * ```
	 * var net = require( 'net' );
	 * // Use a synchronous socket for demo
	 * var socket = net.connectSync( 25, 'smtp.gmail.com');
	 * // Create a read BinaryStrean
	 * var readstream = BinaryStream( socket, 'Read', 300 );
	 * // Create a read BinaryStrean
	 * var writestream = BinaryStream( socket, 'Write', 500 );
	 * // Get first statement from Gmail
	 * console.log( '[CONNECTED] '+ readstream.getBuffer(1000).toString() );
	 * // 220 smtp.gmail.com ESMTP y80sm15252285wrb.12 - gsmtp
	 * 
	 * // Send greetings to Gmail
	 * writestream.putBuffer( new Buffer('EHLO smtp.gmail.com\r\n') );
	 * // Get greetings from Gmail + service details
	 * console.log( '[EHLO] '+ readstream.getBuffer(1000).toString() );
	 * // 250-smtp.gmail.com at your service, [195.68.52.79]
	 * // 250-SIZE 35882577
	 * // 250-8BITMIME
	 * // 250-STARTTLS
	 * // 250-ENHANCEDSTATUSCODES
	 * // 250-PIPELINING
	 * // 250-CHUNKING
	 * // 250 SMTPUTF8
	 * // Important to close the stream after every use to release the referenced socket
	 * readstream.close();
	 * writestream.close();
	 * ```
	 */
	new(binary: Socket, readMode?: String, timeOut?: Number) : BinaryStream;
	new(binary: SocketSync, readMode?: String, timeOut?: Number) : BinaryStream;
	/**
	 * Indicates that the next reading of structured values in the BinaryStream object requires a byte swap
	 */
	changeByteOrder() : void;
	/**
	 * Closes the file referenced in the BinaryStream object
	 * 
	 * ```
	 * var myFile = File( 'PROJECT/backend/logs/HTTPServer.waLog' );
	 * var readstream = BinaryStream( myFile );
	 * // Important to close the stream after every use to release the referenced file
     * readstream.close();
	 * ```
	 */
	close() : void;
	/**
	 * Saves the buffer contents to the disk file referenced in the BinaryStream object
	 */
	flush() : void;
	/**
	 * Creates a new BLOB object containing the next sizeToRead data in the BinaryStream object
	 */
	getBlob(sizeToRead: Number) : Blob;
	/**
	 * Returns a new Buffer object containing the next sizeToRead data in the BinaryStream object
	 */
	getBuffer(sizeToRead: Number) : Buffer;
	/**
	 * Returns a number representing the next byte from the BinaryStream object
	 */
	getByte() : Number;
	/**
	 * Returns the next long number (if present) from the BinaryStream object
	 */
	getLong() : Number;
	/**
	 * Returns the next long64 number (if present) from the BinaryStream object
	 */
	getLong64() : Number;
	/**
	 * Returns the current position of the cursor in the BinaryStream object
	 */
	getPos() : Number;
	/**
	 * Returns the next real (if present) from the BinaryStream object
	 */
	getReal() : Number;
	/**
	 * Returns the size of the stream
	 */
	getSize() : Number;
	/**
	 * Returns the next string (if present) from the BinaryStream object
	 */
	getString() : String;
	/**
	 * Returns the next word, i.e., a binary integer (if present) from the BinaryStream object
	 */
	getWord() : Number;
	/**
	 * `true` if the current data reading in the BinaryStream object is in byte swap mode
	 */
	isByteSwapping() : Boolean;
	/**
	 * Writes the BLOB you passed as the blob parameter in the BinaryStream object at the current cursor location
	 */
	putBlob(blob: Blob, offset: Number, size?: Number) : void;
	/**
	 * Writes the Buffer you passed as the buffer parameter in the BinaryStream object at the current cursor location
	 */
	putBuffer(buffer: Buffer, offset: Number, size?: Number) : void;
	/**
	 * Writes the byte value you passed as the parameter in the BinaryStream object at the current cursor location
	 */
	putByte(byteValue: Number) : void;
	/**
	 * Writes the long value you passed as the parameter in the BinaryStream object at the current cursor location
	 */
	putLong(longValue: Number) : void;
	/**
	 * Writes the long64 value you passed as the parameter in the BinaryStream object at the current cursor location
	 */
	putLong64(long64Value: Number) : void;
	/**
	 * Writes the real value you passed as the parameter in the BinaryStream object at the current cursor location
	 */
	putReal(realValue: Number) : void;
	/**
	 * Writes the string value you passed as the parameter in the BinaryStream object at the current cursor location
	 */
	putString(url: String) : void;
	/**
	 * Writes the byte word (i.e., an integer value) you passed as the parameter in the BinaryStream object at the current cursor location
	 */
	putWord(wordValue: Number) : void;
	/**
	 * Moves the stream cursor to the position you passed in offset in the BinaryStream object
	 */
	setPos(offset: Number) : void;
}