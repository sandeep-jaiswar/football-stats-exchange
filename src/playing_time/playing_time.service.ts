import { Injectable } from '@nestjs/common';
import { UpdatePlayingTimeDto } from './dto/update-playing_time.dto';
import { PlayingTime } from './entities/playing_time.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import puppeteer from 'puppeteer';

@Injectable()
export class PlayingTimeService {
  constructor(
    @InjectRepository(PlayingTime)
    private readonly repository: Repository<PlayingTime>,
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
    return `This action returns all playingTime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playingTime`;
  }

  update(id: number, updatePlayingTimeDto: UpdatePlayingTimeDto) {
    return `This action updates a #${id} playingTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} playingTime`;
  }
}
