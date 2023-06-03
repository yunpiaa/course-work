import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsDate, IsNumberString, Min, Max } from 'class-validator';

export class CreateFormDto {
    @ApiProperty({example:'Sophia'})
    @IsNotEmpty()
    @IsString()
    first_name: string;
    @ApiProperty({example:'Min'})
    last_name: string;
    @ApiProperty({example:'ilovebts@email.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty({example:'79608905710'})
    @IsNotEmpty()
    @IsNumberString()
    @Min(0)
    @Max(10)
    phone: number;
    @ApiProperty({example:'Student'})
    @IsNotEmpty()
    ticket_type:string;
    @ApiProperty({example:'2023-06-15'})
    @IsDate()
    @IsNotEmpty()
    date: Date;
}