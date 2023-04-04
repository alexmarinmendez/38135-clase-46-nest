import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { ProveedoresModule } from './proveedores/proveedores.module';

@Module({
  imports: [ItemsModule, UsersModule, ProveedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
