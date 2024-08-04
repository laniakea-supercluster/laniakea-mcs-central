import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/adapters/inbound/controller/app.controller';
// import { AppService } from '@/application/services/app.service';
import { StateModule } from './modules/state.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.develop.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI as string),
    StateModule
  ],
})
export class AppModule {}
