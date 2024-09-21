import { Player } from 'src/player/entities/player.entity';
import { Team } from 'src/team/entities/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Performance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  goals: number; // Gls: Goals scored

  @Column({ default: 0 })
  assists: number; // Ast: Assists

  @Column({ default: 0 })
  goalsAndAssists: number; // G+A: Goals + Assists

  @Column({ default: 0 })
  goalsMinusPK: number; // G-PK: Goals minus penalties

  @Column({ default: 0 })
  penalties: number; // PK: Penalties scored

  @Column({ default: 0 })
  penaltyAttempts: number; // PKatt: Penalty attempts

  @Column({ default: 0 })
  yellowCards: number; // CrdY: Yellow cards

  @Column({ default: 0 })
  redCards: number; // CrdR: Red cards

  @ManyToOne(() => Player, (player) => player.performances, { nullable: true })
  player: Player;

  @ManyToOne(() => Team, (team) => team.performances, { nullable: true })
  team: Team;
}
