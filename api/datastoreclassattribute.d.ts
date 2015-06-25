///<reference path="./datastoreclass.d.ts" />

declare module Wakanda {
		
	interface DatastoreClassAttribute {
	/**
		*Default format for the attribute
		*/
		defaultFormat: Object;
		/**
		*Default value defined for the attribute
		*/
		defaultValue: String;
		/**
		*True if the attribute is an identifier
		*/
		identifying: Boolean; //TODO : OR Undefined;
		/**
		*True if the attribute is indexed
		*/
		indexed: Boolean; //TODO : OR Undefined;
		/**
		*Attribute kind: "storage", "calculated", "relatedEntity", or "alias"
		*/
		kind: String;
		/**
		*Name of the attribute
		*/
		name: String;
		/**
		*Datastore class of the attribute
		*/
		owner: DatastoreClass;
		/**
		*Path to the related data
		*/
		path: String;
		/**
		*True if the calculated attribute does not have a onSet accessor
		*/
		readOnly: Boolean; //TODO : OR Undefined;
		/**
		*True for a related attribute, false otherwise
		*/
		related: Boolean;
		/**
		*True if the attribute is the one attribute of a 1->n relation, false otherwise
		*/
		relatedOne: Boolean;
		/**
		*True if the related attribute has been resolved, false otherwise
		*/
		resolved: Boolean;
		/**
		*True if the reverse path option is set for the attribute, false otherwise
		*/
		reversePath: Boolean;
		/**
		*Scope for the attribute
		*/
		scope: String;
		/**
		*True if the attribute is not related, false otherwise
		*/
		simple: Boolean;
		/**
		*Type of the attribute
		*/
		type: String;
	}
	
}