import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsNotEmpty({ message: 'Invalid Email.' })
  @IsOptional()
  email: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsOptional()
  password: string;
}
