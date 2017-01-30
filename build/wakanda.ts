

/*
 * Properties
 */
var application:Application;
// var administrator = application.administrator;
var console = application.console;
var directory = application.directory;
var ds = application.ds;
var httpServer = application.httpServer;
// var name = application.name;
// var os = application.os;
// var permissions = application.permissions;
// var process = application.process;
var sessionStorage = application.sessionStorage;
// var settings = application.settings;
// var solution = application.solution;
// var storage = application.storage;
// var wildchar = application.wildchar;
/*
 * Methods
 */
// var JSONToXml = application.JSONToXml;
var Mutex = application.Mutex;
// var ProgressIndicator = application.ProgressIndicator;
// var XmlToJSON = application.XmlToJSON;
// var addHttpRequestHandler = application.addHttpRequestHandler;
var addRemoteStore = application.addRemoteStore;
var backupDataStore = application.backupDataStore;
// var clearInterval = application.clearInterval;
// var clearTimeout = application.clearTimeout;
var close = application.close;
var compactDataStore = application.compactDataStore;
// var createUserSession = application.createUserSession;
// var currentSession = application.currentSession;
// var currentUser = application.currentUser;
// var dateToIso = application.dateToIso;
// var displayNotification = application.displayNotification;
var exitWait = application.exitWait;
// var garbageCollect = application.garbageCollect;
var generateUUID = application.generateUUID;
var getBackupRegistry = application.getBackupRegistry;
var getBackupSettings = application.getBackupSettings;
// var getFolder = application.getFolder;
// var getItemsWithRole = application.getItemsWithRole;
// var getJobManager = application.getJobManager;
var getJournalInfo = application.getJournalInfo;
var getLastBackups = application.getLastBackups;
// var getProgressIndicator = application.getProgressIndicator;
// var getSession = application.getSession;
// var getSettingFile = application.getSettingFile;
// var getURL = application.getURL;
// var getURLPath = application.getURLPath;
// var getURLQuery = application.getURLQuery;
// var getUserSessions = application.getUserSessions;
// var getWalibFolder = application.getWalibFolder;
// var importScripts = application.importScripts;
// var include = application.include;
var integrateDataStoreJournal = application.integrateDataStoreJournal;
// var isoToDate = application.isoToDate;
var loadImage = application.loadImage;
var loadText = application.loadText;
// var loginByKey = application.loginByKey;
// var loginByPassword = application.loginByPassword;
// var logout = application.logout;
var openRemoteStore = application.openRemoteStore;
// var removeHttpRequestHandler = application.removeHttpRequestHandler;
var repairDataStore = application.repairDataStore;
// var requestFileSystemSync = application.requestFileSystemSync;
var require = application.require;
var resetDataStoreJournal = application.resetDataStoreJournal;
// var resolveLocalFileSystemSyncURL = application.resolveLocalFileSystemSyncURL;
var restoreDataStore = application.restoreDataStore;
var saveText = application.saveText;
// var setCurrentSession = application.setCurrentSession;
// var setInterval = application.setInterval;
// var setTimeout = application.setTimeout;
var verifyDataStore = application.verifyDataStore;
var wait = application.wait;

/*
 * Constructors
 */
var BinaryStream = application.BinaryStream;
var Blob = application.Blob;
var Buffer = application.Buffer;
var File = application.File;
// var FileSystemSync = application.FileSystemSync;
var Folder = application.Folder;
var SharedWorker = application.SharedWorker;
var SystemWorker = application.SystemWorker;
var TextStream = application.TextStream;
// var Worker = application.Worker;
var XMLHttpRequest = application.XMLHttpRequest;


































interface Application extends Authentication, Data, Core, Threads, FileSystem, HTTP, Storage { }

interface Data {
    /**
     * Reference the datastore of the application.
     */
    ds: Datastore;
    /**
    *starts the backup of the closed datastore defined by model and data.
    */
    backupDataStore(model: File, data: File, settings: Object, options?: Object): File;
    /**
    *compacts the datastore's data file designated by model and data, and generates the compactedData data file.
    */
    compactDataStore(model: File, data: File, options?: Object, compactedData?: File): void;
    /**
    *returns an Array that lists the 20 most recent backup manifests recorded in the specified backup registry.
    */
    getBackupRegistry(registryFolder: Folder): Array<Object>;
    /**
    *returns an Object containing the default backup settings for the solution.
    */
    getBackupSettings(): Object;
    /**
    *returns information about the journal of the datastore whose data file you passed in dataFile.
    */
    getJournalInfo(dataFile: File, options?: Object): Object;
    /**
    *returns information about the journal of the datastore whose data file you passed in dataFile.
    */
    getJournalInfo(dataFile: String, options?: Object): Object;
    /**
    *returns an Array that lists the 20 most recent backup manifests recorded in the backup registry default folder of the application.
    */
    getLastBackups(): Array<Object>;
    /**
    *allows you to partially or fully integrate a journal file into a datastore.
    */
    integrateDataStoreJournal(model: File, data: File, journal: File, options?: Object): Object;
    /**
    *repairs the datastore's data file defined by model and data, and generates the repairedData data file.
    */
    repairDataStore(model: File, data: File, options?: Object, repairedData?: File): void;
    /**
    *resets the current journal of the datastore whose data file you passed in dataFile.
    */
    resetDataStoreJournal(dataFile: File): Object;
    /**
    *resets the current journal of the datastore whose data file you passed in dataFile.
    */
    resetDataStoreJournal(dataFile: String): Object;
    /**
    *allows you to restore a data folder previously archived.
    */
    restoreDataStore(manifest: File, restoreFolder: Folder, options?: Object): Object;
    /**
    *allows you to restore a data folder previously archived.
    */
    restoreDataStore(config: Object, options?: Object): Object;
    /**
    *verifies the internal structure of the objects contained in the datastore designated by model and data.
    */
    verifyDataStore(model: File, data: File, options: Object): void;
}

interface Authentication {
    /**
     * References the directory of the application.
     */
    directory : Directory;
}

interface Core {
    /**
     * References the console of the application.
     */
    console: Console;
    /**
     * References the buffer constructor.
     */
    Buffer: Buffer;
    /**
     * Create a valid UUID string.
     * 
     * ```
     * generateUUID();
     * // 9AE457F4B557BD7895AD4712345ABCDE
     * ```
     * 
     * @returns Returns a string with the generated UUID
     */
    generateUUID(): String;
    /**
     * Gets the named progress indicator object.
     */
    getProgressIndicator(name: String): ProgressIndicator;
    /**
     * Creates a progress indicator.
     * @param numElements Number of elements to count
     * @param sessionName Name of execution session for progress indicator
     * @param stoppable `true`if the progress indicator can be stopped, `false` otherwise
     * @param unused Not used, always pass an empty string ("")	
     * @param name Unique name of object on the server
     */
    ProgressIndicator(numElements: Number, sessionName?: String, stoppable?: Boolean, unused?: String, name?: String): ProgressIndicator;
}

interface Threads {
    /**
     * Ends the current thread.
     * 
     * ```
     * close();
     * ```
     */
    close(): void;
    /**
     * Exit pending `wait()` in the current thread. Does not impact pending `wait()` in other threads.
     * 
     * ```
     * exitWait();
     * ```
     */
    exitWait(): void;
    /**
     * References the node worker constructor.
     */
    NodeWorker: NodeWorker;
    /**
     * References the shared worker constructor.
     */
    SharedWorker: SharedWorker;
    /**
     * References the system worker constructor.
     */
    SystemWorker: SystemWorker;
    /**
     * References the mutex constructor.
     */
    Mutex(key: String): Mutex;
    /**
     * Require a SSJS module (CommonJS compliant).
     * This module must be defined in `PROJECT/backend/modules/`.
     * 
     * ```
     * // Get the module defined in PROJECT/backend/modules/mail
     * var mail = require('mail');
     * // Get the module defined in PROJECT/backend/modules/customers/platinium
     * var platiniumCustomers = require('/customers/platinium'); 
     * ```
     * 
     * @param moduleId Describes the module id and path
     * @returns Returns the exported API of the given module
     */
    require(moduleId: String): Module;
    /**
     * Require a NodeJS module.
     * This module must be defined in `PROJECT/backend/node_modules`.
     * 
     * ```
     * // Get the Node module defined in PROJECT/backend/node_modules/http
     * var http = requireNode('http'); 
     * ```
     * 
     * @warning This API is only available inside a Node worker (See ShareWorker for more details)
     * @param moduleId Describes the module id and path
     * @returns Returns the exported API of the given module
     */
    requireNode(moduleId: String): Module;
    /**
     * Allows a thread to handle events and to continue to exist after the complete code executes.
     * 
     * ```
     * // Wait for 100ms
     * wait(100);
     * // Wait for the end of time
     * wait();
     * ```
     * 
     * @param timeout Milliseconds to wait for. If none, it's an infinite wait. Can be squeeze with an `exitWait()`.
     */
    wait(timeout?: Number): void;
}

interface FileSystem {
    BinaryStream: BinaryStream;
    Blob: Blob;
    File: File;
    Folder: Folder;
    TextStream: TextStream;
    /**
     * Loads an image from its path.
     * 
     * ```
     * var myPict = loadImage( 'C:/images/tulips.jpg' );
     * var newPict = new ds.Pict();
      * newPict.name = 'Flower';
     * newPict.photo = myPict;
     * newPict.save();
     * ```
     * 
     * @warning The Image API is partially supported on Linux platforms:
     * - You can only load images of the PNG or JPG types
     * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
     * @param file Image path to load (POSIX path). Supports PNG and JPG files.
     * @returns Returns the image through Image object.
     */
    loadImage(file: String): Image;
    /**
     * Loads an image from a File object.
     * 
     * ```
     * var myFile = File( 'C:/images/tulips.jpg' );
     * var myPict = loadImage(myFile);
     * var newPict = new ds.Pict();
     * newPict.name = 'Flower';
     * newPict.photo = myPict;
     * newPict.save();
     * ```
     * 
     * @warning The Image API is partially supported on Linux platforms:
     * - You can only load images of the PNG or JPG types
     * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
     * @param file File object that reference an image. Supports PNG and JPG files.
     * @returns Returns the image through Image object.
     */
    loadImage(file: File): Image;
    /**
     * Loads the content of a text file from its path.
     * 
     * ```
     * var myQuote = loadText( 'c:/texts/under-the-red-sky.txt' );
     * var newSong = new ds.Quotes();
     * newSong.author = 'Bob Dylan';
     * newSong.quote = myQuote;
     * newSong.save();
     * ```
     * 
     * @param file File path to load (POSIX path).
     * @param charset (default: 7) Defines the charset to use to read the file. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     * @returns Returns a string with the full text file content.
     */
    loadText(file: String, charset?: Number): String;
    /**
     * Loads the content of a text file from a File object.
     * 
     * ```
     * var myFile = File( 'c:/texts/under-the-red-sky.txt' );
     * var myQuote = loadText( myFile );
     * var newSong = new ds.Quotes();
     * newSong.author = 'Bob Dylan';
     * newSong.quote = myQuote;
     * newSong.save();
     * ```
     * 
     * @param file File object that reference a text file.
     * @param charset (default: 7) Defines the charset to use to read the file. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     * @returns Returns a string with the full text file content.
     */
    loadText(file: File, charset?: Number): String;
    /**
     * Saves the text into a file.
     * 
     * ```
     * saveText( 'Hello World ! Here is my text saved.', 'C:/texts/chapter-1.txt' );
     * ```
     * 
     * @param textToSave Text string to save.
     * @param file File path where to update (POSIX path).
     * @param charset (default: 7) Defines the charset of the text string. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     */
    saveText(textToSave: String, file: String, charset?: Number): void;
    /**
     * Saves the text into a file.
     * 
     * ```
     * var myFile = File( 'C:/texts/chapter-1.txt' );
     * saveText( 'Hello World ! Here is my text saved.', myFile );
     * ```
     * 
     * @param textToSave Text string to save.
     * @param file File path where to update (POSIX path).
     * @param charset (default: 7) Defines the charset of the text string. See [charset values](http://doc.wakanda.org/home2.en.html#/Wakanda/0.Beta/TextStream.301-684310.en.html) for more details.
     */
    saveText(textToSave: String, file: File, charset?: Number): void;
}

interface HTTP {
    /**
     * Reference the HTTP server of the application.
     */
    httpServer: HttpServer;
    XMLHttpRequest: XMLHttpRequest;
}

interface Storage {
    /**
     * Reference the HTTP session storage of the application.
     */
    sessionStorage: LockableKeyValueStorage;
    /**
     * Reference the application storage.
     */
    storage: LockableKeyValueStorage;

}





