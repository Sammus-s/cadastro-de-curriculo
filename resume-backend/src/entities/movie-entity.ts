import { text } from "stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({type: 'text', nullable: false})
    description: string;

    @Column({name:'age-rating', length:2, nullable:false})
    ageRaring: string;

    @Column({nullable: false})
    poster: string;
}