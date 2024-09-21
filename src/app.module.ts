import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { join } from 'path';
import { PositionModule } from './position/position.module';
import { NationalityModule } from './nationality/nationality.module';
import { PlayerModule } from './player/player.module';
import { PlayingTimeModule } from './playing_time/playing_time.module';
import { PerformanceModule } from './performance/performance.module';
import { ExpectedModule } from './expected/expected.module';
import { ProgressionModule } from './progression/progression.module';
import { Per90MinutesModule } from './per_90_minutes/per_90_minutes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'statistics',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    TeamModule,
    PositionModule,
    NationalityModule,
    PlayerModule,
    PlayingTimeModule,
    PerformanceModule,
    ExpectedModule,
    ProgressionModule,
    Per90MinutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
