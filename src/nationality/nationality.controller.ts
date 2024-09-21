import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { UpdateNationalityDto } from './dto/update-nationality.dto';

@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Post()
  create() {
    return this.nationalityService.create();
  }

  @Get()
  findAll() {
    return this.nationalityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nationalityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNationalityDto: UpdateNationalityDto,
  ) {
    return this.nationalityService.update(+id, updateNationalityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nationalityService.remove(+id);
  }
}
