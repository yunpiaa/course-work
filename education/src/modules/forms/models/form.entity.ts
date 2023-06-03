import { Review } from 'src/modules/reviews/models/review.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('forms')
export class Form{
    @PrimaryGeneratedColumn()
    form_id: number;
    @ApiProperty({example:'Sophia', description:'first name'})
    @Column({name:'first_name', type:'varchar'})
    first_name: string;
    @ApiProperty({example:'Min', description:'last name'})
    @Column({name:'last_name', type:'varchar'})
    last_name: string;
    @ApiProperty({example:'ynni@bts.com', description:'email'})
    @Column({name:'email', type:'varchar'})
    email: string;
    @ApiProperty({example:'+79608905710', description:'phone'})
    @Column({name:'phone', type:'integer'})
    phone: number;
    @ApiProperty({example:'Student', description:'ticket type'})
    @Column({name:'ticket_type', type:'varchar'})
    ticket_type: string;
    @ApiProperty({example:'2023-09-23', description:'date'})
    @Column({name:'date', type:'date'})
    date: Date;
    @OneToOne((type)=> Review, (review)=> review.forms)
    @JoinTable({
        name: 'form_review',
        joinColumn: {name: 'review_id'},
        inverseJoinColumn: {name:'form_id'},
    })
    reviews: Review[]
}