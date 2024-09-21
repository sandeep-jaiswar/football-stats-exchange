import { Nationality } from 'src/nationality/entities/nationality.entity';
import { Position } from 'src/position/entities/position.entity';
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
}
