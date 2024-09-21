import { Module } from '@nestjs/common';
import { ProgressionService } from './progression.service';
import { ProgressionController } from './progression.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progression } from './entities/progression.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Progression])],
  controllers: [ProgressionController],
  providers: [ProgressionService],
})
export class ProgressionModule {}
