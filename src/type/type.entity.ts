import { Product } from "../product/product.entity";
import { Prop } from "../prop/prop.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "src/category/category.entity";

@Entity({ name: "types" })
export class Type {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', unique: true, nullable: false })
   name: string;

   @ManyToOne(() => Category, category => category.types)
   category: Category;

   @OneToMany(() => Product, product => product.type)
   products: Product[];

   @OneToMany(() => Prop, prop => prop.type)
   props: Prop[];

}