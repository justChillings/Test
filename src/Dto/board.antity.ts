import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity ()
export class BoardAntity {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  password : number;

  @Column()
  name : string;
}