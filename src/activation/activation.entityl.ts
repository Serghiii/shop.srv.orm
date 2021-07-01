
import { User } from "src/user/user.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "activations" })
export class Activation {

   @PrimaryGeneratedColumn('uuid')
   uuid: string;

   @OneToOne(() => User, user => user.activation)
   @JoinColumn()
   user: User;

}
