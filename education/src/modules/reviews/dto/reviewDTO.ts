import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateReviewDto{
    @ApiProperty({example:'ilovebts@email.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty({example:'i was there.'})
    @IsNotEmpty()
    @IsString()
    title: string;
    @ApiProperty({example:'2023-06-15'})
    @IsDate()
    @IsNotEmpty()
    date_of_visit: Date;
    @ApiProperty({example:'img.link'})
    image: string;
    @ApiProperty({example:'very cool exhibition'})
    @IsNotEmpty()
    @IsString()
    post: string;    
}