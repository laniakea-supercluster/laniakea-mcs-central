import { Controller, Get, Inject, Param } from '@nestjs/common';
import { CountryUseCase } from "@/application/usescases/country.usecase";
import { Country } from '@/modules/schemas/country.schema';

@Controller('/country')
export class CountryController {
  constructor(@Inject(CountryUseCase) private readonly countryUseCase: CountryUseCase) {}

  @Get()
  list(): Promise<Country[]> {
    return this.countryUseCase.findAll();
  }

}