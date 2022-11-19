import { IsString } from 'class-validator'

export class CreateEventDto{

    @IsString()
    start_at: Date;

    @IsString()
    end_at: Date;

    @IsString()
    title: string;
    
    @IsString()
    description: string;
}