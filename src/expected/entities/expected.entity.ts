import { Player } from 'src/player/entities/player.entity';
import { Team } from 'src/team/entities/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Expected {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  expectedGoals: number; // xG: Expected Goals

  @Column({ default: 0 })
  nonPenaltyExpectedGoals: number; // npxG: Non-Penalty Expected Goals

  @Column({ default: 0 })
  expectedAssists: number; // xAG: Expected Assists

  @Column({ default: 0 })
  nonPenaltyExpectedGoalsAndAssists: number; // npxG+xAG: Non-Penalty Expected Goals + Expected Assists

  @ManyToOne(() => Player, (player) => player.expecteds, { nullable: true })
  player: Player;

  @ManyToOne(() => Team, (team) => team.expecteds, { nullable: true })
  team: Team;
}
