import { Injectable } from '@nestjs/common';
import { UpdateExpectedDto } from './dto/update-expected.dto';
import { Expected } from './entities/expected.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import puppeteer from 'puppeteer';

@Injectable()
export class ExpectedService {
  constructor(
    @InjectRepository(Expected)
    private readonly repository: Repository<Expected>,
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

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateExpectedDto: UpdateExpectedDto) {
    return `This action updates a #${id} expected`;
  }

  remove(id: number) {
    return `This action removes a #${id} expected`;
  }
}
