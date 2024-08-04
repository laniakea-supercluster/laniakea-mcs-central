import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StateController } from '../adapters/inbound/controller/state.controller';
import { StateService } from '@/application/services/state.service';
import { StateUseCase } from '@/application/usescases/state.usecase';
import { State, StateSchema } from './schemas/state.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: State.name, schema: StateSchema }])
  ],
  controllers: [
    StateController
  ],
  providers: [
    StateService,
    { provide: StateUseCase, useClass: StateService },
  ],
})
export class StateModule {}
