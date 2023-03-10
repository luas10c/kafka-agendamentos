import { NestFactory } from "@nestjs/core";
import { Transport, type MicroserviceOptions } from "@nestjs/microservices";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ["localhost:9092"],
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(7000, "0.0.0.0");
}

bootstrap();
