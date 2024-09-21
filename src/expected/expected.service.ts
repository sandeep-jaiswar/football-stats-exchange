import { Injectable } from '@nestjs/common';
import { CreateExpectedDto } from './dto/create-expected.dto';
import { UpdateExpectedDto } from './dto/update-expected.dto';

@Injectable()
export class ExpectedService {
  create(createExpectedDto: CreateExpectedDto) {
    return 'This action adds a new expected';
  }

  findAll() {
    return `This action returns all expected`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expected`;
  }

  update(id: number, updateExpectedDto: UpdateExpectedDto) {
    return `This action updates a #${id} expected`;
  }

  remove(id: number) {
    return `This action removes a #${id} expected`;
  }
}
