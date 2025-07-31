import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHi() {
    return 'Hi World!!';
  }
}
