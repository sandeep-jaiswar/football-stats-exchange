import { Test, TestingModule } from '@nestjs/testing';
import { PlayingTimeService } from './playing_time.service';

describe('PlayingTimeService', () => {
  let service: PlayingTimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayingTimeService],
    }).compile();

    service = module.get<PlayingTimeService>(PlayingTimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
