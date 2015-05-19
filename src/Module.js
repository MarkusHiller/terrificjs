/**
 * Base class for the different modules.
 *
 * @author Remo Brunschwiler
 * @namespace T
 * @class Module
 *
 * @constructor
 * @param {Node} ctx
 *      The context node
 * @param {Sandbox} sandbox
 *      The sandbox to get the resources from
 */
/* global Connector */
function Module(ctx, sandbox) {
	/**
	 * Contains the context node.
	 *
	 * @property ctx
	 * @type Node
	 */
	this._ctx = ctx;

	/**
	 * The sandbox to get the resources from.
	 *
	 * @property _sandbox
	 * @type Sandbox
	 */
	this._sandbox = sandbox;

	/**
	 * The emitter.
	 *
	 * @property _events
	 * @type Connector
	 */
	this._events = new Connector(sandbox);
}

/**
 * Template method to start the module.
 *
 * @method start
 * @param {Function} callback
 *      The synchronize callback
 */
Module.prototype.start = function (callback) {
	callback();
};

/**
 * Template method to stop the module.
 *
 * @method stop
 */
Module.prototype.stop = function () {
	this._events.disconnect();
};