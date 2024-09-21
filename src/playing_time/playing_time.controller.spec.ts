import { Test, TestingModule } from '@nestjs/testing';
import { PlayingTimeController } from './playing_time.controller';
import { PlayingTimeService } from './playing_time.service';

describe('PlayingTimeController', () => {
  let controller: PlayingTimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayingTimeController],
      providers: [PlayingTimeService],
    }).compile();

    controller = module.get<PlayingTimeController>(PlayingTimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
