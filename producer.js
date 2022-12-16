const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["localhost:9092"],
});

async function bootstrap() {
  const producer = kafka.producer();
  await producer.connect();

  await producer.send({
    topic: "payments.create",
    messages: [
      {
        value: JSON.stringify({ id: 10000, amount: 30000, userId: 3000 }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
