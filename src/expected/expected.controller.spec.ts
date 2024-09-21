import { Test, TestingModule } from '@nestjs/testing';
import { ExpectedController } from './expected.controller';
import { ExpectedService } from './expected.service';

describe('ExpectedController', () => {
  let controller: ExpectedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpectedController],
      providers: [ExpectedService],
    }).compile();

    controller = module.get<ExpectedController>(ExpectedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
