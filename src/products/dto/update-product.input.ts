import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true, description: 'Nome do produto' })
  name: string;

  @Field(() => Float, { nullable: true })
  price: number;

  @Field(() => Float, { nullable: true })
  sale_price: number;

  @Field({ nullable: true })
  stock: number;

  @Field({ nullable: true })
  photograph?: string;

  @Field({ nullable: true })
  description?: string;
}
