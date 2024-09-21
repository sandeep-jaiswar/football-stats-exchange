import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create() {
    return this.teamService.create();
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.teamService.findOneById(id);
  }

  @Post()
  findOneByName(@Body() data: UpdateTeamDto) {
    const { name } = data;
    return this.teamService.findOneByName(name);
  }
}
