import { Test, TestingModule } from '@nestjs/testing';
import { ParentsController } from './controllers/parents.controller';

describe('ParentsController', () => {
  let controller: ParentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentsController],
    }).compile();

    controller = module.get<ParentsController>(ParentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
