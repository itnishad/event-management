import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsService } from './reservations.service';
import { Reservation } from './reservation.entity';
import { Workshop } from 'src/workshops/workshops.entity';
import { Event } from 'src/events/event.entity';
import { ReservationsController } from './reservations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, Workshop, Event])],
  providers: [ReservationsService],
  controllers: [ReservationsController]
})
export class ReservationsModule {}
