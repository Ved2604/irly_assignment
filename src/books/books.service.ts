import { BadRequestException, Injectable,NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService { 
  constructor(private readonly databaseService:DatabaseService){}
  async create(createBookDto: CreateBookDto) {
    const data = {
      ...createBookDto,
      publishedDate: createBookDto.publishedDate // Convert to string
    };
    return this.databaseService.book.create({ data });
  }

  async findAll() {
    return this.databaseService.book.findMany()
  }

  async findOne(id: number) { 
    if(!id){
      throw new BadRequestException("Id should be a numerical string")
    }
    let book=this.databaseService.book.findUnique({
      where:{id}
    })  
    if(!book){
      throw new NotFoundException('Book not found')
    }
    return book
  }

  async update(id: number, updateBookDto: Prisma.BookUpdateInput) { 
    if(!id){
      throw new BadRequestException("Id should be a numerical string")
    }
    let book=this.databaseService.book.update({
      where:{id},
      data:updateBookDto
    }) 
    if(!book){
      throw new NotFoundException('Book to be updaed not found')
    }
    return book;
  }

  async remove(id: number) {  
    if(!id){
      throw new BadRequestException("Id should be a numerical string")
    }
    let book=this.databaseService.book.delete({
      where:{id}
    }) 
    if(!book){
      throw new NotFoundException('Book to be deleted not found')
    }
    return book;
  }
}