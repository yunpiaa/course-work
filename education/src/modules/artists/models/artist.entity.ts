import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';
import { Painting } from 'src/modules/paintings/models/painting.entity';
import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('artists') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
  export class Artist {
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    artist_id: number;
    @ApiProperty({example:'Sophia', description:'Name of artist'})
    @Column({name:'name', type:'varchar'}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    name: string;
    @ApiProperty({example:'2003-02-26', description:'Birth'})
    @Column({name:'birth', type:'date'})
    birth: Date;
    @ApiProperty({example:'2099-02-26', description:'Death'})
    @Column({name:'death', type:'date'})
    death: Date;
    @ApiProperty({example:'Japan', description:'Country'})
    @Column({name:'country', type:'varchar'}) 
    country: string;
    @ApiProperty({example:'Pretty drawings', description:'Style'})
    @Column({name:'style', type:'varchar'}) 
    style: string;
    @ApiProperty({example:'A very good artist', description:'Bio'})
    @Column({name:'bio', type:'varchar'}) 
    bio: string;
    @OneToMany((type) => Painting, (painting) => painting.artist) //Создадим связь многие ко многим с сущностью article и свяжем с полем authors в статье
    // @JoinTable({
    // //join таблица с названием author_article
    //     name: 'artist_painting',
    //     joinColumn: { name: 'artist_id' }, //для связи с идентификатором автора
    //     inverseJoinColumn: { name: 'painting_id' }, //для связи с идентификатором статьи
    //  })
    paintings: Painting[]; //объект, в котором будем автоматически получать все статьи автора

  }