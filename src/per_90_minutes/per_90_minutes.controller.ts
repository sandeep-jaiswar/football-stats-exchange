import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Per90MinutesService } from './per_90_minutes.service';
import { CreatePer90MinuteDto } from './dto/create-per_90_minute.dto';
import { UpdatePer90MinuteDto } from './dto/update-per_90_minute.dto';

@Controller('per-90-minutes')
export class Per90MinutesController {
  constructor(private readonly per90MinutesService: Per90MinutesService) {}

  @Post()
  create(@Body() createPer90MinuteDto: CreatePer90MinuteDto) {
    return this.per90MinutesService.create(createPer90MinuteDto);
  }

  @Get()
  findAll() {
    return this.per90MinutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.per90MinutesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePer90MinuteDto: UpdatePer90MinuteDto,
  ) {
    return this.per90MinutesService.update(+id, updatePer90MinuteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.per90MinutesService.remove(+id);
  }
}
