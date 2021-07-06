import { Type } from "../type/type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "props" })
export class Prop {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', nullable: false })
   name: string;

   @Column({ type: 'varchar', nullable: false })
   value: string;

   @ManyToOne(() => Type, type => type.props)
   type: Type;

}