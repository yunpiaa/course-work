import { Form } from 'src/modules/forms/models/form.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('reviews')
export class Review{
    @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
    review_id: number;
    @ApiProperty({example:'ynni@bts.com', description:'email'})
    @Column({unique: true, name:'email', type:'varchar'}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
    email: string;
    @ApiProperty({example:'A very nice exhibition!', description:'Title'})
    @Column({name:'title', type:'varchar'})
    title: string;
    @ApiProperty({example:'2023-05-14', description:'Date'})
    @Column({name:'date_of_visit', type:'date'})
    date_of_visit: Date;
    @ApiProperty({example:'image.link', description:'image'})
    @Column({name:'image', type:'varchar'})
    image: string;
    @ApiProperty({example:'I had so much fun omg 10/10', description:'post'})
    @Column({name:'post', type:'varchar'})
    post: string;
    @OneToOne((type)=> Form, (form) => form.reviews)
    @JoinTable({
        name: 'form_review',
        joinColumn: {name: 'form_id'},
        inverseJoinColumn: {name:'review_id'},
    })
    forms: Form[] //отношения ревьюс не существует

}