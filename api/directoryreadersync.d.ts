declare module Wakanda {
	
	interface DirectoryReaderSync {
		/**
		*method returns the next block of entries in the directory
		*/
		readEntries() : Array<any>;
	}
	
}