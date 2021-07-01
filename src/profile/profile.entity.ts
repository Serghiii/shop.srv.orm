import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "profiles" })
export class Profile {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', nullable: false })
   name: string;

   @Column({ type: 'boolean' })
   gender: boolean;

   @Column({ type: 'varchar' })
   avatar: string;

   @ManyToOne(() => User, user => user.profiles)
   user: User;

}