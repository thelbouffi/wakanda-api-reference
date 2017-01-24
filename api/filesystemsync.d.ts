///<reference path="./directoryentrysync.d.ts" />


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