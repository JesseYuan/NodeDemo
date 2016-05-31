/*
//import events model
var events = require('events');
//create eventEmitter object
var eventEmitter = new events.EventEmitter();

//bind event and event's handle program
eventEmitter.on('eventName', eventHandler);

//trigger event
eventEmitter.emit('eventName');
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();
var eventHandler = function connected() {
  console.log('connect successed!');
  eventEmitter.emit('connectOtherDatabase');
}
var dataHandler = function connectDatabase() {
  console.log('connect successed too!');
  eventEmitter.emit('database')
}
eventEmitter.on('connection', eventHandler);
eventEmitter.on('connectOtherDatabase', dataHandler);
eventEmitter.on('database', function() {
  console.log('get data successed!');
});

eventEmitter.emit('connection');

console.log('over');
