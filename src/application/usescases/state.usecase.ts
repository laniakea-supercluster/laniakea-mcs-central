import { State } from "@/modules/schemas/state.schema";
import { IState } from "@atisiothings/laniakea-lib-central/dist/domain/region";

export interface StateUseCase {

  create(state: IState): Promise<State>;

  delete(id: string);

  findAll(): Promise<State[]>;

  findOne(id: String): Promise<State>;

}

export const StateUseCase = Symbol('StateUseCase');
