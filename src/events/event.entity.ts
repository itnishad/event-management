import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Workshop } from 'src/workshops/workshops.entity';

@Entity({name: 'events'})
export class Event{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    start_at: Date;

    @Column()
    end_at: Date;

    @OneToMany(()=> Workshop, (workshop)=> workshop.event)
    workshops: Workshop[];
}