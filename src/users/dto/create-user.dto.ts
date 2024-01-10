import { Exclude } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome não pode ser vazio !!!' })
  @Length(3, 10, { message: 'Nome precisa ter entre 3 e 10 caracteres' })
  //@Transform(({ value }) => value.toLowerCase())
  //@Expose({ name: 'nome_completo' })
  nome: string;

  @IsNotEmpty({ message: 'Idade não pode ser vazia !!!' })
  idade: number;

  @Exclude()
  id: number;
}
