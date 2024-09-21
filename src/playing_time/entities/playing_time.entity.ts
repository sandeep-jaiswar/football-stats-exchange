import { Player } from 'src/player/entities/player.entity';
import { Team } from 'src/team/entities/team.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';

@Entity()
export class PlayingTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  starts: number; // Number of matches started

  @Column()
  minutes: number; // Total minutes played

  @Column({ default: 0 })
  matchesPlayed: number; // MP: Matches Played

  @Column({ default: 0 })
  nineties: number; // 90s: Number of 90-minute matches

  @ManyToOne(() => Player, (player) => player.playingTimes, { nullable: true })
  player: Player;

  @ManyToOne(() => Team, (team) => team.playingTimes, { nullable: true })
  team: Team;

  // Optional: Calculate derived fields (MP and 90s)
  @BeforeInsert()
  calculateDerivedFields() {
    this.matchesPlayed = this.minutes > 0 ? 1 : 0; // Matches played can be 1 if minutes > 0
    this.nineties = Math.floor(this.minutes / 90); // 90s: Number of full 90-minute matches
  }
}
