import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { Workshop } from 'src/workshops/workshops.entity';
import { Event } from 'src/events/event.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
    constructor( 
        @InjectRepository(Reservation) private reservationRepository: Repository<Reservation>,
        @InjectRepository(Workshop) private workshopRepository: Repository<Workshop>,
        @InjectRepository(Workshop) private eventRepository: Repository<Workshop>, ) {}

    async createReservation(id: number, body:CreateReservationDto) {

        const workshop = await this.workshopRepository.findOneBy({id});
        if(!workshop){
            throw new HttpException('Workshop Not Found', HttpStatus.BAD_REQUEST);
        }
        const newReservation = await this.reservationRepository.create({
            ... body,
            workshop
        });
        const reservation = await this.reservationRepository.save(newReservation);

        const reservationObj = await this.singleReservation(reservation.id);


        return {
            reservation: {
                'id': reservationObj.id,
                'name': reservationObj.name,
                'email': reservationObj.email
            },
            event: {
                ...reservationObj.workshop.event
            },
            workshop: {
                'id': reservationObj.workshop.id,
                'title': reservationObj.workshop.title,
                'description': reservationObj.workshop.description,
                'start_at' : reservationObj.workshop.start_at,
                'end_at' : reservationObj.workshop.end_at
            }
        };

    }

    async singleReservation (id: number) {
        const reservation =  await this.reservationRepository.findOne({where: {id}, relations: ['workshop', 'workshop.event']});
        return reservation;
    }
}
