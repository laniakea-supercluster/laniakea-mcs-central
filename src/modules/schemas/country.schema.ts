import { ICountry } from "@atisiothings/laniakea-lib-central/dist/domain/region";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CountryDocumentType = HydratedDocument<Country>;

@Schema({ collection: 'countries' })
export class Country implements ICountry {
    @Prop()
    _id: number;
    @Prop()
    code: number;
    @Prop()
    name: string;
    @Prop()
    mcc: number;
    @Prop()
    initials: string;
    @Prop()
    createdOn: Date;
    @Prop()
    changedOn: Date;
    @Prop()
    signature: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
