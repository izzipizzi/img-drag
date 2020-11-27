import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DbConnectionService} from "./db-connection.service";
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: DbConnectionService
  }), PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
