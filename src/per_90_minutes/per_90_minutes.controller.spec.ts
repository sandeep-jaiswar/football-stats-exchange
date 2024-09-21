import { Test, TestingModule } from '@nestjs/testing';
import { Per90MinutesController } from './per_90_minutes.controller';
import { Per90MinutesService } from './per_90_minutes.service';

describe('Per90MinutesController', () => {
  let controller: Per90MinutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Per90MinutesController],
      providers: [Per90MinutesService],
    }).compile();

    controller = module.get<Per90MinutesController>(Per90MinutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
