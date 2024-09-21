import { Injectable } from '@nestjs/common';
import { UpdatePer90MinuteDto } from './dto/update-per_90_minute.dto';
import puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Per90Minutes } from './entities/per_90_minute.entity';

@Injectable()
export class Per90MinutesService {
  constructor(
    @InjectRepository(Per90Minutes)
    private readonly repository: Repository<Per90Minutes>,
  ) {}
  async create() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://fbref.com/en/comps/9/stats/Premier-League-Stats');

    try {
      const nations = await page.$$eval(
        '#div_stats_standard table tbody tr td[data-stat="nationality"] a',
        (elements) => {
          return elements.map((element) => {
            return element.textContent.split(' ')[1];
          });
        },
      );
      return await [...new Set(nations)];
    } catch (error) {
      console.error('Error while scraping job listings:', error);
    } finally {
      await browser.close();
    }
  }

  findAll() {
    return `This action returns all per90Minutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} per90Minute`;
  }

  update(id: number, updatePer90MinuteDto: UpdatePer90MinuteDto) {
    return `This action updates a #${id} per90Minute`;
  }

  remove(id: number) {
    return `This action removes a #${id} per90Minute`;
  }
}
