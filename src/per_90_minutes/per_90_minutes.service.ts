import { Injectable } from '@nestjs/common';
import { CreatePer90MinuteDto } from './dto/create-per_90_minute.dto';
import { UpdatePer90MinuteDto } from './dto/update-per_90_minute.dto';

@Injectable()
export class Per90MinutesService {
  create(createPer90MinuteDto: CreatePer90MinuteDto) {
    return 'This action adds a new per90Minute';
  }

  findAll() {
    return `This action returns all per90Minutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} per90Minute`;
  }

  update(id: number, updatePer90MinuteDto: UpdatePer90MinuteDto) {
    return `This action updates a #${id} per90Minute`;
  }

  remove(id: number) {
    return `This action removes a #${id} per90Minute`;
  }
}
