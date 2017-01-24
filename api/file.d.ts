////<reference path="./filesystemsync.d.ts" />
///<reference path="./folder.d.ts" />
///<reference path="./blob.d.ts" />

interface File {
	/**
	 * References a file.
	 * The file does not have to exist.
	 * @param path Absolute path of the file to reference.
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
	 */
	new(path: String) : FileInstance;
	/**
	 * References a file.
	 * The file does not have to exist.
	 * @param folder Folder containing the file
	 * @param fileName Name of the file to reference in the folder path
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
	 */
	new(folder: Folder, fileName: String) : FileInstance;
	/**
	 * Check if the path references a file
	 * @param path Absolute path to a file
	 * @returns `true` is the path references a file, `false` otherwise.
	 * 
	 * ```
	 * var myIsFile = File.isFile( 'PROJECT/backend/bootstrap.js' );
	 * console.log( myIsFile );
	 * // true
	 * ```
	 */
	isFile(path: String) : Boolean;
}

interface FileInstance extends Blob {
	/**
	 * Creation date for the file
	 */
	readonly creationDate: Date;
	/**
	 * `true` if the file exists at the defined path, `false` otherwise.
	 */
	readonly exists: Boolean;
	/**
	 * File extension
	 */
	readonly extension: String;
	// /**
	//  * FileSystem of the object
	//  */
	// readonly filesystem: FileSystemSync;
	/**
	 * Last modification date for the file if any
	 */
	readonly lastModifiedDate: any;
	/**
	 * Name of the file with the extension and without the path
	 */
	readonly name: string;
	/**
	 * Name of the file without the extension
	 */
	readonly nameNoExt: String;
	/**
	 * Parent folder of the file
	 */
	readonly parent: Folder;
	/**
	 * Full path of the file
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
	 * @throws An error if something goes wrong: file already exists, invalid path, ...
	 * @returns `true` if the file is well created
	 * 
	 * ```
	 * var myFile = new File( 'PROJECT/backend/my-created-file.js' );
	 * var myResult = myFile.create();
	 * console.log( myResult );
	 * // true
	 * ```
	 */
	create() : Boolean;
	/**
	 * Returns the size of the free space (expressed in bytes) available on the volume where the File or Folder object is stored
	 */
	getFreeSpace(quotas?: Boolean) : Number;
	/**
	 * Returns the absolute URL of the File or Folder object
	 */
	getURL(encoding?: Boolean) : String;
	/**
	 * Returns the total size (expressed in bytes) of the volume where the File or Folder object is stored
	 */
	getVolumeSize() : Number;
	/**
	 * Moves the file to the specified destination.
	 * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
	 * @param file Destination file path
	 * @param overwrite `true` if the file can be overwritten, `false` otherwise
	 * 
	 * ```
	 * var myFile = new File( 'PROJECT/backend/my-file.js' );
	 * myFile.create();
	 * myFile.moveTo( 'PROJECT/my-moved-file.js', yes );
	 * // myFile always references the "my-file.js" file
	 * // The referenced file did not change with the moveTo() action.
	 * console.log( myFile.path );
	 * ```
	 */
	moveTo(file: File, overwrite?: Boolean) : void;
	/**
	 * Moves the file to the specified destination.
	 * @warning After the `moveTo()` action, the file referenced is still the source file and not the destination file. Therefore, the referenced file does not exist anymore.
	 * @param file Destination file path
	 * @param overwrite `true` if the file can be overwritten, `false` otherwise
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
	 */
	moveTo(file: String, overwrite?: Boolean) : void;
	/**
	 * Removes the file from the disk
	 * @returns `true` if the file is not here, `false` otherwise.
 	 */
	remove() : Boolean;
	/**
	 * Rename the file on disk
	 * @warning The file must exist on disk to be renamed
	 * @warning The file destination must be free
	 * @param name New file name
	 * @returns `true` if the file is successfully renamed
	 * @throws An error if something goes wrong: file already exists, invalid name, ...
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
	 */
	setName(name: String) : Boolean;
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