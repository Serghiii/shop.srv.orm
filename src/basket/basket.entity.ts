import { Device } from "src/device/device.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "baskets" })
export class Basket {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'integer' })
   count: number;

   @OneToOne(() => User, user => user.basket)
   @JoinColumn()
   user: User;

   @OneToMany(() => Device, device => device.basket)
   devices: Device[];

}