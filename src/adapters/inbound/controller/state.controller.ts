import { Controller, Get, Inject } from '@nestjs/common';
import { Domain } from '@/domain/app.domain';
import { AppUseCase } from '@/application/usescases/app.usecase';

@Controller('/state')
export class StateController {
  constructor(@Inject(AppUseCase) private readonly appUseCase: AppUseCase) {}

  @Get()
  getDomain(): Domain {
    return this.appUseCase.getDomain();
  }
}