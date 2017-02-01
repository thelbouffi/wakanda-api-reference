/// <reference path="./datastoreentity.d.ts" />

interface EntityCollection {
	/**
	*Number of entities in the entity collection.
	*
	* `
	*var myCount = ds.Dataclass.length ;
	*`
	*/
	length: Number;
	/**
	*Description of the query as it was actually performed
	* ```javascript
	*var mySet = ds.Employee.query("salary > :1  and employer.name = :2", 2000, "ACME", {queryPath: true})
	*var thePath = mySet.queryPath 
	* ```
	* @param `true`
	* @returns An object describing how the query is performed
	*/
	queryPath: String;
   /**
	*Description of the query just before it is executed
	*
	*```javascript
	*var mySet = ds.Employee.query("salary > :1  and employer.name = :2", 2000, "ACME", {queryPlan: true})
	*var thePath = mySet.queryPlan 
	* ```
	*
	* @param `true` 
	* @returns object containing the detailed description of the query just before it was executed (i.e., the planned query).
	*/
	queryPlan: String;
   /**
	* Adds entity collection passed in the toAdd parameter to the entity collection
	* ```javascript 
	* var myColl = ds.Employee.createEntityCollection(); //Create an empty collection
    * myColl.add(ds.Employee.first()); //Add the first datastore class entity
	* var myQuery = ds.Employee.query("lastName == :1","H*"); //Find some employees
 	* if(myQuery != null) //some entities were found
    * myColl.add(myQuery); //Add the collection itself
	* ```
	* @warning By default, if the atTheEnd parameter is omitted or False, the original type of the entity collection is left unchanged. 
	* @param atTheEnd `true` to add the collection at the end of the current collection, `false` for AnyWhere
	*/
	add(toAdd: EntityCollection, atTheEnd?: Boolean) : void;
   /**
	* Adds the entity passed in the toAdd parameter to the entity collection
	* ```javascript 
	* var myColl = ds.Employee.createEntityCollection(); //Create an empty collection
    * myColl.add(ds.Employee.first()); //Add the first datastore class entity
	* var entity = ds.Employee.find("lastName == :1","H*"); //Find an employee
 	* if(entity != null) //An entity was found
    * myColl.add(entity); //Add the entity 
	* ```
	* @warning By default, if the atTheEnd parameter is omitted or False, the original type of the entity collection is left unchanged. 
	* @param atTheEnd `true` to add the collection at the end of the current collection, `false` for AnyWhere
	*/
	add(toAdd: Entity, atTheEnd?: Boolean) : void;


