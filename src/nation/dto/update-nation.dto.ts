import { PartialType } from '@nestjs/mapped-types';
import { CreateNationDto } from './create-nation.dto';

export class UpdateNationDto extends PartialType(CreateNationDto) {}
