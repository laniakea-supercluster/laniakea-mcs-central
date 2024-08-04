import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CountryUseCase } from '../usescases/country.usecase';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from '@/modules/schemas/country.schema';
import { ICountry } from '@atisiothings/laniakea-lib-central/dist/domain/region';

@Injectable()
export class CountryService implements CountryUseCase {

  constructor(@InjectModel(Country.name) private countryModel: Model<Country>) {}

  async create(country: ICountry): Promise<Country> {    
    const countryModel = new this.countryModel(country);
    return countryModel.save();
  }

  delete(id: string) {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Country[]> {
      return this.countryModel.find().exec();
  }
  findOne(id: String): Promise<Country> {
      throw new Error('Method not implemented.');
  }

}
