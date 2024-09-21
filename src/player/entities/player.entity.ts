import { Expected } from 'src/expected/entities/expected.entity';
import { Nationality } from 'src/nationality/entities/nationality.entity';
import { Per90Minutes } from 'src/per_90_minutes/entities/per_90_minute.entity';
import { Performance } from 'src/performance/entities/performance.entity';
import { PlayingTime } from 'src/playing_time/entities/playing_time.entity';
import { Position } from 'src/position/entities/position.entity';
import { Progression } from 'src/progression/entities/progression.entity';
import { Team } from 'src/team/entities/team.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;

  @ManyToOne(() => Nationality, (nationality) => nationality.players)
  nationality: Nationality;

  @OneToMany(() => Position, (position) => position.players)
  positions: Position[];

  @OneToMany(() => PlayingTime, (playingTime) => playingTime.player)
  playingTimes: PlayingTime[];

  @OneToMany(() => Performance, (performance) => performance.player)
  performances: Performance[];

  @OneToMany(() => Expected, (expected) => expected.player)
  expecteds: Expected[];

  @OneToMany(() => Progression, (progression) => progression.player)
  progressions: Progression[];

  @OneToMany(() => Per90Minutes, (per90Minutes) => per90Minutes.player)
  per90Minutes: Per90Minutes[];
}