interface BinaryStream {
    /**
     * Creates a new BinaryStream object.
     * 
     * ```
     * var myFile = File( 'PROJECT/backend/logs/HTTPServer.waLog' );
     * var readstream = BinaryStream( myFile );
     * console.log( '[chunck] '+ readstream.getBuffer(1000).toString() );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     * 
     * @param binary Describes the binary to read/write.
     * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
     */
    new (binary: String, readMode?: String): BinaryStream;
    new (binary: File, readMode?: String): BinaryStream;
    /**
     * Creates a new BinaryStream object.
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
     * 
     * @warning BinaryStreams on sockets use buffer only data.
     * @param binary Describes the binary to read/write.
     * @param readMode (default: `read`) `Write` if in write mode, `Read` otherwise.
     * @param timeOut Defines the socket millisecond timeout
     */
    new (binary: Socket, readMode?: String, timeOut?: Number): BinaryStream;
    new (binary: SocketSync, readMode?: String, timeOut?: Number): BinaryStream;
    /**
     * Indicates that the next reading of structured values in the BinaryStream object requires a byte swap
     */
    changeByteOrder(): void;
    /**
     * Closes the file referenced in the BinaryStream object.
     * 
     * ```
     * var myFile = File( 'PROJECT/backend/logs/HTTPServer.waLog' );
     * var readstream = BinaryStream( myFile );
     * // Important to close the stream after every use to release the referenced file
     * readstream.close();
     * ```
     */
    close(): void;
    /**
     * Saves the buffer contents to the disk file referenced in the BinaryStream object.
     */
    flush(): void;
    /**
     * Creates a new BLOB object containing the next sizeToRead data in the BinaryStream object.
     */
    getBlob(sizeToRead: Number): Blob;
    /**
     * Returns a new Buffer object containing the next sizeToRead data in the BinaryStream object.
     */
    getBuffer(sizeToRead: Number): Buffer;
    /**
     * Returns a number representing the next byte from the BinaryStream object.
     */
    getByte(): Number;
    /**
     * Returns the next long number (if present) from the BinaryStream object.
     */
    getLong(): Number;
    /**
     * Returns the next long64 number (if present) from the BinaryStream object.
     */
    getLong64(): Number;
    /**
     * Returns the current position of the cursor in the BinaryStream object.
     */
    getPos(): Number;
    /**
     * Returns the next real (if present) from the BinaryStream object.
     */
    getReal(): Number;
    /**
     * Returns the size of the stream.
     */
    getSize(): Number;
    /**
     * Returns the next string (if present) from the BinaryStream object.
     */
    getString(): String;
    /**
     * Returns the next word, i.e., a binary integer (if present) from the BinaryStream object.
     */
    getWord(): Number;
    /**
     * `true` if the current data reading in the BinaryStream object is in byte swap mode.
     */
    isByteSwapping(): Boolean;
    /**
     * Writes the BLOB you passed as the blob parameter in the BinaryStream object at the current cursor location.
     */
    putBlob(blob: Blob, offset: Number, size?: Number): void;
    /**
     * Writes the Buffer you passed as the buffer parameter in the BinaryStream object at the current cursor location.
     */
    putBuffer(buffer: Buffer, offset: Number, size?: Number): void;
    /**
     * Writes the byte value you passed as the parameter in the BinaryStream object at the current cursor location.
     */
    putByte(byteValue: Number): void;
    /**
     * Writes the long value you passed as the parameter in the BinaryStream object at the current cursor location.
     */
    putLong(longValue: Number): void;
    /**
     * Writes the long64 value you passed as the parameter in the BinaryStream object at the current cursor location.
     */
    putLong64(long64Value: Number): void;
    /**
     * Writes the real value you passed as the parameter in the BinaryStream object at the current cursor location.
     */
    putReal(realValue: Number): void;
    /**
     * Writes the string value you passed as the parameter in the BinaryStream object at the current cursor location.
     */
    putString(url: String): void;
    /**
     * Writes the byte word (i.e., an integer value) you passed as the parameter in the BinaryStream object at the current cursor location.
     */
    putWord(wordValue: Number): void;
    /**
     * Moves the stream cursor to the position you passed in offset in the BinaryStream object.
     */
    setPos(offset: Number): void;
}


interface Blob {
    /**
     * Creates a new blob.
     * 
     * ```
     * var myBlob = new Blob( 20 , 88, 'application/octet-stream');
     * var myString = myBlob.toString();
     * // XXXXXXXXXXXXXXXXXXXX
     * ```
     * 
     * @param size (default: 0 byte) Size of the new Blob
     * @param defaultByteValue (default: `0`) Defines the character code set as the default value to each blob byte
     * @param mimeType Defines the media type of the Blob
     */
    new (size?: Number, defaultByteValue?: Number, mimeType?: String): Blob;
    /**
     * Size of the Blob in bytes.
     */
    readonly size: number;
    /**
     * Media type of the Blob expressed as MIME or "" if unknown.
     */
    readonly type: string;
    /**
     * Copies the blob into a file.
     * 
     * #### Example 1: Copy a blob
     * ```
     * var myBlob = new Blob( 20 ); 
     * myBlob.copyTo( 'PROJECT/backend/blob_copy.js' );
     * ```
     * 
     * #### Example 2: Copy a file object
     * ```
     * // Get a file. File object can be manipulate as a Blob
     * var myFile = new File( 'PROJECT/backend/bootstrap.js' );
     * // Copy the file using the Blob api
     * myFile.copyTo( 'PROJECT/backend/bootstrap_copy.js' );
     * ```
     * 
     * @param destination Destination file
     * @param overwrite `true` to override existing file if any, `false` otherwise
     */
    copyTo(destination: String, overwrite?: Boolean): void;
    /**
     * Copies the blob into a file.
     *  
     * #### Example 1: Copy a blob
     * ```
     * var myFile = new File( 'PROJECT/backend/blob_copy.js' )
     * var myBlob = new Blob( 20 ); 
     * myBlob.copyTo( myFile );
     * ```
     * 
     * #### Example 2: Copy a file object
     * ```
     * // Get a file. File object can be manipulate as a Blob
     * var myFile = new File( 'PROJECT/backend/bootstrap.js' );
     * var myFileCopy = new File( 'PROJECT/backend/bootstrap_copy.js' );
     * // Copy the file using the Blob api
     * myFile.copyTo( myFileCopy );
     * ```
     * 
     * @param destination Destination file
     * @param overwrite `true` to override existing file if any, `false` otherwise
     */
    copyTo(destination: File, overwrite?: Boolean): void;
    /**
     * Creates a new blob by referencing the contents of the bytes of the Blob to which it is applied, from start to end.
     * 
     * #### Example 1: Slice a blob
     * ```
     * var myBlob = new Blob( 20 , 88, 'application/octet-stream' );
     * console.log( myBlob.toString() );
     * // XXXXXXXXXXXXXXXXXXXX
     * var mySlicedBlob = myBlob.slice( 5, 10 );
     * console.log( mySlicedBlob.toString() );
     * // XXXXX
     * ```
     * 
     * #### Example 2: Slice a blob
     * ```
     * var myBlob = new Blob( 20 , 88, 'application/octet-stream' );
     * console.log( myBlob.toString() );
     * // XXXXXXXXXXXXXXXXXXXX
     * var mySlicedBlob = myBlob.slice( 0, -5 );
     * console.log( mySlicedBlob.toString() );
     * // XXXXXXXXXXXXXXX
     * ```
     * 
     * #### Example 3: Slice a file
     * ```
     * var myFile = File( 'PROJECT/backend/bootstrap.js' );
     * var myBlobSlice = myFile.slice( 0, 100 );
     * console.log( myBlobSlice.toString() );
     * ```
     * 
     * @param start (default: 0)
     * @param end (default: blob.size)
     * @param mimeType
     */
    slice(start?: Number, end?: Number, mimeType?: String): Blob;
    /**
     * Returns a buffer object containing a copy of the blob bytes.
     */
    toBuffer(): Buffer;
    /**
     * Get a string representation of the blob contents.
     */
    toString(stringFormat?: String): String;
}


interface Buffer {
    /**
     * Creates a new buffer.
     * 
     * ```
     * var myBufferInstance = new Buffer( 16*1024 );
     * var myBufferInstance = new Buffer( 16*1024, 'utf8' );
     * ```
     * 
     * @param size The number of bytes to allocate for the buffer
     * @param encoding (default: `utf8`) Encoding available: `ascii`, `utf8`, `ucs2`, `hex`, `base64`
     */
    new (size: Number, encoding?: String): BufferInstance;
    /**
     * Returns the string byte length.
     * Byte length may change depending of the encoding type.
     * 
     * ```
     * var myByteLength = Buffer.byteLength( 'Hello Buffer World !' );
     * console.log(myByteLength);
     * // 20
     * ```
     * 
     * @param str String to evaluate
     * @param encoding (default: `utf8`) Encoding available: `ascii`, `utf8`, `ucs2`, `hex`, `base64`
     */
    byteLength(str: String, encoding?: String): Number;
    /**
     * Checks if the object is a buffer.
     * 
     * #### Example 1: Is my string a buffer ?
     * ```
     * var isBuffer = Buffer.isBuffer( 'Hello Buffer World !' );
     * console.log( isBuffer );
     * // false
     * ```
     * 
     * #### Example 2: Is my blob a buffer ?
     * ```
     * var myBlob = new Blob();
     * var isBuffer = Buffer.isBuffer( myBlob );
     * console.log( isBuffer );
     * // false
     * ```
     * 
     * #### Example 3: Is my buffer a buffer ?
     * ```
     * var myBuffer = new Buffer( '20' );
     * var isBuffer = Buffer.isBuffer( myBuffer );
     * console.log( isBuffer );
     * // true
     * ```
     * 
     * @param obj Object to evaluate
     * @returns Returns `true` is the object is a buffer, `false` otherwise
     */
    isBuffer(obj: any): Boolean;
}

interface BufferInstance {
    /**
     * Number of bytes of the buffer.
     */
    readonly length: Number;
    /**
     * Copies the current buffer into the target buffer.
     * 
     * ```
     * b1 = new Buffer(26);
     * b2 = new Buffer(26);
     * for (var i = 0 ; i < 26 ; i++) {
     *   b1[i] = i + 65; // 65 is "A" character in UTF8
     *   b2[i] = 42; // 42 is "*"
     * }
     * b1.copy(b2, 6, 8, 22);
     * b2.toString('utf8', 0, 26);
     * ```
     * 
     * @param targetBuffer Defines the buffer where to copy the data
     * @param targetOffset (default: 0) Byte offset where to start writing the data
     * @param sourceOffset (default: 0) Byte offset where to start reading the data
     * @param sourceEnd (default: buffer.length) Byte offset where to end reading the data
     */
    copy(targetBuffer: Buffer, targetOffset?: Number, sourceOffset?: Number, sourceEnd?: Number): void;
    /**
     * Fills the Buffer to which it is applied with the character you passed in value.
     */
    fill(value: String, offset?: Number, length?: Number): void;
    /**
     * Creates a new Buffer object by referencing the contents of the bytes array of the Buffer to which it is applied, from start to end.
     */
    slice(start: Number, end?: Number): Buffer;
    /**
     * Returns a Blob object containing a copy of the Buffer bytes.
     */
    toBlob(mimeType?: String): Blob;
    /**
     * Converts the buffer contents into a string.
     */
    toString(encoding: String, start?: Number, end?: Number): String;
    /**
     * Writes the string parameter to the Buffer at the offset position and returns the number of bytes written.
     */
    write(string: String, offset?: Number, encoding?: String): Number;
    /**
     * Returns a 64 bit double value read from the Buffer with the Big Endian format.
     */
    readDoubleBE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 64 bit double value read from the Buffer with the Little Endian format.
     */
    readDoubleLE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 32-bit float value read from the Buffer with the Big Endian format.
     */
    readFloatBE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a 32-bit float value read from the Buffer with the Little Endian format.
     */
    readFloatLE(offset: Number, noAssert: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt16BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 16-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt16LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 24-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt24BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 24-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt24LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 32-bit integer value read from the Buffer with the Big Endian format.
     */
    readInt32BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 32-bit integer value read from the Buffer with the Little Endian format.
     */
    readInt32LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns a signed 8-bit integer value read from the Buffer to which it is applied.
     */
    readInt8(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt16BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 16-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt16LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 24-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt24BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 24-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt24LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 32-bit integer value read from the Buffer with the Big Endian format.
     */
    readUInt32BE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 32-bit integer value read from the Buffer with the Little Endian format.
     */
    readUInt32LE(offset: Number, noAssert?: Boolean): Number;
    /**
     * Returns an unsigned 8-bit integer value read from the Buffer to which it is applied.
     */
    readUInt8(offset: Number, noAssert?: Boolean): Number;
    /**
     * Writes the 64-bit double value to the Buffer with the Big Endian format.
     */
    writeDoubleBE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 64-bit double value to the Buffer with the Little Endian format.
     */
    writeDoubleLE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit float value to the Buffer with the Big Endian format.
     */
    writeFloatBE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit float value to the Buffer with the Little Endian format.
     */
    writeFloatLE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt16BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt16LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt24BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt24LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit signed integer value to the Buffer with the Big Endian format.
     */
    writeInt32BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit signed integer value to the Buffer with the Little Endian format.
     */
    writeInt32LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 8-bit signed integer value to the Buffer to which it is applied.
     */
    writeInt8(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt16BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 16-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt16LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt24BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 24-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt24LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit unsigned integer value to the Buffer with the Big Endian format.
     */
    writeUInt32BE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 32-bit unsigned integer value to the Buffer with the Little Endian format.
     */
    writeUInt32LE(value: Number, offset: Number, noAssert?: Boolean): void;
    /**
     * Writes the 8-bit unsigned integer value to the Buffer to which it is applied.
     */
    writeUInt8(value: Number, offset: Number, noAssert?: Boolean): void;
}


interface ConnectionSession {
    /**
     * Describes the session expiration date.
     */
    expiration: Date;
    /**
     * Describes the session internal ID.
     */
    ID: String;
    /**
     * Describes the session lifetime (default: 3600 seconds).
     */
    lifeTime: Number;
    /**
     * Describes the user session storage.
     */
    storage: KeyValueStorage;
    /**
     * Describes the session user.
     */
    user: User;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group name
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: String): Boolean;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group object
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: Group): Boolean;
    /**
     * Check if the current session belongs to the group.
     * @returns `true` if the session belongs to the group, throws an error otherwise.
     * @throws An error if the session does not belongs to the group
     */
    checkPermission(group: String): Boolean;
    /**
     * Check if the current session belongs to the group.
     * @returns `true` if the session belongs to the group, throws an error otherwise.
     * @throws An error if the session does not belongs to the group
     */
    checkPermission(group: Group): Boolean;
    /**
     * Expires the user session.
     */
    forceExpire(): void;
    /**
     * Temporarily promotes the current session into the group.
     */
    promoteWith(group: Group): Number;
    /**
     * Temporarily promotes the current session into the group.
     */
    promoteWith(group: String): Number;
    /**
     * Stops the temporary promotion set for the current session using the `promoteWith()` method.
     */
    unPromote(token: Number): void;
}

interface ConnectionSessionInfo {
    /**
     * UUID String referencing the user. It can be any ID but must not be an existing user ID.
     */
    ID: String;
    /**
     * Username of the User.
     */
    name: String;
    /**
     * Full Name of the User.
     */
    fullName?: String;
    /**
     * Array of UUID strings or Array of group names referencing the groups the user must belong to.
     */
    belongsTo?: String[];
    /**
     * Defines the session storage property of the user session.
     */
    storage?: KeyValueStorage;
    /**
     * Defines the session time to live for the user session.
     */
    lifeTime?: Number;
}interface Console {
    /**
     * Get logged messages.
     * 
     * ```
     * var lastLogs = console.content.join('\n');
     * ```
     */
    content: Array<String>;
    /**
     * Writes message to the log file and the debugger's console with a visual "ERROR" label.
     * @see console.log() for more details
     */
    error(message: String, ...subst: any[]): void;
    error(message: Object): void;
    /**
     * Writes message to the log file and the debugger's console.
     * 
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
     * 
     * @param message Message to log. Can use the following substitution strings: %o, %s, %d, %i, %f.
     * @param subst Substitution value
     */
    log(message: String, ...subst: any[]): void;
    log(message: Object): void;
    /**
     * Writes message to the log file and the debugger's console with a visual "WARNING" label.
     * @see console.log() for more details
     */
    warn(message: String, ...subst: any[]): void;
    warn(message: Object): void;
}


interface Datastore {

