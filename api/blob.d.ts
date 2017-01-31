/// <reference path="./buffer.d.ts" />
/// <reference path="./file.d.ts" />

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
    new (size?: Number, defaultByteValue?: Number, mimeType?: String): WAKBlobInstance;
}

interface WAKBlobInstance {
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
     * or
     * ```
     * var myFile = new File( 'PROJECT/backend/blob_copy.js' );
     * var myBlob = new Blob( 20 ); 
     * myBlob.copyTo( myFile );
     * ```
     * 
     * #### Example 2: Copy a file
     * ```
     * var myFile = new File( 'PROJECT/backend/bootstrap.js' );
     * myFile.copyTo( 'PROJECT/backend/bootstrap_copy.js' );
     * ```
     * or
     * ```
     * var myFile = new File( 'PROJECT/backend/bootstrap.js' );
     * var myFileCopy = new File( 'PROJECT/backend/bootstrap_copy.js' );
     * myFile.copyTo( myFileCopy );
     * ```
     * 
     * @param destination Destination file
     * @param overwrite `true` to override existing file if any, `false` otherwise
     */
    copyTo(destination: String, overwrite?: Boolean): void;
    copyTo(destination: WAKFileInstance, overwrite?: Boolean): void;
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
     * var myFile = new File( 'PROJECT/backend/bootstrap.js' );
     * var myBlobSlice = myFile.slice( 0, 100 );
     * console.log( myBlobSlice.toString() );
     * ```
     * 
     * @param start (default: 0)
     * @param end (default: blob.size)
     * @param mimeType
     */
    slice(start?: Number, end?: Number, mimeType?: String): WAKBlobInstance;
    /**
     * Returns a buffer object containing a copy of the blob bytes.
     */
    toBuffer(): WAKBufferInstance;
    /**
     * Get a string representation of the blob contents.
     */
    toString(stringFormat?: String): String;
}