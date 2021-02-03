import { FilterableField } from '@nestjs-query/query-graphql';
import {
  ObjectType,
  Field,
  ID,
  GraphQLISODateTime,
  Float,
} from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @FilterableField()
  name: string;

  @Column()
  @Field(() => Float)
  price: number;

  @Column()
  @Field(() => Float)
  sale_price: number;

  @Column()
  @FilterableField()
  stock: number;

  @Column()
  @Field({ nullable: true })
  Photograph?: string;

  @Column()
  @Field({ nullable: true })
  description?: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @DeleteDateColumn()
  @Field(() => GraphQLISODateTime, { nullable: true })
  deletedAT?: Date;
}
