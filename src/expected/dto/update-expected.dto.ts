import { PartialType } from '@nestjs/mapped-types';
import { CreateExpectedDto } from './create-expected.dto';

export class UpdateExpectedDto extends PartialType(CreateExpectedDto) {}
