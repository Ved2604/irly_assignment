import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  summary: string;

  @IsDate() // Change to IsDate
  publishedDate: Date;
}
