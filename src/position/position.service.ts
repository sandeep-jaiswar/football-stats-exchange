import { Injectable } from '@nestjs/common';
import { UpdatePositionDto } from './dto/update-position.dto';
import puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly repository: Repository<Position>,
  ) {}
  async create() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://fbref.com/en/comps/9/stats/Premier-League-Stats');

    try {
      const positions = await page.$$eval(
        '#div_stats_standard table tbody tr td[data-stat="position"]',
        (elements) => {
          return elements.map((element) => {
            return element.textContent;
          });
        },
      );
      let data = [];
      await [...new Set(positions)].forEach(async (el) => {
        const names = el.split(',');
        data = [...data, ...names];
      });
      return await [...new Set(data)].forEach(async (name) => {
        return await this.repository.save({
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
    return `This action returns a #${id} position`;
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    return `This action removes a #${id} position`;
  }
}
