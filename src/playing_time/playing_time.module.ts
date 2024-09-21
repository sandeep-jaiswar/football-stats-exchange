import { Module } from '@nestjs/common';
import { PlayingTimeService } from './playing_time.service';
import { PlayingTimeController } from './playing_time.controller';
import { PlayingTime } from './entities/playing_time.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlayingTime])],
  controllers: [PlayingTimeController],
  providers: [PlayingTimeService],
})
export class PlayingTimeModule {}