	/**
	*Collection of available datastore classes
	*/
	dataClasses: DatastoreClassEnumerator;
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*flushes the data cache to disk
	*/
	flushCache() : void;
	/**
	*returns the size of memory used by the datastore cache (in bytes)
	*/
	getCacheSize() : Number;
	/**
	*returns a reference, Folder, to the folder containing the datastore data file
	*/
	getDataFolder() : Folder;
	/**
	*allows you to get detailed information about Wakanda database engine events
	*/
	getMeasures(options?: Object) : Object;
	/**
	*returns a reference, Folder, to the folder containing the datastore model file
	*/
	getModelFolder() : Folder;
	/**
	*returns the name of the current datastore
	*/
	getName() : String;
	/**
	*returns a Folder type reference to the datastore "temporary files" folder
	*/
	getTempFolder() : Folder;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: Folder) : void;
	/**
	*looks for any "ghost" tables in the data file of your application and adds the corresponding datastore classes to the loaded model
	*/
	revealGhostTables() : void;
	/**
	*increase dynamically the datastore cache size
	*/
	setCacheSize(newSize: Number) : void;
}



interface DatastoreClass {
/**
	*Collection of available attributes
	*/
	attributes: AttributeEnumerator;
	/**
	*Number of entities in the datastore class
	*/
	length: Number;
	/**
	*returns an object of type EntityCollection containing all the entities in the datastore class to which it was applied
	*/
	all() : EntityCollection;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: String) : Number;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: String) : Object;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: String) : Number;
	/**
	*creates a new blank object of type Entity based on the datastore class to which it is applied
	*/
	createEntity() : Entity;
	/**
	*creates a new blank object of type EntityCollection attached to the datastore class to which it is applied
	*/
	createEntityCollection(keepSorted?: String) : EntityCollection;
	/**
	*creates a new blank object of type EntityCollection attached to the datastore class to which it is applied
	*/
	createEntityCollection(keepSorted?: Boolean) : EntityCollection;
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute) : any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String) : any[];
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*applies the search criteria specified in queryString and (optionally) value to all the entities of the DatastoreClass or EntityCollection and returns the first entity found in an object of type Entity
	*/
	find(queryString: String, ...valueList: any[]) : Entity;
	/**
	*returns the entity in the first position of the entity collection or datastore class
	*/
	first() : Entity;
	/**
	*executes the callbackFn function on each entity in the entity collection in ascending order
	*/
	forEach(callbackFn: Function) : void;
	/**
	*generates entities in the datastore class where it is applied and returns the resulting entity collection
	*/
	fromArray(arrayValues: any[]) : EntityCollection;
	/**
	*returns the percentage of logical fragmentation for the entities of the datastore class
	*/
	getFragmentation() : Number;
	/**
	*returns the name of the datastore class to which it is applied in a string
	*/
	getName() : String;
	/**
	*returns the current scope property value of the datastore class
	*/
	getScope() : String;
	/**
	*imports all the entities stored in JSON format from the file(s) located in the importFolder folder
	*/
	importFromJSON(importFolder: Folder) : void;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: String) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: String) : Number;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: String, sortOrder?: String) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	/**
	*permanently removes entities from the datastore
	*/
	remove() : void;
	/**
	*(re)sets the start value for the autosequence number of the datastore class
	*/
	setAutoSequenceNumber(counter: Number) : void;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: String) : Number;
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number) : any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number) : any[];
	/**
	*returns the name of the datastore class as a string
	*/
	toString() : String;
}

interface AttributeEnumerator{
	
}

interface AttributeEnumerator {
    [attributeName: string]: DatastoreClassAttribute;
}

interface DatastoreClassEnumerator {
    [dataClassName: string]: DatastoreClass;
}


interface Entity {
/**
	*returns the datastore class (object of the DatastoreClass type) of the entity
	*/
	getDataClass() : DatastoreClass;
	/**
	*returns the timestamp of the last save of the entity to which it is applied
	*/
	getTimeStamp() : Date;
	/**
	*returns True or False depending on whether the entity iterator points to an entity that is currently loaded in memory
	*/
	isLoaded() : Boolean;
	/**
	*returns True or False depending on whether the entity to which it is applied has been modified since the last time it was loaded from the datastore
	*/
	isModified() : Boolean;
	/**
	*returns True or False depending on whether the entity to which it is applied has just been created in the datastore
	*/
	isNew() : Boolean;
	/**
	*puts the entity pointer on the next entity within an iteration of entities
	*/
	next() : Entity;
	/**
	*reloads the entity as it is stored in the datastore
	*/
	refresh() : void;
	/**
	*releases the entity from memory
	*/
	release() : void;
	/**
	*removes the entity from the datastore
	*/
	remove() : void;
	/**
	*saves the changes made to the entity in the datastore
	*/
	save() : void;
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}


interface EntityCollection {
	/**
	*Number of entities in the entity collection
	*/
	length: Number;
	/**
	*Description of the query as it was actually performed
	*/
	queryPath: String;
	/**
	*Description of the query just before it is executed
	*/
	queryPlan: String;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: EntityCollection, atTheEnd?: String) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: EntityCollection, atTheEnd?: Boolean) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: Entity, atTheEnd?: String) : void;
	/**
	*adds the entity or entity collection passed in the toAdd parameter to the entity collection
	*/
	add(toAdd: Entity, atTheEnd?: Boolean) : void;
	/**
	*compares the entity collection to which it is applied and the collection2 and returns a new entity collection that contains only the entities that are referenced in both collections
	*/
	and(collection2: EntityCollection) : EntityCollection;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	*/
	average(attribute: String, distinct?: String) : Number;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: Boolean) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, distinct?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: String) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: DatastoreClassAttribute) : Object;
	/**
	*performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	*/
	compute(attribute: String, groupBy?: String) : Object;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: String) : Number;
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String): any[];
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: Folder, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*applies the search criteria specified in queryString and (optionally) value to all the entities of the DatastoreClass or EntityCollection and returns the first entity found in an object of type Entity
	*/
	find(queryString: String, ...valueList: any[]) : Entity;
	/**
	*returns the entity in the first position of the entity collection or datastore class
	*/
	first() : Entity;
	/**
	*executes the callbackFn function on each entity in the entity collection in ascending order
	*/
	forEach(callbackFn: Function) : void;
	/**
	*returns the datastore class (object of the DatastoreClass type) of the entity collection
	*/
	getDataClass() : DatastoreClass;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: String) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: String) : Number;
	/**
	*excludes from the entity collection to which it is applied the entities that are in the collection2 and returns the resulting entity collection
	*/
	minus(collection2: EntityCollection) : EntityCollection;
	/**
	*creates a new entity collection that contains all the entities from the entity collection to which it is applied and all the entities from the collection2 entity collection
	*/
	or(collection2: EntityCollection) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: String, sortOrder?: String) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	/**
	*permanently removes entities from the datastore
	*/
	remove() : void;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: String) : Number;
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}

interface DatastoreClassAttribute extends String {
	
}




