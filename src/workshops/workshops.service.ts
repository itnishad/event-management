import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workshop } from './workshops.entity';
import { Event } from 'src/events/event.entity';
import { CreateEventDto } from './dto/create-workshop.dto';

type response = {
    id: number;
    title: string;
    description: string;
    start_at: Date;
    end_at: Date;
    total_reservations: number;
}

@Injectable()
export class WorkshopsService {
    constructor( 
        @InjectRepository(Workshop) private workshopRepository: Repository<Workshop>,
        @InjectRepository(Event) private eventRepository: Repository<Event> ) {}

    async createWorkshop(id: number, workshop: CreateEventDto) {
        const event = await this.eventRepository.findOneBy({id});
        if(!event){
            throw new HttpException('Event Not Fount', HttpStatus.BAD_REQUEST);
        }
        const newWorkshop = await this.workshopRepository.create({
            ... workshop, 
            event: event
        })

        return this.workshopRepository.save(newWorkshop);
    }

    async singleWorkshop(id: number) {
        const workshop =  await this.workshopRepository.findOne({where: {id}, relations: ['reservation']});

        if(!workshop){
            throw new HttpException('Event Not Fount', HttpStatus.BAD_REQUEST);
        }

        let res: response = {
            id: workshop.id,
            title: workshop.title,
            description: workshop.description,
            start_at: workshop.start_at,
            end_at: workshop.end_at,
            total_reservations: workshop.reservation.length
        }

        return res;
    }
}
