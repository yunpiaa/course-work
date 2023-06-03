import { ApiProperty } from "@nestjs/swagger";

export class CreateArtistDto{
    @ApiProperty({example:'Sophia'})
    name: string;
    @ApiProperty({example:'2020-06-15'})
    birth: Date;
    @ApiProperty({example:'2021-06-21'})
    death: Date;
    @ApiProperty({example:'Korea'})
    country: string;
    @ApiProperty({example:'Cool style'})
    style: string;
    @ApiProperty({example:'Shes the coolest artist'})
    bio: string;
}
//all dto в отдельной папке