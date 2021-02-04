import { FilterableField } from '@nestjs-query/query-graphql';
import {
  ObjectType,
  Field,
  GraphQLISODateTime,
  HideField,
} from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { hashPasswordTransform } from '../../shared/helpers/crypto';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  uuid: string;

  @Column()
  @FilterableField()
  name: string;

  @Column()
  @Field()
  email: string;

  @Column({ transformer: hashPasswordTransform })
  @HideField()
  password: string;

  @CreateDateColumn()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => GraphQLISODateTime)
  updateAt: Date;
}