	/**
	* The and( ) method compares the entity collection to which it is applied and the collection2 and returns a new entity collection that contains only the entities that are referenced in both collections.
    * You can compare sorted and/or unsorted entity collections. 
	* The resulting collection is always unsorted.
	* @param collection2 Collection to compare with
	* @returns Resulting (unsorted) entity collection
	* ```javascript
	* var coll1 = ds.Employee.query("name =:1", "Jones") ;
	* var coll2 = ds.Employee.query("city=:1", "New York") ;
	* var coll3 = coll1.and(coll2);
	* ```
	*/
	and(collection2: EntityCollection) : EntityCollection;
	/**
	* The average method returns the arithmetic average of all the non-null values of attribute for the datastore class or entity collection
	* @param attribute `string` Attribute whose average you want to calculate
	* @param distinct `boolean` Use only entities that have different values
	* @returns Number Arithmetic average of attribute values
	* @warning By default `distinct` : false
	* #### Example 1
	* ``` javascript
	* var averageSalary = ds.Employee.average("salary", true);
	* var mySet = ds.Employee.query( "salary > :1", averageSalary);
	* ```
	* #### Example 2 - With Object Attribute `dimensions`
	* ```javascript
	* var coll = ds.Box.query("dimensions.bLength > :1", 200);
	* var vAvg = coll.average("dimensions.bWidth");
	* ```
	*/
	average(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	
	
	/**
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param distinct Boolean Compute distinct calculations - `false` by default
	* @returns Object containing the following calculations :
	* 	- average	Arithmetic average
	*	- averageDistinct	Average taking only distinct values into account
	*	- count	Number of values
	*	- countDistinct	Number of distinct values
	*	- max	Maximum value
	*	- min	Minimum value
	*	- sum	Sum
	*	- sumDistinct	Sum taking only distinct values into account
	*
	* @warning If you pass more than one attribute and enable the Distinct calculations, they will be valid only for the first attribute.
	* #### Example 1 - Compute Multi Attributes with Distinct
	*  ```javascript
	*  var calculations = ds.Employee.compute("age, salary", true); //the Distinct operations will be performed only on the `age` attribute
	*  var stats = "Average age ="+ calculations.age.averageDistinct+" Total salary ="+calculations.salary.sum);
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, distinct?: Boolean) : Object;
	/** 
	* Compute performs, in a single call, all the statistical calculations on the attribute or list of attributes passed as the parameter for the datastore class or entity collection
	* @param attribute DatastoreClassAttribute,String Attribute(s) for which you want to perform statistical calculations
	* @param groupBy DatastoreClassAttribute,String Attribute(s) on which you want to have subtotal breaks	
	* @returns Object containing all the calculations performed and subtotals
	* #### Example 1 - Compute with groupBy 
	* ```javascript
	*  var stats = ds.Sales.all().compute("benefit, revenues", "country, month");
    * // compute `benefit`and `revenues` values of a Sales class grouped by country and month
	* // for more convenience the returned object can be converted into an array 
	* stats.toArray();
	* ```
	*/
	compute(attribute: DatastoreClassAttribute, groupBy?: DatastoreClassAttribute) : Object;
     

	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the number of entities contained in the entity collection or datastore class
	*/
	count(attribute: String, distinct?: String) : Number;
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: DatastoreClassAttribute): any[];
	/**
	*creates an array and returns in it all the distinct values stored in attribute for the entity collection or datastore class
	*/
	distinctValues(attribute: String): any[];
	/**
	*exports all the entities stored in the object for which it is called in JSON format
	*/
	exportAsJSON(exportFolder: WAKFolderInstance, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*exports all the entities stored the object for which it is called in SQL format
	*/
	exportAsSQL(exportFolder: WAKFolderInstance, numFiles: Number, fileLimitSize: Number, attLimitSize?: Number) : void;
	/**
	*applies the search criteria specified in queryString and (optionally) value to all the entities of the DatastoreClass or EntityCollection and returns the first entity found in an object of type Entity
	*/
	find(queryString: String, ...valueList: any[]) : Entity;
	/**
	*returns the entity in the first position of the entity collection or datastore class
	*/
	first() : Entity;
	/**
	*executes the callbackFn function on each entity in the entity collection in ascending order
	*/
	forEach(callbackFn: Function) : void;
	/**
	*returns the datastore class (object of the DatastoreClass type) of the entity collection
	*/
	getDataClass() : DatastoreClass;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the maximum value among all the values of attribute in the entity collection or datastore class
	*/
	max(attribute: String) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: DatastoreClassAttribute) : Number;
	/**
	*returns the lowest (or minimum) value among all the values of attribute in the entity collection or datastore class
	*/
	min(attribute: String) : Number;
	/**
	*excludes from the entity collection to which it is applied the entities that are in the collection2 and returns the resulting entity collection
	*/
	minus(collection2: EntityCollection) : EntityCollection;
	/**
	*creates a new entity collection that contains all the entities from the entity collection to which it is applied and all the entities from the collection2 entity collection
	*/
	or(collection2: EntityCollection) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: String, sortOrder?: String) : EntityCollection;
	/**
	*sorts the entities in the entity collection or datastore class and returns a new sorted entity collection
	*/
	orderBy(attributeList: DatastoreClassAttribute, sortOrder?: String) : EntityCollection;
	/**
	*searches all the entities in the datastore class or entity collection using the search criteria specified in queryString and returns a new collection containing the entities found
	*/
	query(queryString: String, ...valueList: any[]) : EntityCollection;
	/**
	*permanently removes entities from the datastore
	*/
	remove() : void;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: DatastoreClassAttribute, distinct?: String) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: Boolean) : Number;
	/**
	*returns the sum (i.e., total of all the values) of attribute for the datastore class or entity collection
	*/
	sum(attribute: String, distinct?: String) : Number;
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: String, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: String, skip: Number, top?: Number): any[];
	/**
	*creates and returns a JavaScript array where each element is an object containing a set of properties and values corresponding to the attribute names and values for a datastore class or an entity collection
	*/
	toArray(attributeList: DatastoreClassAttribute, sortList: String, key: Boolean, skip: Number, top?: Number): any[];
	/**
	*returns a string representation of the entity or entity collection
	*/
	toString() : String;
}

interface DatastoreClassAttribute extends String {
	
}