import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class AuthInput {
  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Invalid Email.' })
  email: string;

  @IsString()
  @Field()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
}
