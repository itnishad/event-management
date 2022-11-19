import { IsString, IsEmail } from 'class-validator'

export class CreateReservationDto{

    @IsString()
    name: string;

    @IsEmail()
    email: string;

}