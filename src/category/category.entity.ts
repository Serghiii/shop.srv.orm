import { Type } from "src/type/type.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', unique: true })
   name: string;

   @OneToMany(() => Type, type => type.category)
   types: Type[];

}