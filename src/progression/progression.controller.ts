import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgressionService } from './progression.service';
import { CreateProgressionDto } from './dto/create-progression.dto';
import { UpdateProgressionDto } from './dto/update-progression.dto';

@Controller('progression')
export class ProgressionController {
  constructor(private readonly progressionService: ProgressionService) {}

  @Post()
  create(@Body() createProgressionDto: CreateProgressionDto) {
    return this.progressionService.create(createProgressionDto);
  }

  @Get()
  findAll() {
    return this.progressionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progressionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgressionDto: UpdateProgressionDto,
  ) {
    return this.progressionService.update(+id, updateProgressionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progressionService.remove(+id);
  }
}
