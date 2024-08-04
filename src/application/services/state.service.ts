import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StateUseCase } from '../usescases/state.usecase';
import { InjectModel } from '@nestjs/mongoose';
import { State } from '@/modules/schemas/state.schema';
import { IState } from '@atisiothings/laniakea-lib-central/dist/domain/region';

@Injectable()
export class StateService implements StateUseCase {

  constructor(@InjectModel(State.name) private stateModel: Model<State>) {}
  
  async create(state: IState): Promise<State> {
    const stateModel = new this.stateModel(state);
    return stateModel.save();
  }
  
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<State[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: String): Promise<State> {
    throw new Error('Method not implemented.');
  }

}
