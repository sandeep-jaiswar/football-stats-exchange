import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayingTimeDto } from './create-playing_time.dto';

export class UpdatePlayingTimeDto extends PartialType(CreatePlayingTimeDto) {}
