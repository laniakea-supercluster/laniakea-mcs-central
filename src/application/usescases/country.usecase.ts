import { Country } from "@/modules/schemas/country.schema";

export interface CountryUseCase {

  create(country: Country): Promise<Country>;

  delete(id: string);

  findAll(): Promise<Country[]>;

  findOne(id: String): Promise<Country>;

}

export const CountryUseCase = Symbol('CountryUseCase');