interface Directory {
    /**
     * Create a new user session and sets it as the current session.
     * 
     * ```
     * var cur = currentSession();
     * console.log( cur.ID );
     * // BF44D6E51B8FAKE485D8966ED3EDF6DD
     * 
     * // Create a new session and keep previous session
     * directory.createUserSession(
     *     {
     *         ID: '0001000100010001000100010001000100010001',
     *         name: 'jsmith',
     *         fullName: 'Jennifer Smith',
     *         belongsTo: [ 'Manager' ]
     *     },
     *     true
     * );
     * 
     * console.log( directory.currentSession.ID );
     * // 1E121BA4AE82446B9FDB430F0A9055C6
     * // The new session is now the current session
     * 
     * var previousSession = getSession( 'BF44D6E51B8FAKE485D8966ED3EDF6DD' );
     * console.log( previousSession.ID );
     * // BF44D6E51B8FAKE485D8966ED3EDF6DD
     * // The previous session is still valid
     * ```
     * 
     * @param sessionObj Describes the session to create
     * @param keepPreviousSession (default `false`) Set to `true` if you want to keep the previous user session, `false` if you want to expire the previous user session.
     * 
     */
    createUserSession(sessionObj: ConnectionSessionInfo, keepPreviousSession?: Boolean): void;
    /**
     * The current user who opened the user session.
     */
    currentUser: User;
    /**
     * The current user session.
     */
    currentSession: ConnectionSession;
    /**
     * Add a new group to the directory and returns it.
     * 
     * ```
     * var myNewGroup = directory.addGroup( 'astronauts' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param name Describes the group name
     * @returns Returns the new group
     */
    addGroup(name: String): Group;
    /**
     * Add a new user to the directory and returns it.
     * 
     * ```
     * var myNewUser = directory.addUser( 'Thomas Pesquet' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param name Describes the user name
     * @param password Describes the user password
     * @param fullName Describes the user fullname
     * @returns Returns the new user
     */
    addUser(name: String, password: String, fullName?: String): User;
    /**
    * Gets the HA1 key resulting from the combination of userName, password and (optionally) realm parameters using a hash Function.
    */
    computeHA1(userName: String, password: String, realm?: String): String;
    /**
     * Returns all directory groups starting with `filterString`.
     * 
     * ```
     * var myGroups = directory.filterGroups( '*pers' );
     * ```
     * 
     * @param filterString Describe the filtering string
     * @returns Returns an array of group
     */
    filterGroups(filterString: String): Array<Group>;
    /**
     * Returns all directory users starting with `filterString`.
     * 
     * ```
     * var myUsers = directory.filterUsers("Jo*");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @returns Returns an array of user
     */
    filterUsers(filterString: String): Array<User>;
    /**
     * Get an active session object from a session id.
     * 
     * ```
     * var previousSession = getSession( 'BF44D6E51B8FAKE485D8966ED3EDF6DD' );
     * ```
     * 
     * @param sessionID Describes the string session id
     * @returns Returns the session object if any
     */
    getSession(sessionID: String): ConnectionSession;
    // /**
    //  * Get all active user sessions.
    //  * 
    //  * ```
    //  * // Get all active user session
    //  * var sessionArray = getUserSessions();
    //  * ```
    //  * 
    //  * @returns Returns an array of session object if any
    //  */
    // getUserSessions(): Array<ConnectionSession>;
    // /**
    //  * Get all active user sessions for a user ID.
    //  * 
    //  * ```
    //  * // Get all active user session for the current user
    //  * var sessionArray = getUserSessions( currentSession().user.ID );
    //  * ```
    //  * 
    //  * @param userId Describes a user ID.
    //  * @returns Returns an array of session object if any.
    //  */
    // getUserSessions(userId: String): Array<ConnectionSession>;
    // /**
    //  * Get all active user sessions for a user.
    //  * 
    //  * ```
    //  * // Get all active user session for the current user
    //  * var sessionArray = getUserSessions( currentSession().user );
    //  * ```
    //  * 
    //  * @param user Describes a user object.
    //  * @returns Returns an array of session object if any.
    //  */
    // getUserSessions(user: User): Array<ConnectionSession>;
    /**
     * Returns the local Group Object referencing the remote group with the alias (i.e. the local name) you passed in the alias parameter.
     * @warning Requires LDAP component.
     */
    getRemoteGroupByAlias(alias: String): Group;
    /**
     * returns a local Group Object referencing the remote group that corresponds to the unique Distinguished Name (DN) you passed in the dn parameter.
     * @warning Requires LDAP component.
     */
    getRemoteGroupByDN(dn: String): Group;
    /**
     * Gets a group from its name or ID.
     * 
     * ```
     * var myGroup = directory.group( 'Spies' );
     * ```
     * 
     * @param name Describes the group name or ID
     * @returns Returns the group
     */
    group(name: String): Group;
    /**
     * Authenticates a user by their name and key and, in case of success, opens a new user Session on the server.
     * 
     * ```
     * loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9');
     * loginByKey('john', '6153A6FA0E4880D9B8D0BE4720F78E895265D0A9', 60*60);
     * ```
     * 
     * @param name Describes the user name
     * @param key Describes a computed key associated to the user
     * @param timeOut Defines the user session timeout (in seconds)
     * @returns Returns `true` if authentication succeed and `false` if an error occured
     */
    loginByKey(name: String, key: String, timeOut?: Number): Boolean;
    /**
     * Authenticates a user by their name and password and, in case of success, opens a new user Session on the server.
     * 
     * ```
     * loginByPassword('john', 'my-password');
     * loginByPassword('john', 'my-password', 60*60);
     * ```
     * 
     * @param name Describes the user name
     * @param password Describes the user password
     * @param timeOut (seconds) Defines the user session timeout
     * @returns Returns `true` if authentication succeed and `false` if an error occured
     */
    loginByPassword(name: String, password: String, timeOut?: Number): Boolean;
    /**
     * Logs out the user from its current session on the Wakanda server.
     * 
     * ```
     * logout();
     * ```
     * 
     * @returns Returns `true` if the user has been successfully logged out and `false` if an error occured
     */
    logout(): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```
     * directory.save();
     * directory.save( 'PROJECT/backups/2016-01-01.waDirectory' );
     * ```
     * 
     * @warning Destination file must exist
     * @param backup Describes a file path for the directory backup.
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(backup?: String): Boolean;
    /**
     * Saves all changes made in the directory.
     * 
     * ```
     * var myFile = File( 'PROJECT/backups/2016-01-01.waDirectory' );
     * directory.save( myFile );
     * ```
     * 
     * @warning Destination file must exist
     * @param backup Describes a file for the directory backup.
     * @returns Returns `true` if successfully saved, `false` otherwise.
     */
    save(backup?: File): Boolean;
    /**
     * Sets the session whose UUID is passed in sessionID as the new current session of the running thread.
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
     * 
     * @param sessionId Describes the active user session to set as current user session
     * @param forceExpire (default: `false`) Set to `true` if the previous user session must expire, `false` otherwise. 
     */
    setCurrentSession(sessionId: String, forceExpire?: Boolean): void;
    /**
     * Handles and manages sessions through a SSJS module.
     * 
     * ```
     * // Usually defined in a boostrap file
     * directory.setSessionManager( 'session' );
     * // Refers to PROJECT/backend/modules/session/index.js module
     * ```
     * 
     * The module must export the following methods to handle all session operations:
     * 
     * ```
     * // PROJECT/backend/modules/session/index.js
     * // This session manager saves all session in the storage (could be a Redis instead)
     * 
     * // Called everytime the server creates or updates a session
     * exports.writeSession = function( session ){
     *     // Handle/save this data anywhere you want
     *     console.log( session.userName +' logged-in at '+ new Date() );
     *     // Save session in the storage
     *     var sessionInfo = JSON.stringify( session );
     *     storage[ session.sessionID ] = sessionInfo;
     *     
     *     // Return true as everything is ok
     *     return true;
     * }
     * // Called everytime the server needs a session description
     * exports.readSession = function( session ){
     *     var sessionID = session.sessionID;
     *     var sessionInfo = storage[ sessionID ];
     *     
     *     if( sessionInfo === undefined ){
     *         return false; // Error, sessionInfo is empty
     *     }
     *     
     *     sessionInfo = JSON.parse( sessionInfo );
     *     
     *     session.userID = sessionInfo.userID;
     *     session.userName = sessionInfo.userName;
     *     session.storage = sessionInfo.storage;
     *     session.belongsTo = sessionInfo.belongsTo;
     *     session.requestInfo = sessionInfo.requestInfo;
     *     session.lifeTime = sessionInfo.lifeTime;
     *     session.expiration = new Date( sessionInfo.expiration );
     *     
     *     // Return true as everything is ok
     *     return true;
     * }
     * // Calles everytime the server removes a session
     * exports.removeSession = function( session ){
     *     console.log( session.userName +' logged-out at '+ new Date() );
     *     var sessionID = session.sessionID;
     *     storage[ sessionID ] = undefined;
     *     // Return true as everything is ok
     *     return true;
     * }
     * ```
     * 
     * @param modulePath Describes the module path
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
     * This module is defined inside `PROJECT/backend/modules/my-login-module` or `SOLUTION/modules/my-login-module`.
     * If the module is not found in the project, it is then check inside the solution.
     * It must export a `login()` method and return the `user` object.
     * 
     * ```
     * // my-login-module/index.js
     * // Export a login() function
     * exports.login = function(username, password){
     *     // Verify the username/password through Directory or any other User DB
     *     // If user is authenticated then return the user object
     *     if (user)
     *         return {
     *           // Unique user ID. Must not collide with an existing user ID
     *           ID: 545642165412,
     *           name: user.name,
     *           fullName: user.fullname,
     *           // References the Directory group where the user belongs
     *           belongsTo: 'free-customer',
     *           // Defines the sessionStorage property of the user session
     *           storage: {}
     *         };
     *     }
     *     // If user not authenticated then return an error
     *     else if (!user)
     *     {
     *         return {
     *           // Error code returned
     *           error: 548,
     *           // Error text returned
     *           errorMessage: 'Authentication failed. Login or Password maybe wrong.'
     *         };
     *     }
     *     // or continue using the standard process (with the internal directory)
     *     else
     *     {
     *         return false;
     *     }
     * }
     * ```
     * 
     * @param moduleName Module name which handles the login
     * @param group Group rights assign to the login manager for handling its actions
     */
    setLoginManager(moduleName: String, group?: String): void;
    /**
     * Synchronizes the local Wakanda directory with a remote LDAP directory.
     * @warning Requires LDAP component.
     */
    sync(remoteLDAP?: Object): void;
    /**
     * Gets a user from its name or ID.
     * 
     * ```
     * var myUser = directory.user( 'Thomas Pesquet' );
     * ```
     * 
     * @param name Describes the user name or ID
     * @returns Returns the user
     */
    user(name: String): User;
}






	interface DirectoryEntrySync {
		/**
		*File system of the entry
		*/
		readonly filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		readonly fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		readonly isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		readonly isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		readonly name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*creates a new DirectoryReaderSync object to read entries from the DirectorySync to which it is applied
		*/
		createReader() : DirectoryReaderSync;
		/**
		*returns a Folder object that represents the current state of the folder referenced by the DirectoryEntrySync
		*/
		folder() : Folder;
		/**
		*creates or looks up a directory and returns a new entry to it
		*/
		getDirectory(path: String, options?: Object) : DirectoryEntrySync;
		/**
		*creates or looks up a file and returns a new entry to it
		*/
		getFile(path: String, options?: Object) : FileEntrySync;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*deletes the directory and all of its contents, if any
		*/
		removeRecursively() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}
	
	interface DirectoryReaderSync {
		/**
		*method returns the next block of entries in the directory
		*/
		readEntries() : Array<any>;
	}
	
	
	interface EntrySync {
		/**
		*File system of the entry
		*/
		filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}



interface File extends Blob {
    /**
     * References a file.
     * The file does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing file
     * ```
     * var myFile = new File( 'PROJECT/backend/bootstrap.js' );
     * console.log( myFile.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing file
     * ```
     * var myFile = new File( 'PROJECT/backend/file-to-create.js' );
     * console.log( myFile.exists );
     * // false
     * ```
     * 
     * @param path Absolute path of the file to reference.
     */
    new (path: String): File;
    /**
     * References a file.
     * The file does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing file
     * ```
     * var myFolder = new Folder( 'PROJECT/backend/' );
     * var myFile = new File( myFolder, 'bootstrap.js' );
     * console.log( myFile.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing file
     * ```
     * var myFolder = new Folder( 'PROJECT/backend/' );
     * var myFile = new File( myFolder, 'file-to-create.js' );
     * console.log( myFile.exists );
     * // false
     * ```
     * 
     * @param folder Folder containing the file
     * @param fileName Name of the file to reference in the folder path
     */
    new (folder: Folder, fileName: String): File;
    /**
     * Creation date for the file.
     */
    readonly creationDate: Date;
    /**
     * `true` if the file exists at the defined path, `false` otherwise.
     */
    readonly exists: Boolean;
    /**
     * File extension.
     */
    readonly extension: String;
    // /**
    //  * FileSystem of the object.
    //  */
    // readonly filesystem: FileSystemSync;
    /**
     * Last modification date for the file if any.
     */
    readonly lastModifiedDate: any;
    /**
     * Name of the file with the extension and without the path.
     */
    readonly name: string;
    /**
     * Name of the file without the extension.
     */
    readonly nameNoExt: String;
    /**
     * Parent folder of the file.
     */
    readonly parent: Folder;
    /**
     * Full path of the file.
     */
    readonly path: String;
    /**
     * `true` if the file is read only, `false` otherwise.
     */
    readonly readOnly: Boolean;
    /**
     * `true` if the file is visible, `false` otherwise.
     */
    readonly visible: Boolean;
    /**
     * Creates a new file on disk.
     * 
     * ```
     * var myFile = new File( 'PROJECT/backend/my-created-file.js' );
     * var myResult = myFile.create();
     * console.log( myResult );
     * // true
     * ```
     * 
     * @throws An error if something goes wrong: file already exists, invalid path, ...
     * @returns `true` if the file is well created
     */
    create(): Boolean;
    /**
     * Returns the size of the free space (expressed in bytes) available on the volume where the File object is stored.
     * @param quotas (default: `true`) `true` if consider the whole volume, `false` if consider only the allowed size for the quota
     */
    getFreeSpace(quotas?: Boolean): Number;
    /**
     * Returns the absolute URL of the File object.
     * @param encoding (default: `false`) `true` if encode the url, `false` otherwise.
     */
    getURL(encoding?: Boolean): String;
    /**
     * Returns the total size (expressed in bytes) of the volume where the File object is stored.
     */
    getVolumeSize(): Number;
    /**
     * Check if the path references a file.
     * 
     * ```
     * var myIsFile = File.isFile( 'PROJECT/backend/bootstrap.js' );
     * console.log( myIsFile );
     * // true
     * ```
     * 
     * @param path Absolute path to a file
     * @returns `true` is the path references a file, `false` otherwise.
     */
    isFile(path: String): Boolean;
    /**
     * Moves the file to the specified destination.
     * 
     * ```
     * var myFile = new File( 'PROJECT/backend/my-file.js' );
     * myFile.create();
     * myFile.moveTo( 'PROJECT/my-moved-file.js', yes );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the moveTo() action.
     * console.log( myFile.path );
     * ```
     * 
     * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
     * @param file Destination file path
     * @param overwrite `true` if the file can be overwritten, `false` otherwise
     */
    moveTo(file: File, overwrite?: Boolean): void;
    /**
     * Moves the file to the specified destination.
     * 
     * ```
     * var mySourceFile = new File( 'PROJECT/backend/my-file.js' );
     * var myDestinationFile = new File( 'PROJECT/my-moved-file.js' );
     * // The file must exists to be renamed
     * myFile.create();
     * myFile.moveTo( myDestinationFile, yes );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the moveTo() action.
     * console.log( myFile.path );
     * // PROJECT/backend/my-file.js
     * ```
     * 
     * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
     * @param file Destination file path
     * @param overwrite `true` if the file can be overwritten, `false` otherwise
     */
    moveTo(file: String, overwrite?: Boolean): void;
    /**
     * Removes the file from the disk.
     * @returns `true` if the file is not here, `false` otherwise.
      */
    remove(): Boolean;
    /**
     * Rename the file on disk.
     * 
     * ````
     * var myFile = new File( 'PROJECT/backend/my-file.js' );
     * // The file must exists to be renamed
     * myFile.create();
     * // The destination file name must be free
     * myFile.setName( 'my-renamed-file.js' );
     * // myFile always references the "my-file.js" file
     * // The referenced file did not change with the setName() action.
     * console.log( myFile.path );
     * // PROJECT/backend/my-file.js
     * ```
     * 
     * @warning The file must exist on disk to be renamed
     * @warning The file destination must be free
     * @param name New file name
     * @returns `true` if the file is successfully renamed
     * @throws An error if something goes wrong: file already exists, invalid name, ...
     */
    setName(name: String): Boolean;
}


// interface FileIterator extends File {
// 	/**
// 	*puts the file pointer on the next file within an iteration of files
// 	*/
// 	next() : Boolean;
// 	/**
// 	*checks the validity of the pointer to the current File object within an iteration of files
// 	*/
// 	valid() : Boolean;
// }


	
	interface FileEntrySync {
		/**
		*File system of the entry
		*/
		filesystem: FileSystemSync;
		/**
		*Absolute path of the entry
		*/
		fullPath: String;
		/**
		*True if the EntrySync is a directory
		*/
		isDirectory: Boolean;
		/**
		*True if the EntrySync is a file
		*/
		isFile: Boolean;
		/**
		*Name of the entry, excluding the path leading to it
		*/
		name: String;
		/**
		*copies the EntrySync object to a different location in the filesystem
		*/
		copyTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*creates a new FileWriterSync associated with the file that the FileEntrySync represents
		*/
		createWriter() : FileWriterSync;
		/**
		*returns a File object that represents the current state of the file referenced by the FileEntrySync
		*/
		file() : File;
		/**
		*returns a Metadata object providing information about the state of a file or directory
		*/
		getMetadata() : Object;
		/**
		*returns the parent DirectoryEntrySync of the EntrySync to which it is applied
		*/
		getParent() : DirectoryEntrySync;
		/**
		*moves the EntrySync object to a different location in the filesystem
		*/
		moveTo(dest: DirectoryEntrySync, name?: String) : EntrySync;
		/**
		*deletes the entry (file or directory) from the filesystem
		*/
		remove() : void;
		/**
		*returns a URL that can be used to identify the EntrySync
		*/
		toURL() : String;
	}


	interface FileSystemSync {
		/**
		 * Name of the file system
		 */
		readonly name: String;
		/**
		 * Absolute path of the file system
		 */
		readonly path: String;
		/**
		 * Root directory of the file system
		 */
		root: DirectoryEntrySync;
	}
	interface FileWriterSync{
		//TODO
	}


