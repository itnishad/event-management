import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { WorkshopsService } from './workshops.service';
import { CreateEventDto } from './dto/create-workshop.dto';

@Controller('workshop')
export class WorkshopsController {

    constructor( private workshopService: WorkshopsService) {}

    @Post('/:eventId')
    createWorkshop ( @Param('eventId') id: string, @Body() body: CreateEventDto) {
        return this.workshopService.createWorkshop(parseInt(id), body);
    }

    @Get('/:workshopId')
    singleWorkshop(@Param('workshopId') id: string) {
        return this.workshopService.singleWorkshop(parseInt(id));
    }
}
