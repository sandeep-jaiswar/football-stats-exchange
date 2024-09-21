import { Player } from 'src/player/entities/player.entity';
import { Team } from 'src/team/entities/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Per90Minutes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  goals: number; // Gls: Goals per 90 minutes

  @Column({ default: 0 })
  assists: number; // Ast: Assists per 90 minutes

  @Column({ default: 0 })
  goalsAndAssists: number; // G+A: Goals + Assists per 90 minutes

  @Column({ default: 0 })
  goalsMinusPK: number; // G-PK: Goals minus penalties per 90 minutes

  @Column({ default: 0 })
  goalsAndAssistsMinusPK: number; // G+A-PK: Goals + Assists minus penalties per 90 minutes

  @Column({ default: 0 })
  expectedGoals: number; // xG: Expected Goals per 90 minutes

  @Column({ default: 0 })
  expectedAssists: number; // xAG: Expected Assists per 90 minutes

  @Column({ default: 0 })
  expectedGoalsAndAssists: number; // xG+xAG: Expected Goals + Expected Assists per 90 minutes

  @Column({ default: 0 })
  nonPenaltyExpectedGoals: number; // npxG: Non-Penalty Expected Goals per 90 minutes

  @Column({ default: 0 })
  nonPenaltyExpectedGoalsAndAssists: number; // npxG+xAG: Non-Penalty Expected Goals + Expected Assists per 90 minutes

  @ManyToOne(() => Player, (player) => player.per90Minutes, { nullable: true })
  player: Player;

  @ManyToOne(() => Team, (team) => team.per90Minutes, { nullable: true })
  team: Team;
}
