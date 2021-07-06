import { Type } from "../type/type.entity";
import { Column, CreateDateColumn, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CartContents } from "../cartcontents/cartcontents.entity";


@Entity({ name: "products" })
export class Product {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'integer', unique: true })
   code: number;

   @Column({ type: 'varchar' })
   name: string;

   @Column({ type: 'integer' })
   amount: number;

   @Column({ type: 'integer', default: 0 })
   price: number;

   @Column({ type: 'integer', default: 0 })
   priceold: number;

   @Column({ type: 'varchar' })
   pic: string;

   @Column({ type: 'varchar' })
   props: string;

   @CreateDateColumn()
   createdAt: Date;

   @Index('updatedAt-idx')
   @UpdateDateColumn()
   updatedAt: Date;

   @ManyToOne(() => Type, type => type.products, { nullable: false })
   type: Type;

   @OneToMany(() => CartContents, cartcontents => cartcontents.product)
   cartcontents: CartContents[];

}