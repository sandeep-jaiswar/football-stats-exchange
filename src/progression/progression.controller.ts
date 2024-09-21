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
import { UpdateProgressionDto } from './dto/update-progression.dto';

@Controller('progression')
export class ProgressionController {
  constructor(private readonly progressionService: ProgressionService) {}

  @Post()
  create() {
    return this.progressionService.create();
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
