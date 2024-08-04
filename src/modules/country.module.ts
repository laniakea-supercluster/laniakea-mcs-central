import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Country, CountrySchema } from './schemas/country.schema';
import { CountryUseCase } from '@/application/usescases/country.usecase';
import { CountryService } from '@/application/services/country.service';
import { CountryController } from '@/adapters/inbound/controller/country.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }])
  ],
  controllers: [
    CountryController
  ],
  providers: [
    CountryService,
    { provide: CountryUseCase, useClass: CountryService },
  ],
})
export class StateModule {}
