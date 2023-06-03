import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('events')
export class Event{
    @PrimaryGeneratedColumn()
    event_id: number;
    @ApiProperty({example:'Lecture', description:'Type of an event'})
    @Column({name:'type', type:'varchar'})
    type: string;
    @ApiProperty({example:'A history of Water Lillies collection', description:'Title of the event'})
    @Column({name:'title', type:'varchar'})
    title: string;
    @ApiProperty({example:'Sophia Sahnova', description:'Organisator/speaker'})
    @Column({name:'organisator', type:'varchar'})
    organisator: string;
    @ApiProperty({example:'2023-05-22', description:'Date of the event'})
    @Column({name:'date', type:'date'})
    date: Date;
    @ApiProperty({example:'14:00:00', description:'Date'})
    @Column({name:'time', type:'varchar'})
    time: string;
}