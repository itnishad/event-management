import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

type response = {
    id: number;
    title: string;
    start_at: Date;
    end_at: Date;
    total_workshops: number;
}

@Injectable()
export class EventsService {

    constructor( @InjectRepository(Event) private eventRepository: Repository<Event> ) {}

    createEvent(event: CreateEventDto) {
        const eventData = this.eventRepository.create({... event});
        return this.eventRepository.save(eventData);
    }

    async queryBuilder() {
        return this.eventRepository.createQueryBuilder();
    }

    async singleEvent( id: number ) {
        // const event = await this.eventRepository.find();
        const event =  await this.eventRepository.findOne({where: {id}, relations: ['workshops']});
        
        if(!event){
            throw new HttpException('Event Not Fount', HttpStatus.BAD_REQUEST);
        }

        let res: response = {
            id: event.id,
            title: event.title,
            start_at: event.start_at,
            end_at: event.end_at,
            total_workshops: event.workshops.length
        }

        return res;
    }

    async activeWorkshopOfAEvent( id: number) {
        let event =  await this.eventRepository.findOne({where: {id}, relations: ['workshops']});
        event.workshops = event.workshops.filter((item: any)=> new Date().getTime() < new Date(item.start_at).getTime())
        return event;
    }

}
