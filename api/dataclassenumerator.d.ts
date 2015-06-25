///<reference path="./datastoreclass.d.ts" />

declare module Wakanda {
	
    interface DataClassEnumerator {
        [dataClassName: string]: DatastoreClass;
    }
    
}