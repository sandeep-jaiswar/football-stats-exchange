import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { join } from 'path';
import { PositionModule } from './position/position.module';
import { NationalityModule } from './nationality/nationality.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
