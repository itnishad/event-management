import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkshopsController } from './workshops.controller';
import { WorkshopsService } from './workshops.service';
import { Workshop } from './workshops.entity';
import { Event } from 'src/events/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workshop, Event])],
  controllers: [WorkshopsController],
  providers: [WorkshopsService]
})
export class WorkshopsModule {}
