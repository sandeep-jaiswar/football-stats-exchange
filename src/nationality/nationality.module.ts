import { Module } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { NationalityController } from './nationality.controller';
import { Nationality } from './entities/nationality.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Nationality])],
  controllers: [NationalityController],
  providers: [NationalityService],
})
export class NationalityModule {}
