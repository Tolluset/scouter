import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/coins')
  getCoinMarketAll() {
    return this.appService.getCoinMarketAll();
  }

  @Get('/coins/:coin')
  getCoinPrice(@Param('coin') coin: string) {
    return this.appService.getCoinPrice(coin);
  }

  @Get('/coins/:coin/days')
  getCoinCandles(@Param('coin') coin: string) {
    return this.appService.getCoinCandles(coin);
  }
}