interface Folder {
    /**
     * References a folder.
     * The folder does not have to exist.
     * 
     * #### Example 1: Get a reference to an existing folder
     * ```
     * var myFolder = new Folder( 'PROJECT/backend' );
     * console.log( myFolder.exists );
     * // true
     * ```
     * 
     * #### Example 2: Get a reference to a missing folder
     * ```
     * var myFolder = new Folder( 'PROJECT/missing-folder' );
     * console.log( myFolder.exists );
     * // false
     * ```
     * 
     * @param path Absolute path of the folder to reference.
     */
    new (path: String): Folder;
    /**
     * Creation date for the folder.
     */
    readonly creationDate: Date;
    /**
     * `true` if the folder exists at the defined path, `false` otherwise.
     */
    readonly exists: Boolean;
    /**
     * Folder extension.
     */
    readonly extension: String;
    /**
     * Array of Files.
     */
    readonly files: Array<File>;
    // /**
    // *FileSystem of the object.
    // */
    // filesystem: FileSystemSync;
    /**
     * First file found in the folder.
     */
    readonly firstFile: File;
    /**
     * First folder (i.e., subfolder) in the folder.
     */
    readonly firstFolder: Folder;
    /**
     * Array of Folder objects.
     */
    folders: Array<Folder>;
    /**
     * Last modification date for the folder.
     */
    readonly modificationDate: Date;
    /**
     * Name of the folder without the path.
     */
    readonly name: String;
    /**
     * Name of the folder without the extension.
     */
    readonly nameNoExt: String;
    /**
     * Parent folder of the folder.
     */
    readonly parent: Folder;
    /**
     * Full path of the folder.
     */
    readonly path: String;
    /**
     * `true` if the folder is visible, `false` otherwise.
     */
    readonly visible: Boolean;
    /**
     * Creates a new folder on disk.
     * 
     * ```
     * var myFolder = new Folder( 'PROJECT/backend/my-created-folder' );
     * var myResult = myFolder.create();
     * console.log( myResult );
     * // true
     * ```
     * 
     * @throws An error if something goes wrong: folder already exists, invalid path, ...
     * @returns `true` if the folder is well created
     */
    create(): Boolean;
    /**
     * Calls `callback` function for each file at the first level of the folder.
     * 
     * #### Example 1: Basic usage
     * ```
     * var folder = Folder( 'PROJECT/backend/' );
     * folder.forEachFile( function( file )
     * {
     *     console.log( file.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```
     * var folder = Folder( 'PROJECT/backend/' );
     * folder.forEachFile( function( file )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `forEachFile`
     * @param callback Defines the function called for each file
     * @param callback.file Current file being processed
     * @param thisArg Defines `this` value of the callback
     */
    forEachFile(callback: (file: File) => void, thisArg?: Object): void;
    /**
     * Calls `callback` function for each folder at the first level of the folder.
     * 
     * #### Example 1: Basic usage
     * ```
     * var folder = Folder( 'PROJECT/backend/' );
     * folder.forEachFolder( function( folder )
     * {
     *     console.log( folder.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```
     * var folder = Folder( 'PROJECT/backend/' );
     * folder.forEachFolder( function( folder )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `forEachFolder`
     * @param callback Defines the function called for each folder
     * @param callback.folder Current folder being processed
     * @param thisArg Defines `this` value of the callback
     */
    forEachFolder(callback: (folder: Folder) => void, thisArg?: Object): void;
    /**
     * Returns the size of the free space (expressed in bytes) available on the volume where the Folder object is stored.
     * @param quotas (default: `true`) `true` if consider the whole volume, `false` if consider only the allowed size for the quota
     */
    getFreeSpace(quotas?: Boolean): Number;
    /**
     * Returns the absolute URL of the Folder object.
     * @param encoding (default: `false`) `true` if encode the url, `false` otherwise.
     */
    getURL(encoding?: Boolean): String;
    /**
     * Returns the total size (expressed in bytes) of the volume where the Folder object is stored.
     */
    getVolumeSize(): Number;
    /**
     * Check if the path references a folder.
     * 
     * ```
     * var myIsFolder = Folder.isFolder( 'PROJECT/backend' );
     * console.log( myIsFolder );
     * // true
     * ```
     * 
     * @param path Absolute path to a folder
     * @returns `true` is the path references a folder, `false` otherwise.
     */
    isFolder(path: String): Boolean;
    // /**
    // *puts the folder pointer on the next subfolder in an iteration of subfolders.
    // */
    // next() : Boolean;
    /**
     * Calls `callback` function for each file in the folder tree (first-level and sub-level folder).
     * 
     * #### Example 1: Basic usage
     * ```
     * var folder = Folder( 'PROJECT/backend/' );
     * folder.parse( function( file, position, folder )
     * {
     *     console.log( '-----------------------------' );
     *     console.log( file.path );
     *     console.log( position );
     *     console.log( folder.path );
     * });
     * ```
     * 
     * #### Example 2: Override `this`
     * ```
     * var folder = Folder( 'PROJECT/backend/' );
     * folder.parse( function( file, position, folder )
     * {
     *     console.log( this );
     * }, {data: 'some-data' } );
     * // {"data":"some-data"}
     * ```
     * 
     * @warning `break` is not working in `parse`
     * @param callback Defines the function called for each folder
     * @param thisArg Defines `this` value of the callback
     * @param callback.file  Current processed file
     * @param callback.position Position of the file currently being processed
     * @param callback.folder Folder of the processed file
     */
    parse(callback: (file: File, position: Number, folder: Folder) => void, thisArg?: Object): void;
    /**
     * Removes the folder and its content from the disk.
     * @returns `true` if the folder is not here, `false` otherwise.
      */
    remove(): Boolean;
    /**
     * Removes the contents of the folder from the disk.
     */
    removeContent(): Boolean;
    /**
     * Rename the folder on disk.
     * 
     * ````
     * var myFolder = new Folder( 'PROJECT/backend/my-folder' );
     * // The folder must exists to be renamed
     * myFolder.create();
     * // The destination folder name must be free
     * myFolder.setName( 'my-renamed-folder' );
     * // myFolder always references the "my-folder" folder
     * // The referenced folder did not change with the setName() action.
     * console.log( myFolder.path );
     * // PROJECT/backend/my-folder
     * ```
     * 
     * @warning The folder must exist on disk to be renamed
     * @warning The folder destination must be free
     * @param name New folder name
     * @returns `true` if the folder is successfully renamed
     * @throws An error if something goes wrong: folder already exists, invalid name, ...
     */
    setName(newName: String): void;
    // /**
    // *checks the validity of the pointer to the current folder within an iteration of folders
    // */
    // valid() : Boolean;
}
	interface FolderInstance {
		/**
		*Creation date for the folder
		*/
		creationDate: Date;
		/**
		*True if the folder exists at the defined path. Otherwise, it returns false.
		*/
		exists: Boolean;
		/**
		*Folder extension
		*/
		extension: String;
		/**
		*Array of File objects
		*/
		files: Array<File>;
		/**
		*FileSystem of the object
		*/
		filesystem: FileSystemSync;
		/**
		*First file found in the folder
		*/
		firstFile: File;
		/**
		*First folder (i.e., subfolder) in the folder
		*/
		firstFolder: FolderInstance;
		/**
		*Array of Folder objects
		*/
		folders: Array<FolderInstance>;
		/**
		*Last modification date for the folder
		*/
		modificationDate: Date;
		/**
		*Name of the folder without the path
		*/
		name: String;
		/**
		*Name of the folder without the extension
		*/
		nameNoExt: String;
		/**
		*Parent folder of the folder
		*/
		parent: FolderInstance;
		/**
		*Full path of the folder
		*/
		path: String;
		/**
		*True if the folder is visible. Otherwise, it returns false.
		*/
		visible: Boolean;
		/**
		*creates the folder referenced in the Folder object on disk
		*/
		create() : Boolean;
		/**
		*executes the callbackFn function once for each file present at the first level of the Folder object
		*/
		forEachFile(callbackFn: (file: File)=>void, thisArg?: Object) : void;
		/**
		*executes the callbackFn function once for each subfolder present at the first level of the Folder object
		*/
		forEachFolder(callbackFn: (folder: FolderInstance)=>void, thisArg?: Object) : void;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: Boolean) : Number;
		/**
		*returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
		*/
		getFreeSpace(quotas?: String) : Number;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: Boolean) : String;
		/**
		*returns the absolute URL of the File or Folder object
		*/
		getURL(encoding?: String) : String;
		/**
		*returns the total size (expressed in bytes) of the volume where the File or Folder object is stored
		*/
		getVolumeSize() : Number;
		/**
		*class method can be used with the Folder( ) constructor to know if path corresponds to a folder on disk
		*/
		isFolder(path: String) : Boolean;
		/**
		*puts the folder pointer on the next subfolder in an iteration of subfolders
		*/
		next() : Boolean;
		/**
		*executes the callbackFn function once for each file or subfolder present in the Folder object
		*/
		parse(callbackFn: Function, thisArg?: Object) : void;
		/**
		*removes the file or folder referenced in the File or Folder object from the storage volume
		*/
		remove() : Boolean;
		/**
		*removes the contents of the folder referenced in the Folder object from the storage volume
		*/
		removeContent() : Boolean;
		/**
		*allows you to rename the folder referenced in the Folder object on disk
		*/
		setName(newName: String) : void;
		/**
		*checks the validity of the pointer to the current folder within an iteration of folders
		*/
		valid() : Boolean;
	}

interface Group {
    /**
     * Describes the internal group ID.
     */
    ID: String;
    /**
     * Describes the group name.
     */
    name: String;
    /**
     * Returns all children directory groups starting with `filterString`.
     * 
     * ```
     * var myGroups = directory.filterChildren("*cien");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    filterChildren(filterString: String, level?: Boolean): Array<Group>;
    /**
     * Returns all children directory groups starting with `filterString`.
     * 
     * ```
     * var myGroups = directory.filterParents("*cien");
     * ```
     * 
     * @param filterString Describe the filtering string
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    filterParents(filterString: String, level?: Boolean): Array<Group>;
    /**
     * Get children groups belonging to the current group.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getChildren(level?: Boolean): Array<Group>;
    /**
     * Get parent groups to which the current group belongs.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getParents(level?: Boolean): Array<Group>;
    /**
     * Get users belonging to the current group.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     */
    getUsers(level?: Boolean): Array<User>;
    /**
     * Assignes a group to one or more groups.
     * 
     * ```
     * myGroup.putInto( 'sales' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    putInto(...groupList: String[]): void;
    /**
     * Assignes a group to one or more groups.
     * 
     * ```
     * var SalesGroup = directory.group( 'sales' ); 
     * myGroup.putInto( SalesGroup );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    putInto(...groupList: Group[]): void;
    /**
     * Removes the group from the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     */
    remove(): void;
    /**
     * Removes the group from group list.
     * 
     * ```
     * myGroup.removeFrom( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    removeFrom(...groupList: String[]): void;
    /**
     * Removes the group from group list.
     * 
     * ```
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
      * myGroup.removeFrom( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    removeFrom(...groupList: Group[]): void;
    /**
     * Sets a local name (alias) to the group object corresponding to a remote group from a LDAP directory.
     * @warning Requires LDAP component
     */
    setAlias(alias: String): void;
}


interface HttpServer {
    /**
     * Cache properties of the HTTP server.
     */
    readonly cache: HttpServerCache;
    /**
     * Default charset value.
     */
    readonly defaultCharSet: String;
    /**
     * Host name of the server.
     */
    readonly hostName: String;
    /**
     * IP address of the server.
     */
    readonly ipAddress: String;
    /**
     * Port listened to by the server.
     */
    readonly port: Number;
    /**
     * The current HTTP Request Object.
     */
    readonly request: HTTPRequest;
    /**
     * The current HTTP Response Object.
     */
    readonly response: HTTPResponse;
    /**
     * SSL properties of the server.
     */
    readonly ssl: HttpServerSSL;
    /**
     * Current status of the HTTP server.
     */
    readonly started: Boolean;
    /**
     * Adds a request handler function on the server.
     * It is recommended to write all request handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Example 1: Add a request handler
     * ```
     * // It is recommended to write these lines in bootstrap.js
     * // On every "/ping" requests, call "hello()" function in "request-greetings.js"
     * httpServer.addRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Path to the file that defines the functionName
     * @param functionName Function name which handles the request and returns the request response
     * 
     * #### Example 2: Handle the request
     * ```
     * // request-greetings.js
     * function pong( request, response ){
     *     return 'pong';
     * }
     * ```
     */
    addRequestHandler(pattern: String, filePath: String, functionName: String): void;
    /**
     * Adds a WebSocket handler script on the server.
     * It is recommended to write all websocket handler in the `bootstrap.js` file in order to be available at server start up.
     * 
     * #### Example 1: Add a websocket handler
     * ```
     * // It is recommended to write these lines in bootstrap.js
     * httpServer.addWebSocketHandler('^/ping$', './backend/websocket-greetings.js', 'websocket-id', true);
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Absolute or relative path from the project to the file that defines the websocket handler. Filesystem are not working in filePath parameter (`PROJECT`, `SOLUTION`, ...).
     * 
     * #### Example 2: Handle the websocket
     * ```
     * // ./backend/websocket-greetings.js
     * // Same as for ShareWorker
     * // Called every time a new websocket is connected
     * onconnect = function ( msg ) {
     * 
     *     // Get the websocket port
     *     var wsPort = msg.ports[0];
     * 
     *     // Called every time a client sends a message    
     *     wsPort.onmessage = function( message ) {
     * 
     *         // Process data send by the client
     *         if ( message.data == 'hello' ){
     *             console.log( 'websocket data received: '+ message.data );
     *             // Send a response to client
     *             wsPort.postMessage( 'Hello back !' );
     *         }else{
     *             console.log( 'websocket data skipped: '+ JSON.stringify(message) );
     *         }
     *     };
     * 
     *     // Called when the socket receives an error
     *     wsPort.onerror = function() { 
     *         // Handle websocket errors
     *     };
     * 
     *     // Called when the socket is closed
     *     wsPort.onclose = function() { 
     *         // Do nothing and wait for another websocket connection
     *     };
     * };
     * ```
     * 
     * @param socketID Socket ID usefull for `removeWebSocketHandler()`
     * @param sharedWorker `true` if uses shared worker (recommended). `false` if uses dedicated worker.
     */
    addWebSocketHandler(pattern: String, filePath: String, socketID: String, sharedWorker: Boolean): void;
    /**
     * Removes an existing request handler function on the server.
     * 
     * ```
     * // Must match parameters of "addRequestHandler()"
     * // httpServer.addRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * httpServer.removeRequestHandler('^/ping$', 'request-greetings.js', 'pong');
     * ```
     * 
     * @param pattern Regexp pattern to intercept a HTTP request
     * @param filePath Path to the file that defines the functionName
     * @param functionName Function name which handles the request
     */
    removeRequestHandler(pattern: String, filePath: String, functionName: String): void;
    /**
     * Removes an existing websocket handler on the server.
     * 
     * ```
     * // Must match socketID parameter of "addWebSocketHandler()"
     * // httpServer.addWebSocketHandler('^/ping$', 'backend/websocket-greetings.js', 'websocket-id', true);
     * httpServer.httpServer.removeWebSocketHandler( 'websocket-id' );
     * ```
     * 
     * @param socketID Identifies the websocket to remove
     */
    removeWebSocketHandler(socketID: String): void;
    /**
     * Starts the Wakanda HTTP server.
     */
    start(): void;
    /**
     * Stops the Wakanda HTTP server.
     */
    stop(): void;
}

