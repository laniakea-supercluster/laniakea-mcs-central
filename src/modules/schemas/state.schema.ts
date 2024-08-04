import { ICountry, IState } from "@atisiothings/laniakea-lib-central/dist/domain/region";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StateDocumentType = HydratedDocument<State>;

@Schema({ collection: 'states_v2' })
export class State {
    // @Prop()
    // country: ICountry;
    @Prop()
    _id: string;
    @Prop()
    name: string;
    @Prop()
    areaCode: number;
    @Prop()
    hasDST: boolean;
    @Prop()
    createdOn: Date;
    @Prop()
    changedOn: Date;
    @Prop()
    signature: string;
}

export const StateSchema = SchemaFactory.createForClass(State);
