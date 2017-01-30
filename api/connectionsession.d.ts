///<reference path="./group.d.ts" />
///<reference path="./keyvaluestorage.d.ts" />

interface ConnectionSession {
    /**
     * Describes the session expiration date.
     */
    expiration: Date;
    /**
     * Describes the session internal ID.
     */
    ID: String;
    /**
     * Describes the session lifetime (default: 3600 seconds).
     */
    lifeTime: Number;
    /**
     * Describes the user session storage.
     */
    storage: KeyValueStorage;
    /**
     * Describes the session user.
     */
    user: User;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group name
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: String): Boolean;
    /**
     * Check if the session belongs to the group.
     * @param Describes a group object
     * @returns Returns `true` if the user belongs to the group, `false` otherwise.
     */
    belongsTo(group: Group): Boolean;
    /**
     * returns true if the current session belongs to the group and throws an error if false.
     */
    checkPermission(group: String): Boolean;
    /**
     * returns true if the current session belongs to the group and throws an error if false.
     */
    checkPermission(group: Group): Boolean;
    /**
     * makes the user session expire.
     */
    forceExpire(): void;
    /**
     * temporarily promotes the current session into the group.
     */
    promoteWith(group: Group): Number;
    /**
     * temporarily promotes the current session into the group.
     */
    promoteWith(group: String): Number;
    /**
     * stops the temporary promotion set for the current session using the promoteWith( ) method.
     */
    unPromote(token: Number): void;
}