interface HttpServerCache {
    /**
     * Status of the HTTP server cache.
     */
    readonly enabled: Boolean;
    /**
     * Size of the HTTP server cache in memory.
     */
    readonly memorySize: Number;
}

interface HttpServerSSL {
    /**
     * Status of the SSL protocol on the server.
     */
    readonly enabled: Boolean;
    /**
     * Port number for SSL connections.
     */
    readonly port: Number;
    /**
     * Get the full path to the SSL certificates folder used by the server (if any).
     */
    getCertificateFolder(): String;
    /**
     * Get the full path to the SSL certificates path used by the server (if any).
     */
    getCertificatePath(): String;
}



interface HTTPRequest {
    /**
     * Body of the received message.
     */
    body: String | Image | Blob;
    /**
     * Content-type of the request as defined in the header.
     */
    contentType: String;
    /**
     * Header of the HTTPRequest.
     */
    headers: String[];
    /**
     * Host header of the request.
     */
    host: String;
    /**
     * True if the connection uses SSL, false otherwise.
     */
    isSSL: Boolean;
    /**
     * Local server IP address (IPv4 or IPv6).
     */
    localAddress: String;
    /**
     * Local server port number.
     */
    localPort: Number;
    /**
     * HTTP method name.
     */
    method: String;
    /**
     * Parts of a HTTP body (for multipart forms).
     */
    parts: MIMEMessage;
    /**
     * User password for authentified requests (BASIC mode only).
     */
    password: String;
    /**
     * Raw URL of the request.
     */
    rawURL: String;
    /**
     * Remote client IP address (IPv4 or IPv6).
     */
    remoteAddress: String;
    /**
     * Remote client port number.
     */
    remotePort: Number;
    /**
     * Request-line received by the server.
     */
    requestLine: String;
    /**
     * Decoded URL of the request.
     */
    url: String;
    /**
     * Path part of the request.
     */
    urlPath: String;
    /**
     * Query part of the request.
     */
    urlQuery: String;
    /**
     * User name for authentified request.
     */
    user: String;
    /**
     * Version of the HTTP protocol.
     */
    version: String;
}


interface HTTPResponse {
    /**
     * Body of the returned message to set.
     */
    body: Blob | Image | String;
    /**
     * Content-type of the response to set.
     */
    contentType: String;
    /**
     * Header of the HTTPResponse.
     */
    headers: String[];
    /**
     * Return status code to set.
     */
    statusCode: Number;
    /**
     * Indicates if the contents of the HTTPResponse should be cached on the server.
     */
    allowCache(useCache: Boolean): void;
    /**
     * Sets custom compression thresholds for the HTTPResponse.
     * @param minThreshold Minimum size (in bytes) below which the response should not be compressed or -1 to use default value
     * @param maxThreshold Maximum size (in bytes) up to which the response should not be compressed or -1 to use default value
     */
    allowCompression(minThreshold: Number, maxThreshold: Number): void;
    /**
     * Sends an HTTPResponse in chunks without knowing in advance the size of the data.
     */
    sendChunkedData(data: String | Image | Blob): void;
}

/**
 * @warning The Image API is partially supported on Linux platforms:
 * - You can only load images of the PNG or JPG types
 * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
 */

interface Image {
    /**
     * Height of the image (pixels).
     */
    readonly height: Number;
    /**
     * Size of the image (bytes).
     */
    readonly length: Number;
    /**
     * Metadata associated with the image.
     */
    readonly meta: Object;
    /**
     * Size of the image (bytes).
     */
    readonly size: Number;
    /**
     * Width of the image (pixels).
     */
    readonly width: Number;
    /**
     * Stores the image object in a file.
     * 
     * #### Example 1: Basic usage
     * ```
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * myImage.save( 'PROJECT/backend/my-saved-image.jpg' );
     * ```
     * #### Example 2: Save image in another format
     * ```
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * myImage.save( 'PROJECT/backend/my-png-image.png', 'image/png' );
     * ```
     * 
     * @warning Overrides existing files
     * @param file Path to the file where to save the image
     * @param type New mime type to apply
     */
    save(file: String, type?: String): void;
    /**
     * Stores the image object in a file.
     * 
     * #### Example 1: Basic usage
     * ```
     * var myFile = File( 'PROJECT/backend/my-saved-image.jpg' );
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * myImage.save( myFile );
     * ```
     * #### Example 2: Save image in another format
     * ```
     * var myFile = File( 'PROJECT/backend/my-png-image.png' );
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * myImage.save( myFile, 'image/png' );
     * ```
     * 
     * @warning Overrides existing files
     * @param file File object where to save the image
     * @param type New mime type to apply
     */
    save(file: File, type?: String): void;
    /**
     * Updates the image metadata.
     * 
     * ```
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * var newMeta = { IPTC: { Keywords: ['vacation', 'snow']}};
     * myImage.saveMeta( newMeta );
     * myImage.save( 'PROJECT/backend/my-meta-image.jpg' );
     * ```
     * 
     * @warning A `save` is required in order to save the metadata on disk
     * @param meta Object containing the meta to update
     */
    saveMeta(meta: Object): void;
    // /**
    //  * associate a file path to an Image object
    // */
    // setPath(file: File): void;
    // /**
    //  * associate a file path to an Image object
    //  */
    // setPath(file: String): void;
    /**
     * Returns a thumbnail of the source image.
     * 
     * #### Example 1: Basic usage
     * ```
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * var myThumbnail = myImage.thumbnail( 50, 50 );
     * myThumbnail.save( 'PROJECT/backend/my-thumbnail.jpg' );
     * ```
     * 
     * #### Example 2: Change thumbnail mode
     * ```
     * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
     * var myThumbnail = myImage.thumbnail( 50, 50, 2 );
     * myThumbnail.save( 'PROJECT/backend/my-thumbnail.jpg' );
     * ```
     * 
     * @param width (pixels) Thumbnail width
     * @param height (pixels) Thumbnai height
     * @param mode (default: 6) Scale mode to apply. See [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances/thumbnail.301-663098.en.html) for more details.
     */
    thumbnail(width: Number, height: Number, mode?: Number): Image;
}
	interface Job {
		/**
		*Unique ID of the job on the server
		*/
		id: String;
		/**
		*logs the messageInfo event for the job
		*/
		log(messageInfo: String) : void;
		/**
		*logs the messageInfo event for the job and terminates the job
		*/
		terminate(messageInfo: String) : void;
	}

	interface JobManager {
		/**
		*returns a new job object or the job object corresponding to the jobID string parameter
		*/
		getJob(jobID?: String) : Job;
		/**
		*returns an array containing all the jobs currently running on the Wakanda Server
		*/
		getJobs() : Array<Job>;
	}interface LockableKeyValueStorage extends KeyValueStorage {
    /**
     * Locks the storage object. Only the current thread can read or modify the storage object.
     */
    lock(): void;
    /**
     * Tries to lock the storage object. Returns `true` in case of success and false otherwise.
     */
    tryLock(): Boolean;
    /**
     * Removes a lock that was previously put on the storage object.
     */
    unlock(): void;
}

interface KeyValueStorage {
    /**
     * Gets the number of key/value pairs currently present in the storage object.
     */
    length: Number;
    /**
     * Removes all key/value pairs from the storage object.
     */
    clear(): void;
    /**
     * Gets a copy of the value from the storage object.
     */
    getItem(key: String): any;
    /**
     * Removes an item from the storage object.
     */
    removeItem(key: String): void;
    /**
     * Create or update an item in the storage object.
     */
    setItem(key: String, value: String | Number | Object): void;
}


interface MIMEMessage {
    /**
     * nth part of the multipart MIME message.
     */
    [n: number]: MIMEMessagePart;
    /**
     * Boundary tag used to delimit the parts.
     */
    boundary: String;
    /**
     * Number of parts.
     */
    count: Number;
    /**
     * Encoding type: 'multipart/form-data' or 'application/x-www-form-urlencoded'.
     */
    encoding: String;
    /**
     * Number of parts.
     */
    length: Number;
    /**
     * Returns the MIME message as a Blob object.
     */
    toBlob(mimeType?: String): Blob;
    /**
     * Returns the MIME message as a Buffer object.
     */
    toBuffer(): void;
}

interface MIMEMessagePart {
    /**
     * Body as a BLOB.
     */
    asBlob: Blob;
    /**
     * Body as an image.
     */
    asPicture: Image;
    /**
     * Body as a Text string.
     */
    asText: String;
    /**
     * Name of the uploaded file.
     */
    fileName: String;
    /**
     * Content-type of the part.
     */
    mediaType: String;
    /**
     * Input field name.
     */
    name: String;
    /**
     * Size of the body (in bytes).
     */
    size: Number;
    /**
     * Saves the body of the part in the file whose path is passed in filePath.
     */
    save(filePath: String, overWrite?: Boolean): void;
}
	interface Module {
		//TODO
	}interface Mutex {

    /**
     * Mutex constructor.
     * Mutex allows to control code execution order and to prevent conflicts in a multi-thread application.
     * It provides a way to pause execution in one thread until a condition is met in another.
     * 
     * ```
     * // Creates/gets the "writeMutex" mutex available in all threads
     * var writeMutex = Mutex('writeMutex');
     * ```
     * 
     * @param key Describes the global mutex key
     */
    new (key: String): Mutex;
    /**
     * Locks the mutex or wait until it has been released to lock it; the thread execution is paused until then.
     * 
     * ```
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.lock();
     * ```
     * 
     * @returns Returns `true` if the mutex is locked
     */
    lock(): Boolean;
    /**
     * Tries to lock the mutex or returns false if it is already locked. The thread execution is not paused.
     * 
     * ```
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.tryLock();
     * ```
     * 
     * @returns Returns `true` if the mutex is locked, `false` otherwise
     */
    tryLock(): Boolean;
    /**
     * Unlock the mutex. The mutex must be lock in the same thread to be unlock.
     * 
     * ```
     * var writeMutex = Mutex('writeMutex');
     * writeMutex.lock();
     * writeMutex.unlock();
     * ```
     * 
     * @returns Returns `true` if the mutex is unlocked, `false` otherwise
     */
    unlock(): Boolean;
}

/**
 * Here is an example of a worker file.
 * 
 * Callback to trigger when a new caller creates a NodeWorker proxy object.
 * 
 * ```
 * onconnect: Function;
 * ```
 * 
 * Get port to communicate with the worker proxy.
 * Always use `ports[0]`.
 * 
 * ```
 * ports: Array<Port>;
 * ```
 * 
 * Close the worker.
 * 
 * ```
 * close() : void;
 * ```
 * 
 * Allows a thread to handle events and to continue to exist after the complete code executes.
 * @warning There is an implicit `wait()` in worker. No need to add another.
 * 
 * ```
 * wait(timeout?: Number) : Boolean;
 * ```
 * 
 * Requires a node module. This module should be defined in `PROJECT/node_modules`
 * 
 * ```
 * var myModule = requireNode('module');
 * ```
 * 
 * Worker example
 * 
 * ```
 * // Describes the content of the worker.js file
 * // Called when a new worker is created
 * onconnect = function( msg )
 * {
 *     // Get the worker port for communication with the worker proxy
 *     var workerPort = msg.ports[0];
 * 
 *     // Send a message to the worker proxy. The worker is up and running.
 *     workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *     // Listen for worker proxy messages
 *     workerPort.onmessage = function( event )
 *     {
 *         // We've got a message !
 *         // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *         // Here, `event.data` contains an object: `{type: String, says: String}`
 *         var message = event.data;
 *         switch( message.type )
 *         {
 *             // It's a hello world message
 *             case 'hello':
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
 *                 break;
 * 
 *             // It's a terminate message
 *             case 'close':
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *                 // Close the worker
 *                 close();
 *                 break;
 *         }
 *     }
 * }
 * ```
 */

interface NodeWorker {
    /**
     * Node worker constructor.
     * Creates a new node worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the node worker thread.
     * Node workers can be addressed from any thread, they are uniquely identified by their path and name.
     * 
     * ```
     * // "worker.js" is defined in PROJECT/backend/worker.js
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * ```
     * 
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a node worker proxy
     */
    new (scriptPath: String, workerName?: String): NodeWorkerProxy;
}

