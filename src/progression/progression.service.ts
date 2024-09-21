import { Injectable } from '@nestjs/common';
import { CreateProgressionDto } from './dto/create-progression.dto';
import { UpdateProgressionDto } from './dto/update-progression.dto';

@Injectable()
export class ProgressionService {
  create(createProgressionDto: CreateProgressionDto) {
    return 'This action adds a new progression';
  }

  findAll() {
    return `This action returns all progression`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progression`;
  }

  update(id: number, updateProgressionDto: UpdateProgressionDto) {
    return `This action updates a #${id} progression`;
  }

  remove(id: number) {
    return `This action removes a #${id} progression`;
  }
}
