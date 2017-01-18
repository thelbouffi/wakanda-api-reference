interface Mutex {

	/**
	 * Mutex constructor.
	 * Mutex allows to control code execution order and to prevent conflicts in a multi-thread application.
	 * It provides a way to pause execution in one thread until a condition is met in another.
	 * @param key Describes the global mutex key
	 * 
	 * ```
	 * // Creates/gets the "writeMutex" mutex available in all threads
	 * var writeMutex = Mutex('writeMutex');
	 * ```
	 */
	new(key: String) : Mutex;
	/**
	 * Locks the mutex or wait until it has been released to lock it; the thread execution is paused until then.
	 * @returns Returns `true` if the mutex is locked
	 * 
	 * ```
	 * var writeMutex = Mutex('writeMutex');
	 * writeMutex.lock();
	 * ```
	 */
	lock() : Boolean;
	/**
	 * Tries to lock the mutex or returns false if it is already locked. The thread execution is not paused.
	 * @returns Returns `true` if the mutex is locked, `false` otherwise
	 * 
	 * ```
	 * var writeMutex = Mutex('writeMutex');
	 * writeMutex.tryLock();
	 * ```
	 */
	tryLock() : Boolean;
	/**
	 * Unlock the mutex. The mutex must be lock in the same thread to be unlock.
	 * @returns Returns `true` if the mutex is unlocked, `false` otherwise
	 * 
	 * ```
	 * var writeMutex = Mutex('writeMutex');
	 * writeMutex.lock();
	 * writeMutex.unlock();
	 * ```
	 */
	unlock() : Boolean;
}