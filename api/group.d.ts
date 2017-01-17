///<reference path="./user.d.ts" />

interface Group {
	/**
	 * Describes the internal group ID
	 */
	ID: String;
	/**
	 * Describes the group name
	 */
	name: String;
	/**
	 * Returns all children directory groups starting with `filterString`
	 * @param filterString Describe the filtering string
	 * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
	 * @returns Returns an array of group
	 * 
	 * ```
	 * var myGroups = directory.filterChildren("*cien");
	 * ```
	 */
	filterChildren(filterString: String, level?: Boolean) : Array<Group>;
	/**
	 * Returns all children directory groups starting with `filterString`
	 * @param filterString Describe the filtering string
	 * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
	 * @returns Returns an array of group
	 * 
	 * ```
	 * var myGroups = directory.filterParents("*cien");
	 * ```
	 */
	filterParents(filterString: String, level?: Boolean) : Array<Group>;
	/**
	 * Get children groups belonging to the current group
	 * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
	 */
	getChildren(level?: Boolean) : Array<Group>;
	/**
	 * Get parent groups to which the current group belongs
	 * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
	 */
	getParents(level?: Boolean) : Array<Group>;
	/**
	 * Get users belonging to the current group
	 * @param level (default: `false`) Set to `true` if you want first level results. Set to `false` otherwise.
	 */
	getUsers(level?: Boolean) : Array<User>;
	/**
	 * Assignes a group to one or more groups
	 * @param groupList Describes an array of group name
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot. 
	 * 
	 * ```
	 * myGroup.putInto( 'sales' );
	 * ```
	 */
	putInto(...groupList: String[]) : void;
	/**
	 * Assignes a group to one or more groups
	 * @param groupList Describes an array of group object
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot. 
	 * 
	 * ```
	 * var SalesGroup = directory.group( 'sales' ); 
	 * myGroup.putInto( SalesGroup );
	 * ```
	 */
	putInto(...groupList: Group[]) : void;
	/**
	 * Removes the group from the directory
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot. 
	 */
	remove() : void;
	/**
	 * Removes the group from group list
	 * @param groupList Describes an array of group name
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot. 
	 * 
	 * ```
	 * myGroup.removeFrom( 'sales', 'finance' );
	 * ```
	 */
	removeFrom(...groupList: String[]) : void;
	/**
	 * Removes the group from group list
	 * @param groupList Describes an array of group object
	 * @warning All updates done to the `directory` are temporary. Use `directory.save()` in order to survive a reboot. 
	 * 
	 * ```
	 * var group1 = directory.group( 'finance' ); 
	 * var group2 = directory.addGroup( 'account' );
 	 * myGroup.removeFrom( group1 , group2 )
	 * ```
	 */
	removeFrom(...groupList: Group[]) : void;
	/**
	 * Sets a local name (alias) to the group object corresponding to a remote group from a LDAP directory
	 * @warning Requires LDAP component
	 */
	setAlias(alias: String) : void;
}