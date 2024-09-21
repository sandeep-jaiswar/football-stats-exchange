import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpectedService } from './expected.service';
import { CreateExpectedDto } from './dto/create-expected.dto';
import { UpdateExpectedDto } from './dto/update-expected.dto';

@Controller('expected')
export class ExpectedController {
  constructor(private readonly expectedService: ExpectedService) {}

  @Post()
  create(@Body() createExpectedDto: CreateExpectedDto) {
    return this.expectedService.create();
  }

  @Get()
  findAll() {
    return this.expectedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expectedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpectedDto: UpdateExpectedDto,
  ) {
    return this.expectedService.update(+id, updateExpectedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expectedService.remove(+id);
  }
}
