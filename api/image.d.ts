///<reference path="./file.d.ts" />

/**
 *
 * @warning The Image API is partially supported on Linux platforms:
 * - You can only load images of the PNG or JPG types
 * - For more details, check [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances.201-659829.en.html)
 */

interface Image {
	/**
	 * Height of the image (pixels)
	 */
	readonly height: Number;
	/**
	 * Size of the image (bytes)
	 */
	readonly length: Number;
	/**
	 * Metadata associated with the image
	 */
	readonly meta: Object;
	/**
	 * Size of the image (bytes)
	 */
	readonly size: Number;
	/**
	 * Width of the image (pixels)
	 */
	readonly width: Number;
	/**
	 * Stores the image object in a file
	 * @param file Path to the file where to save the image
	 * @param type New mime type to apply
	 * @warning Overrides existing files
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
	 */
	save(file: String, type?: String): void;
	/**
	 * Stores the image object in a file
	 * @param file File object where to save the image
	 * @param type New mime type to apply
	 * @warning Overrides existing files
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
	 */
	save(file: File, type?: String): void;
	/**
	 * Updates the image metadata
	 * @param meta Object containing the meta to update
	 * @warning A `save` is required in order to save the metadata on disk
	 * 
	 * ```
	 * var myImage = loadImage( 'PROJECT/backend/my-image.jpg' );
	 * var newMeta = { IPTC: { Keywords: ['vacation', 'snow']}};
	 * myImage.saveMeta( newMeta );
	 * myImage.save( 'PROJECT/backend/my-meta-image.jpg' );
	 * ```
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
	 * returns a thumbnail of the source image
	 * @param width (pixels) Thumbnail width
	 * @param height (pixels) Thumbnai height
	 * @param mode (default: 6) Scale mode to apply. See [doc center](http://doc.wakanda.org/home2.en.html#/Images/Image-Instances/thumbnail.301-663098.en.html) for more details.
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
	 */
	thumbnail(width: Number, height: Number, mode?: Number): Image;
}