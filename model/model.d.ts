///<reference path="./dataclass.d.ts" />
///<reference path="./attribute.d.ts" />
///<reference path="./attributeevent.d.ts" />

interface Model {
	/**
	*adds a new datastore class to the current procedural model
	*/
	addClass(className: String, collectionName: String, scope: String, extendedClass: String, properties?: Object) : DataClass;
	/**
	*allows you to reference and use a remote catalog in your current Wakanda model reference
	*/
	mergeOutsideCatalog(localName: String, mergeInfo: String, user: String, password?: String) : void;
	/**
	*allows you to reference and use a remote catalog in your current Wakanda model reference
	*/
	mergeOutsideCatalog(localName: String, mergeInfo: Object, user: String, password?: String) : void;
	/**
	*allows you to reference and use a remote catalog in your current Wakanda model reference
	*/
	mergeOutsideCatalog(localName: String, mergeInfo: String, user: String, password?: String) : void;
}