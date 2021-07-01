import { Device } from "src/device/device.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "brands" })
export class Brand {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', unique: true, nullable: false })
   name: string;

   @OneToMany(() => Device, device => device.brand)
   devices: Device[];

}