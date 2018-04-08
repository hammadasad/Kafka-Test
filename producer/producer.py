# Imports
import kafka.KafkaProducer as kafka
import json

# A producer sends messages aka records!

# Create producer
# We need a list of brokers (bootstrap_servers) & key/value serializers
# Shows the producer how to serialize its outoing messages (string serializer default)
# choosing json here
producer = kafka(bootstrap_servers = 'localhost:9092',
                    value_serializer = lambda value: json.dumps(value).encode('utf-8'))

# Send the messages to the consumer
for aMessage in range(6):
    producer.send('kafka-test-topic', { 'values' : message })