interface NodeWorkerProxy {
    /**
     * Use the proxy port to communicate with the node worker thread.
     * 
     * ```
     * // Create a new NodeWorker and get the proxy worker
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage( 'wake-up' );
     * ```
     */
    port: Port;
}interface OS {
    /**
	*True if the server is running under a Unix OS, false otherwise
	*/
	isLinux: Boolean;
	/**
	*True if the server is running under an OSX (Mac) OS, false otherwise
	*/
	isMac: Boolean;
	/**
	*True if the server is running under a Windows OS, false otherwise
	*/
	isWindows: Boolean;
	/**
	*returns a list of available network interfaces on the server
	*/
	networkInterfaces() : Object;
}
	interface Permissions {
		/**
		*returns a JSON object describing the permission defined for the specified type, resource and action
		*/
		findResourcePermission(type: String, resource: String, action: String) : Object;
	}interface Port {

    /**
     * Listen for worker or proxy worker errors.
     * 
     * ```
     * workerPort.onerror = function( error )
     * {
     *    // We've got an error !
     *    console.log('Error message: '+ error.message);
     *    console.log('From file: '+ error.filename);
     *    console.log('Line: '+ error.lineno);
     * }
     * ```
     * 
     * @param error Error received on the port
     */
    onerror(error: Object): void;

    /**
     * Listen for worker or proxy worker messages.
     * 
     * ```
     * workerPort.onmessage = function( message )
     * {
     *     // We've got a message !
     *     // The `message.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
     *     // Here, `message.data` contains an object: `{type: String, says: String}`
     *     var action = message.data;
     *     switch( action.type )
     *     {
     *         // It's a hello world message
     *         case 'hello':
     *             // Reply to the worker proxy
     *             workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
     *             break;
     * 
     *         // It's a terminate message
     *         case 'close':
     *             // Reply to the worker proxy
     *             workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
     *             // Close the worker
     *             close();
     *             break;
     *     }
     * }
     * ```
     * 
     * @param message Message received on the port
     */
    onmessage(message: any): void;

    /**
     * Send a message to the worker or proxy worker.
     * 
     * Use case 1: From a worker proxy
     * ```
     * // Create a new SharedWorker and get the proxy worker
     * var myProxyWorker = new SharedWorker("backend/worker.js", "my-worker-name");
     * // Get the proxy worker port for communication
     * var proxyWorkerPort = myProxyWorker.port;
     * // Send a "wake up" message to the worker
     * proxyWorkerPort.postMessage('wake-up');
     * ```
     * 
     * Use case 2: From a worker
     * ```
     * // worker.js
     * onconnect = function( msg )
     * {
     *     // Get the worker port for communication with the worker proxy
     *     var workerPort = msg.ports[0];
     * 
     *     // Send a message to the worker proxy. The worker is up and running.
     *     workerPort.postMessage({type: 'connected', says: 'Hello world!'});
     * }
     * ```
     * 
     * @param messageData Message to send to the worker
     */
    postMessage(messageData: any): void;
}interface Process {
    /**
	*Wakanda internal build version, for example "2.108407"
	*/
	buildNumber: String;
	/**
	*User environment variables
	*/
	env: Object;
	/**
	*Unique identifier for the process
	*/
	pid: Number;
	/**
	*Wakanda version full string, for example "2.0 build 2.108407"
	*/
	version: String;
}
	interface ProgressIndicator {
		/**
		*stops the current session of the ProgressIndicator object
		*/
		endSession() : void;
		/**
		*automatically increments the value of the current element for the ProgressIndicator object
		*/
		incValue() : Boolean;
		/**
		*dynamically modifies the maximum number of elements whose processing must be shown by the ProgressIndicator object
		*/
		setMax(numElements: Number) : void;
		/**
		*dynamically modifies the name of the execution session for the ProgressIndicator object
		*/
		setMessage(sessionName: String) : void;
		/**
		*sets a current element value for the ProgressIndicator object
		*/
		setValue(curValue: Number) : Boolean;
		/**
		*interrupts the current execution session of the ProgressIndicator object
		*/
		stop() : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: Boolean) : void;
		/**
		*creates and manages the display of a second ProgressIndicator object in the main ProgressIndicator session being executed
		*/
		subSession(numElements: Number, sessionName: String, stoppable?: String) : void;
	}

/**
 * Here is an example of a worker file.
 * 
 * Callback to trigger when a new caller creates a SharedWorker proxy object.
 * 
 * ```
 * onconnect: Function;
 * ```
 * 
 * Get port to communicate with the worker proxy.
 * Always use `ports[0]`.
 * 
 * ```
 * ports: Array<Port>;
 * ```
 * 
 * Close the worker.
 * 
 * ```
 * close() : void;
 * ```
 * 
 * Allows a thread to handle events and to continue to exist after the complete code executes.
 * @warning There is an implicit `wait()` in worker. No need to add another.
 * 
 * ```
 * wait(timeout?: Number) : Boolean;
 * ```
 * 
 * Requires a SSJS module. This module should be defined in `PROJECT/backend/modules`
 * 
 * ```
 * var myModule = require('module');
 * ```
 *
 * Worker example
 * 
 * ```
 * // Describes the content of the worker.js file
 * // Called when a new worker is created
 * onconnect = function( msg )
 * {
 *     // Get the worker port for communication with the worker proxy
 *     var workerPort = msg.ports[0];
 * 
 *     // Send a message to the worker proxy. The worker is up and running.
 *     workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *     // Listen for worker proxy messages
 *     workerPort.onmessage = function( event )
 *     {
 *         // We've got a message !
 *         // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *         // Here, `event.data` contains an object: `{type: String, says: String}`
 *         var message = event.data;
 *         switch( message.type )
 *         {
 *            // It's a hello world message
 *            case 'hello':
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
 *                 break;
 * 
 *             // It's a terminate message
 *             case 'close':
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *                 // Close the worker
 *                 close();
 *                 break;
 *         }
 *     }
 * }
 * ```
 */

interface SharedWorker {
    /**
     * Shared worker constructor.
     * Creates a new shared worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the shared worker thread.
     * Shared workers can be addressed from any thread, they are uniquely identified by their path and name.
     * 
     * ```
     * // "worker.js" is defined in PROJECT/backend/worker.js
     * var myWorkerProxy = new SharedWorker( 'backend/worker.js', 'my-worker-name' );
     * ```
     * 
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a shared worker proxy
     */
    new (scriptPath: String, workerName?: String): SharedWorkerProxy;
}

interface SharedWorkerProxy {
    /**
     * Use the proxy port to communicate with the share worker thread.
     * 
     * ```
     * // Create a new SharedWorker and get the proxy worker
     * var myWorkerProxy = new SharedWorker( 'backend/worker.js', 'my-worker-name' );
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage( 'wake-up' );
     * ```
     */
    port: Port;
}		
	interface Socket {
		/**
		*Number of buffered characters to be written
		*/
		bufferSize: Number;
		/**
		*installs a new listener function to be called when the specified event is triggered by the object on which it is applied
		*/
		addListener(event: String, listener: Function) : void;
		/**
		*returns an object containing two attributes, address and port, representing the address where the client socket is connected
		*/
		address() : Object;
		/**
		*opens the connection for the existing socket to which it is applied
		*/
		connect(port: Number, host?: String, callback?: Function) : void;
		/**
		*closes the socket to which it is applied
		*/
		destroy() : void;
		/**
		*triggers the event for the object, optionally passing arguments to the listener(s)
		*/
		emit(event: String, ...args: any[]) : void;
		/**
		*closes the socket to which it is applied
		*/
		end() : void;
		/**
		*returns an array of listeners defined for the specified event in the object
		*/
		listeners(event: String) : Array<Function>;
		/**
		*installs a new listener function to be called when the specified event is triggered by the object on which it is applied
		*/
		on(event: String, listener: Function) : void;
		/**
		*sets a new listener function to be called only once when the specified event is triggered for the first time by the object on which it is applied
		*/
		once(event: String, listener: Function) : void;
		/**
		*pauses the 'data' event triggered for the given socket
		*/
		pause() : void;
		/**
		*removes all the listeners of the specified event for the object to which it is applied
		*/
		removeAllListeners(event?: String) : void;
		/**
		*removes the specified listener from the listener array of the event for the object to which it is applied
		*/
		removeListener(event: String, listener: Function) : void;
		/**
		*resumes a paused socket
		*/
		resume() : void;
		/**
		*sets the encoding for data received from the socket to which it is applied
		*/
		setEncoding(encoding: String) : void;
		/**
		*defines the maximum number of listeners that can be added per event for the object to which it is applied
		*/
		setMaxListeners(maxValue: Number) : void;
		/**
		*disables Nagle's algorithm for the socket to which it is applied
		*/
		setNoDelay(noDelay: Boolean) : void;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: Buffer, encoding?: String) : Boolean;
		/**
		*writes data to the socket to which it is applied
		*/
		write(data: String, encoding?: String) : Boolean;
	}interface SocketSync {
		/**
		*returns an object containing two attributes, address and port, representing the address where the client SocketSync is connected
		*/
		address() : Object;
		/**
		*opens the connection for the existing SocketSync to which it is applied
		*/
		connect(port: Number, host?: String) : void;
		/**
		*closes the SocketSync method to which it is applied
		*/
		destroy() : void;
		/**
		*closes the SocketSync to which it is applied
		*/
		end() : void;
		/**
		*returns in a Buffer object the data read from the SocketSync instance to which it is applied
		*/
		read(timeOut?: Number) : Buffer;
		/**
		*sets the encoding for data received from the SocketSync to which it is applied
		*/
		setEncoding(encoding: String) : void;
		/**
		*disables Nagle's algorithm for the SocketSync to which it is applied
		*/
		setNoDelay(noDelay: Boolean) : void;
		/**
		*writes data to the SocketSync to which it is applied
		*/
		write(data: String, encoding: String) : Boolean;
		/**
		*writes data to the SocketSync to which it is applied
		*/
		write(data: Buffer, encoding: String) : Boolean;
	}
	interface Solution {
		/**
		*Name of the solution
		*/
		name: String;
		/**
		*closes the current solution and reopens the default solution
		*/
		close() : void;
		/**
		*method returns the port number on which Wakanda Server's debug service is listening for the solution
		*/
		getDebuggerPort() : Number;
		/**
		*returns the folder containing the solution file (named 'SolutionName.waSolution')
		*/
		getFolder(kind?: String, format?: Boolean) : Folder;
		/**
		*returns the folder containing the solution file (named 'SolutionName.waSolution')
		*/
		getFolder(kind?: String, format?: String) : Folder;
		/**
		*returns the solution-level file associated with the role you passed as a parameter
		*/
		getItemsWithRole(role: String) : File;
		/**
		*returns a reference or the path to the file containing the solution setting whose ID you passed in settingID
		*/
		getSettingFile(settingID: String, kind?: String, format?: Boolean) : void;
		/**
		*returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
		*/
		getWalibFolder(kind: String, format?: Boolean) : Folder;
		/**
		*returns Wakanda Server's "walib" folder, containing the libraries and services available client-side
		*/
		getWalibFolder(kind: String, format?: String) : Folder;
	}


