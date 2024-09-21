import { Injectable } from '@nestjs/common';
import { UpdatePerformanceDto } from './dto/update-performance.dto';
import puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Performance } from './entities/performance.entity';

@Injectable()
export class PerformanceService {
  constructor(
    @InjectRepository(Performance)
    private readonly repository: Repository<Performance>,
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
    return `This action returns all performance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} performance`;
  }

  update(id: number, updatePerformanceDto: UpdatePerformanceDto) {
    return `This action updates a #${id} performance`;
  }

  remove(id: number) {
    return `This action removes a #${id} performance`;
  }
}
