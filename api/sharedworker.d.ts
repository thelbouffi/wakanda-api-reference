/// <reference path="./port.d.ts" />

/**
 * Here is an example of a worker file
 * 
 * Callback to trigger when a new caller creates a SharedWorker proxy object
 * 
 * ```
 * onconnect: Function;
 * ```
 * 
 * Get port to communicate with the worker proxy.
 * Always use `ports[0]`.
 * 
 * ```
 * ports: Array<Port>;
 * ```
 * 
 * Close the worker.
 * 
 * ```
 * close() : void;
 * ```
 * 
 * Allows a thread to handle events and to continue to exist after the complete code executes.
 * @warning There is an implicit `wait()` in worker. No need to add another.
 * 
 * ```
 * wait(timeout?: Number) : Boolean;
 * ```
 * 
 * 
 * Worker example
 * 
 * ```
 * // Describes the content of the worker.js file
 * // Called when a new worker is created
 * onconnect = function( msg )
 * {
 *    // Get the worker port for communication with the worker proxy
 *    var workerPort = msg.ports[0];
 * 
 *    // Send a message to the worker proxy. The worker is up and running.
 *    workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *    // Listen for worker proxy messages
 *    workerPort.onmessage = function( event )
 *    {
 *       // We've got a message !
 *       // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *       // Here, `event.data` contains an object: `{type: String, says: String}`
 *       var message = event.data;
 *       switch( message.type )
 *       {
 *         // It's a hello world message
 *         case 'hello':
 *           // Reply to the worker proxy
 *           workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
 *           break;
 * 
 *         // It's a terminate message
 *         case 'close':
 *           // Reply to the worker proxy
 *           workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *           // Close the worker
 *           close();
 *           break;
 *       }
 *    }
 * }
 * ```
 */

interface SharedWorker {
    /**
     * Shared worker constructor.
     * Creates a new shared worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the shared worker thread.
     * Shared workers can be addressed from any thread, they are uniquely identified by their path and name.
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a shared worker proxy
     * 
     * ```
     * // "worker.js" is defined in <PROJECT>/backend/worker.js
     * var myWorkerProxy = new SharedWorker("backend/worker.js", "my-worker-name");
     * ```
     */
    new(scriptPath: String, workerName?: String) : SharedWorkerProxy ;
}

interface SharedWorkerProxy {
    /**
     * Use the proxy port to communicate with the share worker thread.
     * 
     * ```
     * // Create a new SharedWorker and get the proxy worker
     * var myWorkerProxy = new SharedWorker("backend/worker.js", "my-worker-name");
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage('wake-up');
     * ```
     */
    port: Port;
}