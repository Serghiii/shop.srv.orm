import { User } from "../user/user.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartContents } from "../cartcontents/cartcontents.entity";

@Entity({ name: "carts" })
export class Cart {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @OneToOne(() => User, user => user.cart, { onDelete: 'CASCADE' })
   @JoinColumn()
   user: User;

   @OneToMany(() => CartContents, cartcontent => cartcontent.cart)
   cartcontents: CartContents[];

}