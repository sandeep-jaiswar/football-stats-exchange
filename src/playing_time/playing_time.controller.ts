import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayingTimeService } from './playing_time.service';
import { UpdatePlayingTimeDto } from './dto/update-playing_time.dto';

@Controller('playing-time')
export class PlayingTimeController {
  constructor(private readonly playingTimeService: PlayingTimeService) {}

  @Post()
  create() {
    return this.playingTimeService.create();
  }

  @Get()
  findAll() {
    return this.playingTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playingTimeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayingTimeDto: UpdatePlayingTimeDto,
  ) {
    return this.playingTimeService.update(+id, updatePlayingTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playingTimeService.remove(+id);
  }
}
