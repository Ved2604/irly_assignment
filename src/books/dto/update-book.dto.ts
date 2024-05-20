import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsString, IsOptional, IsDate } from 'class-validator'; 

export class UpdateBookDto extends PartialType(CreateBookDto) {@IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    summary?: string;
  
    @IsDate()
    @IsOptional()
    publishedDate?: Date; 
}
