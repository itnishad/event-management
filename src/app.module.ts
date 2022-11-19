import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { ReservationsModule } from './reservations/reservations.module';

import { Event } from './events/event.entity';
import { Workshop } from './workshops/workshops.entity';
import { Reservation } from './reservations/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'nishad',
      database: 'eventManagement',
      entities: [Event, Workshop, Reservation],
    }),
    EventsModule, 
    WorkshopsModule, 
    ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
