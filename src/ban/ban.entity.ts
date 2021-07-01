import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "bans" })
export class Ban {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar' })
   reason: string;

   @ManyToOne(() => User, user => user.bans)
   user: User;

}