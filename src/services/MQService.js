const amqplib = require('amqplib');
const CONN_URL = process.env.RABBITMQ_URL;

const publishToQueue = async (queueName, data) => {
    
    const conn = await amqplib.connect(CONN_URL);

    const ch1 = await conn.createChannel();
    await ch1.assertQueue(queueName);
    
    ch1.sendToQueue(queueName, new Buffer(data));
}

process.on('exit', (code) => {
   ch.close();
   console.log(`Closing rabbitmq channel`);
});

module.exports.publishToQueue = publishToQueue;