import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { Player } from './entities/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expected } from 'src/expected/entities/expected.entity';
import { Nationality } from 'src/nationality/entities/nationality.entity';
import { Per90Minutes } from 'src/per_90_minutes/entities/per_90_minute.entity';
import { Performance } from 'src/performance/entities/performance.entity';
import { PlayingTime } from 'src/playing_time/entities/playing_time.entity';
import { Position } from 'src/position/entities/position.entity';
import { Progression } from 'src/progression/entities/progression.entity';
import { Team } from 'src/team/entities/team.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Player,
      Expected,
      Nationality,
      Per90Minutes,
      Performance,
      PlayingTime,
      Position,
      Progression,
      Team,
    ]),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
