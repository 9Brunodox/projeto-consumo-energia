import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateConsumoDto{
    @IsNotEmpty()
    @IsString()
    user:string

    @IsNotEmpty()
    @IsNumber()
    qtd: number;

    @IsNotEmpty()
    @IsDateString()
    dataLeitura: string;
}