import { Device } from "src/device/device.entity";
import { Prop } from "src/prop/prop.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "types" })
export class Type {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', unique: true, nullable: false })
   name: string;

   @OneToMany(() => Device, device => device.type)
   devices: Device[];


   @OneToMany(() => Prop, prop => prop.type)
   props: Prop[];

}