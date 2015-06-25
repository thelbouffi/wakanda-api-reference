///<reference path="./directoryentrysync.d.ts" />

declare module Wakanda {
	
	interface FileSystemSync {
		/**
		*Name of the file system
		*/
		name: String;
		/**
		*Root directory of the file system
		*/
		root: DirectoryEntrySync;
	}
	
}