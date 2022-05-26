import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    nome: string;

    @Column('int')
    idade: number;
}