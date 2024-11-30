import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "src/entities/movie-entity";
import { Repository } from "typeorm";

@Injectable()
export class MovieService{

    constructor(
        @InjectRepository(Movie)
        private Repository: Repository<Movie>
    ) {}

    findAll(): Promise<Movie[]>{
        return this.Repository.find();
    }

    findById(id: string):Promise<Movie>{
        return this.Repository.findOneBy({id: id});
    }
}