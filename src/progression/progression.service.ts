import { Injectable } from '@nestjs/common';
import { UpdateProgressionDto } from './dto/update-progression.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import puppeteer from 'puppeteer';
import { Progression } from './entities/progression.entity';

@Injectable()
export class ProgressionService {
  constructor(
    @InjectRepository(Progression)
    private readonly repository: Repository<Progression>,
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
    return `This action returns all progression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progression`;
  }

  update(id: number, updateProgressionDto: UpdateProgressionDto) {
    return `This action updates a #${id} progression`;
  }

  remove(id: number) {
    return `This action removes a #${id} progression`;
  }
}
