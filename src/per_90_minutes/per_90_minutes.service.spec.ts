import { Test, TestingModule } from '@nestjs/testing';
import { Per90MinutesService } from './per_90_minutes.service';

describe('Per90MinutesService', () => {
  let service: Per90MinutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Per90MinutesService],
    }).compile();

    service = module.get<Per90MinutesService>(Per90MinutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
