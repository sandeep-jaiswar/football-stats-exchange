import { Module } from '@nestjs/common';
import { Per90MinutesService } from './per_90_minutes.service';
import { Per90MinutesController } from './per_90_minutes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Per90Minutes } from './entities/per_90_minute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Per90Minutes])],
  controllers: [Per90MinutesController],
  providers: [Per90MinutesService],
  exports: [Per90MinutesService],
})
export class Per90MinutesModule {}
