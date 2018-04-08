# Kafka-Test

- Kafka is pretty much a tool for distributed streaming
- Can be used as a message-passing medium between microservices
- Utilizes a publish & subscribe design facilitated by various components to execute message passing

- Topics
  - how Kafka stores and organizes messages throughout its system. 
  - It's a collection of messages that can be partitioned and replicated.
- Producer
  - *publishes* messages to a topic
- Consumer
  - *subcribes* to a topic
  - processes the messages from assigned topics
- Broker
  - the server that manages to storing of messages in topics
  - Kafka cluster is composed of numerous brokers
- ZooKeeper
  - provides the servers/brokers with metadata on processes in the environment, execute health checks, and more. 

Testing:

1. Download the Kafka Binaries

2. Run the ZooKeeper </br>
``` ./bin/zookeeper-server-start.sh config/zookeeper.properties```

3. Run the Broker </br>
```./bin/kafka-server-start.sh config/server.properties```

4. Download the node packages in the project repo & launch virtualenv with kafka-python </br>
``` npm install ``` </br>
``` pip install kafka-python```

5. Run the consumer </br>
``` node consumer/consumer.js```

6. Run the producer </br>
``` python3 producer/producer.py```

