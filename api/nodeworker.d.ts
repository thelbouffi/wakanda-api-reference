/// <reference path="./port.d.ts" />

/**
 * Here is an example of a worker file.
 * 
 * Callback to trigger when a new caller creates a NodeWorker proxy object.
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
 * Requires a node module. This module should be defined in `PROJECT/node_modules`
 * 
 * ```
 * var myModule = requireNode('module');
 * ```
 * 
 * Worker example
 * 
 * ```
 * // Describes the content of the worker.js file
 * // Called when a new worker is created
 * onconnect = function( msg )
 * {
 *     // Get the worker port for communication with the worker proxy
 *     var workerPort = msg.ports[0];
 * 
 *     // Send a message to the worker proxy. The worker is up and running.
 *     workerPort.postMessage({type: 'connected', says: "I'm alive!"});
 * 
 *     // Listen for worker proxy messages
 *     workerPort.onmessage = function( event )
 *     {
 *         // We've got a message !
 *         // The `event.data` is what the worker proxy sends using `postMessage()`. Could be a String, Number or an Object type.
 *         // Here, `event.data` contains an object: `{type: String, says: String}`
 *         var message = event.data;
 *         switch( message.type )
 *         {
 *             // It's a hello world message
 *             case 'hello':
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'hello', says: 'Hello to you too!'} );
 *                 break;
 * 
 *             // It's a terminate message
 *             case 'close':
 *                 // Reply to the worker proxy
 *                 workerPort.postMessage( {type: 'close', says: 'I will be back!'} );
 *                 // Close the worker
 *                 close();
 *                 break;
 *         }
 *     }
 * }
 * ```
 */

interface NodeWorker {
    /**
     * Node worker constructor.
     * Creates a new node worker in its own thread if it does not exist yet. Then it returns a proxy object to communicate with the node worker thread.
     * Node workers can be addressed from any thread, they are uniquely identified by their path and name.
     * 
     * ```
     * // "worker.js" is defined in PROJECT/backend/worker.js
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * ```
     * 
     * @param scriptPath Describes the path to worker javaScript file
     * @param workerName Describes the worker name
     * @returns Returns a node worker proxy
     */
    new (scriptPath: String, workerName?: String): NodeWorkerProxy;
}

interface NodeWorkerProxy {
    /**
     * Use the proxy port to communicate with the node worker thread.
     * 
     * ```
     * // Create a new NodeWorker and get the proxy worker
     * var myWorkerProxy = new NodeWorker( 'backend/worker.js', 'my-worker-name' );
     * // Get the proxy worker port for communication
     * var workerProxyPort = myWorkerProxy.port;
     * // Send a "wake up" message to the worker
     * workerProxyPort.postMessage( 'wake-up' );
     * ```
     */
    port: Port;
}