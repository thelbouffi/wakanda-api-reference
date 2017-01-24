///<reference path="./filesystemsync.d.ts" />
///<reference path="./fileentrysync.d.ts" />
///<reference path="./entrysync.d.ts" />
///<reference path="./folder.d.ts" />
///<reference path="./directoryreadersync.d.ts" />

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
	