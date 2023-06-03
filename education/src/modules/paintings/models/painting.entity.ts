import { Artist } from 'src/modules/artists/models/artist.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('paintings') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Painting {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  painting_id: number;
  @ApiProperty({example:'Lilies', description:'Name of the painting'})
  @Column({name:'name', type:'varchar'})
  name: string;
  @ApiProperty({example:'2023-05-13', description:'Date'})
  @Column({name:'date', type:'date'})
  date: Date;
  @ApiProperty({example:'115x90', description:'Dim'})
  @Column({name:'dim', type:'varchar'})
  dim: string;
  @ApiProperty({example:'A very nice painting', description:'Desc'})
  @Column({name:'desc', type:'varchar'})
  desc: string;
  @ApiProperty({example:'Image.link', description:'Link to a image'})
  @Column({name:'image', type:'varchar'})
  image: string;
  @ManyToOne((type) => Artist, (artist) => artist.paintings) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
    @JoinTable({
    //join таблица с названием author_article
        name: 'artist_painting',
        joinColumn: { name: 'artist_id'}, //для связи с идентификатором автора
        inverseJoinColumn: { name: 'painting_id' }, //для связи с идентификатором статьи
     })
  artist: number; //объект, в котором будем автоматически получать все статьи автора
}