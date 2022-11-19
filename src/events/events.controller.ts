import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('event')
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Post()
  createEvent(@Body() body: CreateEventDto) {
    return this.eventService.createEvent(body);
  }

  @Get('/list')
  async activeEvents(@Query('page') page: string) {
    const page_number: number = parseInt(page) || 1;
    const per_page: number = 10;

    const builder = await this.eventService.queryBuilder();

    const eventCount = await builder.getCount();

    await builder
      .offset((page_number - 1) * per_page)
      .limit(per_page);

    const pagination = {
      total: eventCount,
      per_page: per_page,
      total_pages: Math.floor(eventCount / per_page),
      current_page: page_number
    };

    let activeEvent = await builder.getMany()

    activeEvent = activeEvent.filter((item: any) => new Date().getTime() < new Date(item.start_at).getTime());

    const events = {
        "events": activeEvent,
        "pagination": pagination
    }

    return events;
  }

  @Get('/:eventId')
  singleEvent(@Param('eventId') id: string) {
    return this.eventService.singleEvent(parseInt(id));
  }

  @Get()
  activeWorkshopOfAEvent(@Query('eventId') id: string) {
    return this.eventService.activeWorkshopOfAEvent(parseInt(id));
  }
}
