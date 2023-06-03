import { ApiProperty } from "@nestjs/swagger";
export class CreatePaintingDto {
    @ApiProperty({example:'Cool painting'})
    name: string;
    @ApiProperty({example:'2003-06-15'})
    date: Date;
    @ApiProperty({example:'very very Cool painting'})
    desc: string;
    @ApiProperty({example:'99x99'})
    dim: string;
    @ApiProperty({example:'img.link'})
    image: string;
    @ApiProperty({example:'1'})
    artist: number;
}