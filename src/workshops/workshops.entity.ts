import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Event } from 'src/events/event.entity';
import { Reservation } from 'src/reservations/reservation.entity';

@Entity('workshops')
export class Workshop{

    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // event_id: number;

    @Column()
    start_at: Date;

    @Column()
    end_at: Date;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(()=> Event, (event)=> event.workshops)
    event: Event

    @OneToMany(()=>Reservation, (reservation)=> reservation.workshop)
    reservation: Reservation[]
    
}