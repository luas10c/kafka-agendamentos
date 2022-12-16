import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller({
  path: "payments",
})
export class AppController {
  @MessagePattern("payments.create")
  async createPayment(@Payload() payload: any) {
    setTimeout(() => {
      console.log(payload);
    }, 3000);
  }
}
