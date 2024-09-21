import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly repository: Repository<Team>,
  ) {}
  async create() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://fbref.com/en/comps/9/stats/Premier-League-Stats');

    try {
      const jobTitles = await page.$$eval(
        '#switcher_stats_squads_standard  .current table tbody tr th[data-stat="team"] a',
        (elements) => {
          return elements.map((element) => {
            return element.textContent;
          });
        },
      );
      return await jobTitles.forEach(async (name) => {
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

  async findOneById(id: number) {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByName(name: string) {
    return await this.repository.findOne({
      where: {
        name,
      },
    });
  }
}
