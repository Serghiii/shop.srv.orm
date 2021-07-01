import { Activation } from "src/activation/activation.entityl";
import { Ban } from "src/ban/ban.entity";
import { Basket } from "src/basket/basket.entity";
import { Profile } from "src/profile/profile.entity";
import { Role } from "src/role/role.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   @Column({ type: 'varchar', length: 13, unique: true })
   phone: string;

   @Column({ type: 'varchar', length: 50, unique: true })
   email: string;

   @Column({ type: 'varchar' })
   password: string;

   @Column({ type: 'boolean', default: false })
   active: boolean;

   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   updatedAt: Date;

   @ManyToMany(() => Role, role => role.users)
   @JoinTable()
   roles: Role[];

   @OneToOne(() => Activation, activation => activation.user)
   activation: Activation;

   @OneToMany(() => Ban, ban => ban.user)
   bans: Ban[];

   @OneToMany(() => Profile, profile => profile.user)
   profiles: Profile[];

   @OneToOne(() => Basket, basket => basket.user)
   basket: Basket;

}
