import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { GqlAuthGuard } from '../auth/auth.guard';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Product])],
      resolvers: [
        {
          EntityClass: Product,
          DTOClass: Product,
          CreateDTOClass: CreateProductInput,
          UpdateDTOClass: UpdateProductInput,
          guards: [GqlAuthGuard],
          /* 
          Apenas para referencia,  se omitir ele vem como false
          pode desligar o create, update e delete
           create: { disabled: true },//createManyProduct
          create: { many: { disabled: true } }, //desliga o createManyProduct
           */
        },
      ],
    }),
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
