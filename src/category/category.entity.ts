import { Device } from "src/device/device.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', unique: true, nullable: false })
   name: string;

   @OneToMany(() => Device, device => device.category)
   devices: Device[];

}