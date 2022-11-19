import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('reservation')
export class ReservationsController {
    
    constructor( private reservationService: ReservationsService)  {}

    @Post('/:workshopId')
    createReservation (@Param('workshopId') id: string, @Body() body: CreateReservationDto) {
        return this.reservationService.createReservation(parseInt(id), body);
    }

    @Get('/:reservationId')
    singleReservation(@Param('reservationId') id: string){
        return this.reservationService.singleReservation(parseInt(id));
    }
}
