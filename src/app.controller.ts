import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getData() {
    const data = {
<<<<<<< HEAD
      message: 'Hello world json',
=======
      message: 'Hello world',
      date: new Date(),
>>>>>>> 64a3dfc (add changes to server)
    };

    return data;
  }
}
