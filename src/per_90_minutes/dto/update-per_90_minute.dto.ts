import { PartialType } from '@nestjs/mapped-types';
import { CreatePer90MinuteDto } from './create-per_90_minute.dto';

export class UpdatePer90MinuteDto extends PartialType(CreatePer90MinuteDto) {}
