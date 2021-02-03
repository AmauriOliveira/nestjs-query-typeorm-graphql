import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field({ description: 'Nome do produto' })
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Float)
  sale_price: number;

  @Field()
  stock: number;

  @Field({ nullable: true })
  Photograph?: string;

  @Field({ nullable: true })
  description?: string;
}
