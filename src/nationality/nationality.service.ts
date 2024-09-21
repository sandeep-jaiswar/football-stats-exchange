import { Injectable } from '@nestjs/common';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import puppeteer from 'puppeteer';
import { Nationality } from './entities/nationality.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NationalityService {
  constructor(
    @InjectRepository(Nationality)
    private readonly repository: Repository<Nationality>,
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
      return await [...new Set(nations)].forEach(async (name) => {
        await this.repository.save({
          name,
        });
      });
    } catch (error) {
      console.error('Error while scraping job listings:', error);
    } finally {
      await browser.close();
    }
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} nationality`;
  }

  update(id: number, updateNationalityDto: UpdateNationalityDto) {
    return `This action updates a #${id} nationality`;
  }

  remove(id: number) {
    return `This action removes a #${id} nationality`;
  }
}
