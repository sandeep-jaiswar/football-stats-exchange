import { Test, TestingModule } from '@nestjs/testing';
import { ExpectedService } from './expected.service';

describe('ExpectedService', () => {
  let service: ExpectedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpectedService],
    }).compile();

    service = module.get<ExpectedService>(ExpectedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
