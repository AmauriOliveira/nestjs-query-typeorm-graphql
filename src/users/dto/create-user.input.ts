import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Invalid Email.' })
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
}
