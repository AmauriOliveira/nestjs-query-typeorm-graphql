import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Product])],
      resolvers: [
        {
          EntityClass: Product,
          DTOClass: Product,
        },
      ],
    }),
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
