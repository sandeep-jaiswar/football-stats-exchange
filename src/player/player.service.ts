import { Injectable } from '@nestjs/common';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { Performance } from 'src/performance/entities/performance.entity';
import { Expected } from 'src/expected/entities/expected.entity';
import { Nationality } from 'src/nationality/entities/nationality.entity';
import { Per90Minutes } from 'src/per_90_minutes/entities/per_90_minute.entity';
import { PlayingTime } from 'src/playing_time/entities/playing_time.entity';
import { Position } from 'src/position/entities/position.entity';
import { Progression } from 'src/progression/entities/progression.entity';
import { Team } from 'src/team/entities/team.entity';
import puppeteer from 'puppeteer';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,

    @InjectRepository(Expected)
    private readonly expectedRepository: Repository<Expected>,

    @InjectRepository(Nationality)
    private readonly nationalityRepository: Repository<Nationality>,

    @InjectRepository(Per90Minutes)
    private readonly per90MinutesRepository: Repository<Per90Minutes>,

    @InjectRepository(Performance)
    private readonly performanceRepository: Repository<Performance>,

    @InjectRepository(PlayingTime)
    private readonly playingTimeRepository: Repository<PlayingTime>,

    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,

    @InjectRepository(Progression)
    private readonly progressionRepository: Repository<Progression>,

    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async create() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://fbref.com/en/comps/9/stats/Premier-League-Stats');

    try {
      const players = await page.$$eval(
        '#div_stats_standard table tbody tr td[data-stat="player"] a',
        (elements) => {
          return elements.map((element) => {
            return element.textContent;
          });
        },
      );
      return await [...new Set(players)].forEach(async (name) => {
        await this.playerRepository.save({
          name,
        });
      });
    } catch (error) {
      console.error('Error while scraping job listings:', error);
    } finally {
      await browser.close();
    }
  }

  async findAll(): Promise<Player[]> {
    return await this.playerRepository.find({
      relations: ['team', 'nationality', 'per90Minutes'],
    });
  }

  async findOne(id: number): Promise<Player> {
    return await this.playerRepository.findOne({
      where: {
        id,
      },
      relations: ['team', 'nationality', 'per90Minutes'],
    });
  }

  async updateOne(id: number): Promise<Player> {
    return await this.playerRepository.findOne({
      where: {
        id,
      },
      relations: ['team', 'nationality', 'per90Minutes'],
    });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  async remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
