import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Workshop } from 'src/workshops/workshops.entity';

@Entity('reservations')
export class Reservation{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(()=>Workshop, (workshop)=> workshop.reservation)
    workshop: Workshop
    
}