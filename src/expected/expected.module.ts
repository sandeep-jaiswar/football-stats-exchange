import { Module } from '@nestjs/common';
import { ExpectedService } from './expected.service';
import { ExpectedController } from './expected.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expected } from './entities/expected.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expected])],
  controllers: [ExpectedController],
  providers: [ExpectedService],
  exports: [ExpectedService],
})
export class ExpectedModule {}
