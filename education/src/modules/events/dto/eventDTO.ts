import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
    @ApiProperty({example:'Lecture'})
    type:string;
    @ApiProperty({example:'Histore of korean art'})
    title: string;
    @ApiProperty({example:'Sophia'})
    organisator: string;
    @ApiProperty({example:'2020-06-15'})
    date: Date;
    @ApiProperty({example:'14:00'})
    time: string;
}