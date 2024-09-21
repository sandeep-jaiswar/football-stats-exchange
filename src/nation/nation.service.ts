import { Injectable } from '@nestjs/common';
import { CreateNationDto } from './dto/create-nation.dto';
import { UpdateNationDto } from './dto/update-nation.dto';

@Injectable()
export class NationService {
  create(createNationDto: CreateNationDto) {
    return 'This action adds a new nation';
  }

  findAll() {
    return `This action returns all nation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nation`;
  }

  update(id: number, updateNationDto: UpdateNationDto) {
    return `This action updates a #${id} nation`;
  }

  remove(id: number) {
    return `This action removes a #${id} nation`;
  }
}