interface SystemWorker {
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```
     * var workerProxy = new SystemWorker( 'sh -c ls -la /Users/<user>/Desktop' );
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onmessage = function ( message ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * // For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
     * // In real application, keep working in parallels and do not pause the current thread
     * workerProxy.wait();
     * ```
     * 
     * #### Example 2: Pass parameters, quotes and env variables options to the system worker
     * ```
     * var myFolder = new Folder( 'PROJECT/backend' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerProxy = new SystemWorker( 'sh -c ls -la {file_ref}', options);
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns a system worker proxy
     */
    new (cli: String, options?: SystemWorkerOptions): SystemWorkerProxy;
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```
     * var workerProxy = new SystemWorker( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onmessage = function ( message ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * // For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
     * // In real application, keep working in parallels and do not pause the current thread
     * workerProxy.wait();
     * ```
     * 
     * #### Example 2: Pass parameters, quotes and env variables options to the system worker
     * ```
     * var myFolder = new Folder( 'PROJECT/backend' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerProxy = new SystemWorker( ['sh', '-c', 'ls -la {file_ref}'], options);
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns a system worker proxy
     */
    new (cli: String[], options?: SystemWorkerOptions): SystemWorkerProxy;
    /**
     * Calls a system worker (asynchronous mode).
     * Use the system worker proxy to get the result.
     * 
     * #### Example 1: Do a simple CLI command
     * ```
     * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
     * var workerResult = SystemWorker.exec( 'sh -c ls -la /Users/<user>/Desktop' );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 2: Get the result and display the ouput
     * ```
     * // Launch "git" executable with "--version" parameter
     * // Store the result (Buffer) in a variable
     * var workerResult = SystemWorker.exec( 'git --version' );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 3: Pass root folder options to the system worker
     * ```
     * var options = { folder: '/Users/yann/Desktop' };
     * var workerResult = SystemWorker.exec( 'sh -c ls -la', options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 4: Pass parameters, quotes and env variables options to the system worker
     * ```
     * var myFolder = new Folder( 'PROJECT/backend' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerResult = SystemWorker.exec( 'sh -c ls -la {file_ref}', options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute
     * @param options Describes command line options
     * @returns Returns the exit status, stdout and sterr
     */
    exec(cli: String, options?: SystemWorkerOptions): SystemWorkerResult;
    /**
     * Calls to system worker and waits for its response (synchronous mode).
     * 
     * #### Example 1: Do a simple CLI command
     * ```
     * // Launch "sh" executable with "-c" parameter and "ls -la /Users/<user>/Desktop" as the action to do
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la /Users/<user>/Desktop'] );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 2: Get the result and display the ouput
     * ```
     * // Launch "git" executable with "--version" parameter
     * // Store the result (Buffer) in a variable
     * var workerResult = SystemWorker.exec( ['git', '--version'] );
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 3: Pass root folder options to the system worker
     * ```
     * var options = { folder: '/Users/yann/Desktop' };
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la'], options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * #### Example 4: Pass parameters, quotes and env variables options to the system worker
     * ```
     * var myFolder = new Folder( 'PROJECT/backend' );
     * var options = {
     *     parameters : { folder_ref : myFolder },
     *     quote : '"',
     *     variables : { ENV_VAR_1 : 'value1' }
     * };
     * var workerResult = SystemWorker.exec( ['sh', '-c', 'ls -la {file_ref}'], options);
     * console.log(workerResult.output.toString());
     * ```
     * 
     * @warning The system worker can only launch executable applications. All shell instructions must be preceded by a command line interpreter like `bash`, `sh` or `cmd` depending of the OS.
     * @param cli Command line to execute. First element is the executable. Then all next elements describe the parameters
     * @param options Describes command line options
     * @returns Returns the exit status, stdout and sterr
     */
    exec(cli: String[], options?: SystemWorkerOptions): SystemWorkerResult;
}

interface SystemWorkerOptions {
    /**
     * Root folder for the worker executable. Native relative file paths will be resolved with this folder as parent.
     */
    folder?: String | Folder;
    /**
     * Passes named parameters to command line. `{name}` is replaced with the value of the `options.parameters.name` attribute. Parameters can be of type String, Number, File or Folder.
     */
    parameters?: Object;
    /**
     * Escapes character (can be an empty string). Named parameters may need to be escaped depending on the system worker and OS on which it is executed.
     */
    quote?: String;
    /**
     * String data to pass to system worker.
     */
    stdin?: String;
    /**
     * Defines custom environment variables for the system worker.
     */
    variables?: Object;
    /**
     * (default: `false`) `true` to terminate the process tree started by the system worker once terminated, `false` otherwise.
     */
    kill_process_tree?: Boolean;
}

interface SystemWorkerResult {
    /**
     * Integer value depending on the executable. If the executable considers the operation has been executed successfully, exitStatus value is `0`.
     */
    exitStatus: Number;
    /**
     * stdout result of the command.
     */
    ouput: Buffer;
    /**
     * stderr result of the command.
     */
    error: Buffer;
}

interface SystemWorkerEvent {
    /**
     * Either `message`, `error` or `terminate`.
     */
    type: String;
    /**
     * SystemWorker proxy which triggered the callback.
     */
    target: SystemWorkerProxy;
    /**
     * Content of stdout.
     */
    data?: String | Buffer;
    /**
     * `true` if the command line has been correctly executed.
     */
    hasStarted?: Boolean;
    /**
     * Exit status returned by the executed command.
     */
    exitStatus?: Number;
    /**
     * `true` if the user called `terminate()`.
     */
    forced?: Boolean;
}

interface SystemWorkerProxy {
    /**
     * Callback for system worker errors.
     * 
     *```
     * // Receives an error
     * workerProxy.onerror = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     *```
     */
    onerror: (event: SystemWorkerEvent) => void;
    /**
     * Callback for system worker messages.
     * The message can be sent into multiple chunks.
     *
     *```
     * // Receives a message chunck
     * workerProxy.onmessage = function ( event ) {      
     *     console.log( event.type +': '+ event.data );
     * }
     *```
     */
    onmessage: (event: SystemWorkerEvent) => void;
    /**
     * Callback when the external process is terminating.
     * 
     * ```
     * // Receives an "end" event from system worker
     * workerProxy.onterminated = function ( event ) {
     *     console.log( event.type +': with exitStatus:'+ event.exitStatus );
     * }
     * ```
     */
    onterminated: (event: SystemWorkerEvent) => void;
    /**
     * Closes the input stream (stdin) of the external process. 
     * Useful when an attempt to write in the stdin of the external process with `postMessage()` is stuck. `endOfInput()` will release the execution.
     * 
     * ```
     * // Create some data to gzip
     * var input = new Buffer( 'abcde', 'ascii' );
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( input );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     * ```
     */
    endOfInput(): void;
    /**
     * Returns system worker information.
     */
    getInfos(): Object;
    /**
     * Write on the input stream (stdin) of the external process.
     * 
     * ```
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( 'abcde' );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     */
    postMessage(stdin: String): void;
    /**
     * Write on the input stream (stdin) of the external process.
     * 
     * ```
     * // Create some data to gzip
     * var input = new Buffer( 'abcde', 'ascii' );
     * // Create an asynchronous system worker
     * var worker = new SystemWorker( 'gzip' );
     * // Send the compressed file on stdin.
     * worker.postMessage( input );
     * // Note that we call endOfInput() to indicate we're done. gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
     * worker.endOfInput();
     */
    postMessage(stdin: Buffer): void;
    /**
     * Set the type of data exchanged in the SystemWorker through the onmessage and onerror properties.
     * 
     * ```
     * workerProxy.setBinary(true);
     * ```
     * 
     * @param binary `true` to return binary data by `onmessage` and `onerror`, `false` otherwise.
     */
    setBinary(binary: Boolean): void;
    /**
     * Forces the system worker to terminate its execution.
     * 
     * ```
     * workerProxy.terminate();
     * workerProxy.terminate(true, true);
     * ```
     * 
     * @param waitForTermination (default: `false`) `true` if the current thread must wait for the system worker execution to end
     * @param killProcessTree (default: `false`) `true` if the system worker and all his childs must end
     */
    terminate(waitForTermination?: Boolean, killProcessTree?: Boolean): void;
    /**
     * Wait for the end of the system worker execution.
     * 
     * ```
     * workerProxy.wait(1000);
     * workerProxy.wait();
     * ```
     * 
     * @param timeout Millisecond to wait for.
    */
    wait(timeout?: Number): Boolean;
}



interface TextStream {
    /**
     * Creates a textStream.
     * 
     * ```
     * // The file does not have to exist
     * var myStream = TextStream( 'PROJECT/backend/my-streamed-file.js', 'write' );
     * // Creates the file if it does not exist
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param file Binary text file to reference. The file does not to exist
     * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
     * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
     */
    new (file: String, mode: String, charset?: Number): TextStream;
    /**
     * Creates a textStream.
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
     * 
     * @param file Binary text file to reference. The file does not to exist
     * @param mode Opens a stream in `Write`, `Read` or `Overwrite` mode
     * @param charset (default: 7) Character set of the text. See more details on [charset](http://doc.wakanda.org/home2.en.html#/Files-and-Folders/TextStream/TextStream.301-684310.en.html)
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
     * 
     * @returns `true` if the cursor position is at the end of file, `false` otherwise.
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
     * 
     * @param nbBytes (default: `TextStream.getSize()`) Number of bytes to read
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
     * 
     * ```
     * var myFile = File( 'PROJECT/backend/my-streamed-file.js' );
     * var myStream = TextStream( file, 'write' );
     * myStream.write( 'Hello '+ Date.now() +' !\n' );
     * // Important to close the stream every time.
     * myStream.close();
     * ```
     * 
     * @param text String to write in the TextStream
     */
    write(text: String): void;
}


interface User {
    /**
     * Describes the user full name.
     */
    fullName: String;
    /**
     * Describes the internal user ID.
     */
    ID: String;
    /**
     * Describe the user name.
     */
    name: String;
    /**
     * Defines the user storage object.
     * This object is maintained as long as the server is alive. It is not stored after the server shuts down. This property is user-related and not session-related.
     * 
     * ```
     * directory.currentUser.storage.setItem( 'itemInBox', 19 );
     * var result = directory.currentUser.storage.getItem( 'itemInBox' );
     * console.log(result);
     * // 19
     * ```
     */
    storage: LockableKeyValueStorage;
    /**
     * Get all groups where the user belongs to.
     * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
     * @returns Returns an array of group
     */
    getParents(level?: Boolean): Array<Group>;
    /**
     * Assignes a user to one or more groups.
     * 
     * ```
     * myUser.putInto( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    putInto(...groupList: String[]): void;
    /**
     * Assignes a user to one or more groups.
     * 
     * ```
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
      * myUser.putInto( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    putInto(...groupList: Group[]): void;
    /**
     * Removes the user from the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     */
    remove(): void;
    /**
     * Removes the user from group list.
     * 
     * ```
     * myUser.removeFrom( 'sales', 'finance' );
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group name
     */
    removeFrom(...groupList: String[]): void;
    /**
     * Removes the user from group list.
     * 
     * ```
     * var group1 = directory.group( 'finance' ); 
     * var group2 = directory.addGroup( 'account' );
     * myUser.removeFrom( group1 , group2 )
     * ```
     * 
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param groupList Describes an array of group object
     */
    removeFrom(...groupList: Group[]): void;
    /**
     * Update the user password in the directory.
     * @warning All updates done to the `directory` are temporary. Use `directory.save()` to save all updates on disk.
     * @param password The new password to save
     */
    setPassword(password: String): void;
}interface Worker {
	/**
	*constructor of the class objects of the dedicated Worker type
	*/
	new(scriptPath: String) : Worker;
	/**
	*(WebSockets only) Data type of the client message
	*/
	binaryType: String;
	/**
	*(WebSockets only) Callback to trigger when the client socket is closed
	*/
	onclose: Function;
	/**
	*Callback to trigger when an error is reported
	*/
	onerror: Function;
	/**
	*Callback to trigger when a message is received
	*/
	onmessage(): void;
	/**
	*ends the thread from which it is called
	*/
	close() : void;
	/**
	*exchange data between a parent Worker proxy and a dedicated Web worker
	*/
	postMessage(messageData: any) : void;
	/**
	*terminate the dedicated worker execution
	*/
	terminate() : void;
	/**
	*allows a thread to handle events and to continue to exist after the complete code executes
	*/
	wait(timeout?: Number) : Boolean;
}


interface XMLHttpRequest {
    /**
     * Creates a XMLHttpRequest (XHR).
     * 
     * ```
     * var xhr = new XMLHttpRequest();
     * 
     * // XHR event handler. 
     * xhr.onreadystatechange = function() {
     * 
     *     // Get xhr states
     *     var state = this.readyState;
     *
     *     // Only consider the "done" state. Skip others
     *     if (state !== 4) { 
     *         return;
     *     }
     *
     *     // Get xhr response headers
     *     var headers = this.getAllResponseHeaders();
     *
     *     // Get xhr response text contents
     *     var result = this.responseText;
     *
     *     // Display the result when received
     *     console.log( result );
     * };
     * 
     * // Get server rest info
     * // Synchronous xhr request
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * 
     * // Send the XHR request
     * xhr.send();
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param proxy `{host: String, port: Number}` Overrides the system proxy settings
     */
    new (proxy?: Object): XMLHttpRequest;
    /**
     * Current state of the request.
     * See [doc center](http://doc.wakanda.org/home2.en.html#/Wakanda Studio/0.Beta/readyState.303-867831.en.html) for more details about xhr states.
     */
    readonly readyState: number;
    /**
     * Response body part (other than text).
     */
    readonly response: any;
    /**
     * Text response entity body.
     */
    readonly responseText: string;
    /**
     * Data type of the response ("text" or "blob").
     */
    responseType: string;
    /**
     * HTTP status code of the response.
     */
    readonly status: number;
    /**
     * HTTP status text of the response.
     */
    readonly statusText: string;
    /**
     * Defines the event listener function that will handle the various states of the XMLHttpRequest.
     * See [doc center](http://doc.wakanda.org/home2.en.html#/Wakanda Studio/0.Beta/readyState.303-867831.en.html) for more details about xhr states.
     */
    onreadystatechange: (this: XMLHttpRequest, event: Event) => any;
    /**
     * Returns all HTTP headers from the response of the XMLHttprequest.
     */
    getAllResponseHeaders(): String;
    /**
     * Returns the value of a specific header field in the response of the XMLHttpRequest.
     */
    getResponseHeader(header: String): String;
    /**
     * Declares the HTTP method and the URL of the XMLHttpRequest.
     * @param method HTTP method
     * @param url URL of the request
     */
    open(method: String, url: String): void;
    /**
     * Sends the XHR opened request.
     * 
     * #### Example 1: Basic usage
     * ```
     * var xhr = new XMLHttpRequest();
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * xhr.send();
     * ```
     * 
     * #### Example 2: Upload file
     * See [doc center](http://doc.wakanda.org/home2.en.html#/HTTP-REST/Interacting-with-the-Server/upload.303-1158401.en.html) for more details about upload
     * ```
     * var xhr = new XMLHttpRequest();
     * xhr.open('PUT', 'http://127.0.0.1:8081/rest/$upload?$rawPict=true');
     * xhr.setRequestHeader( 'Content-Type', 'image/jpeg' );
     * xhr.onreadystatechange = function() {
     *     if (this.readyState !== 4) { 
     *         return;
     *     }
     *     // Displays the upload result ID to use as reference in Wakanda DB
     *     console.log( 'Upload ID:'+ xhr.responseText );
     * }
     * xhr.send( 'PROJECT/backend/my-image.jpg' );
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param data Data to send in the request `body`
     */
    send(data?: String): void;
    /**
     * Sends the XHR opened request.
     * 
     * #### Example 1: Basic usage
     * ```
     * var xhr = new XMLHttpRequest();
     * xhr.open( 'GET', 'http://127.0.0.1:8081/rest/$info' );
     * xhr.send();
     * ```
     * 
     * #### Example 2: Upload file
     * See [doc center](http://doc.wakanda.org/home2.en.html#/HTTP-REST/Interacting-with-the-Server/upload.303-1158401.en.html) for more details about upload
     * ```
     * var myFile = File( 'PROJECT/backend/my-image.jpg' );
     * var xhr = new XMLHttpRequest();
     * xhr.open('PUT', 'http://127.0.0.1:8081/rest/$upload?$rawPict=true');
     * xhr.setRequestHeader( 'Content-Type', 'image/jpeg' );
     * xhr.onreadystatechange = function() {
     *     if (this.readyState !== 4) { 
     *         return;
     *     }
     *     // Displays the upload result ID to use as reference in Wakanda DB
     *     console.log( 'Upload ID:'+ xhr.responseText );
     * }
     * xhr.send( myFile );
     * ```
     * 
     * @warning Sends synchronous XHR request.
     * @param data Data to send in the request `body`
     */
    send(data?: File): void;
    /**
     * Allows the request to be authenticated on the remote server with a client certificate, when necessary.
     * @param keyPath Path to the PEM format private key
     * @param certificatePath Path to the local PEM format certificate
     */
    setClientCertificate(keyPath: String, certificatePath: String): void;
    /**
     * Set the value of a specific header field of the XMLHttpRequest.
     * 
     * ```
     * var xhr = new XMLHttpRequest();
     * xhr.open('GET', 'http://127.0.0.1:8081/rest/$info');
     * xhr.setRequestHeader('X-Test', 'one');
     * xhr.setRequestHeader('X-Test', 'two');
     * xhr.send();
     * ```
     * 
     * @param header The header field name
     * @param value The header field value
     */
    setRequestHeader(header: String, value: String): void;
}