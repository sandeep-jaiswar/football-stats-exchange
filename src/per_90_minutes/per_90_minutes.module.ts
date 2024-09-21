import { Module } from '@nestjs/common';
import { Per90MinutesService } from './per_90_minutes.service';
import { Per90MinutesController } from './per_90_minutes.controller';
import { Per90Minute } from './entities/per_90_minute.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Per90Minute])],
  controllers: [Per90MinutesController],
  providers: [Per90MinutesService],
})
export class Per90MinutesModule {}
