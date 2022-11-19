import { IsString } from 'class-validator'

export class CreateEventDto{

    @IsString()
    title: string;

    @IsString()
    start_at: Date;

    @IsString()
    end_at: Date;
}