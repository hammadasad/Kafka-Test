// Imports
const kafka = require('no-kafka');

console.log("consumer running");

// Instantiate a consumer
// In order to instantiate, kafka requires a list of brokers to connect to
// module sets a default address
// key/value deserializers
const consumer = new kafka.SimpleConsumer;

// One structure common to both the produce and fetch requests is the message set format
var data = function(messageSet, topic, partition) {
    console.log("Data Handling");
    // Message Set is a sequence of messages with a offset and size info
    //Kafka topics are divided into a number of partitions.
    //Partitions allow you to parallelize a topic by splitting the data
    //in a particular topic across multiple brokers —
    //each partition can be placed on a separate machine
    //to allow for multiple consumers to read from a topic in parallel.
    messageSet.forEach( function(message) {
        console.log(
          topic,
          partition,
          message.offset,
          message.value.toString('utf-8')
        );
    });
};

// Subscribing handler
return consumer.init()
    .then(function() {
        return consumer.subscribe('kafka-test-topic', data);
    });
