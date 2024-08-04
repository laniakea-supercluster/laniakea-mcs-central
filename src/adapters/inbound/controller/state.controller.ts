import { Controller, Get, Inject, Param } from '@nestjs/common';
import { StateUseCase } from '@/application/usescases/state.usecase';
import { State } from '@/modules/schemas/state.schema';

@Controller('/state')
export class StateController {
  constructor(@Inject(StateUseCase) private readonly stateUseCase: StateUseCase) {}

  @Get()
  list(): Promise<State[]> {
    return this.stateUseCase.findAll();
  }

}