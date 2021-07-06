import { Cart } from "../cart/cart.entity";
import { Product } from "../product/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "cartcontents" })
export class CartContents {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'integer' })
   amount: number;

   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   updatedAt: Date;

   @ManyToOne(() => Product, product => product.cartcontents, { nullable: false })
   product: Product;

   @ManyToOne(() => Cart, cart => cart.cartcontents, { nullable: false, onDelete: 'CASCADE' })
   cart: Cart;

}