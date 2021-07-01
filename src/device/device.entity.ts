import { Basket } from "src/basket/basket.entity";
import { Brand } from "src/brand/brand.entity";
import { Category } from "src/category/category.entity";
import { Type } from "src/type/type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "devices" })
export class Device {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'integer', unique: true, nullable: false })
   code: number;

   @Column({ type: 'varchar', nullable: false })
   name: string;

   @Column({ type: 'integer', nullable: false })
   count: number;

   @Column({ type: 'decimal', precision: 7, scale: 2, default: 0, nullable: false })
   price: number;

   @Column({ type: 'decimal', precision: 7, scale: 2, default: 0 })
   priceold: number;

   @Column({ type: 'varchar' })
   img: string;

   @ManyToOne(() => Category, category => category.devices)
   category: Category;

   @ManyToOne(() => Brand, brand => brand.devices)
   brand: Brand;

   @ManyToOne(() => Type, type => type.devices)
   type: Type;

   @ManyToOne(() => Basket, basket => basket.devices)
   basket: Basket;

}