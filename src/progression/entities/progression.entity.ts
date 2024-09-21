import { Player } from 'src/player/entities/player.entity';
import { Team } from 'src/team/entities/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Progression {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  progressiveCarries: number; // PrgC: Progressive Carries

  @Column({ default: 0 })
  progressivePasses: number; // PrgP: Progressive Passes

  @Column({ default: 0 })
  progressiveReceives: number; // PrgR: Progressive Receives

  @ManyToOne(() => Player, (player) => player.progressions, { nullable: true })
  player: Player;

  @ManyToOne(() => Team, (team) => team.progressions, { nullable: true })
  team: Team;
}
