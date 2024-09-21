import { Expected } from 'src/expected/entities/expected.entity';
import { Per90Minutes } from 'src/per_90_minutes/entities/per_90_minute.entity';
import { Performance } from 'src/performance/entities/performance.entity';
import { Player } from 'src/player/entities/player.entity';
import { PlayingTime } from 'src/playing_time/entities/playing_time.entity';
import { Progression } from 'src/progression/entities/progression.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @OneToMany(() => PlayingTime, (playingTime) => playingTime.player)
  playingTimes: PlayingTime[];

  @OneToMany(() => Performance, (performance) => performance.team)
  performances: Performance[];

  @OneToMany(() => Expected, (expected) => expected.team)
  expecteds: Expected[];

  @OneToMany(() => Progression, (progression) => progression.team)
  progressions: Progression[];

  @OneToMany(() => Per90Minutes, (per90Minutes) => per90Minutes.team)
  per90Minutes: Per90Minutes[];
}
