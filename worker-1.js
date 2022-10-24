const amqplib = require('amqplib/callback_api');
const queue = 'payment';
const CONN_URL = process.env.RABBITMQ_URL;

amqplib.connect(CONN_URL, (err, conn) => {
  if (err) throw err;

  // Listener
  conn.createChannel((err, ch1) => {
    if (err) throw err;

    ch1.assertQueue(queue);

    ch1.consume(queue, (msg) => {
      if (msg !== null) {
        console.log(msg.content.toString());
        ch2.ack(msg);
      } else {
        console.log('Consumer cancelled by server');
      }
    });
  });
});