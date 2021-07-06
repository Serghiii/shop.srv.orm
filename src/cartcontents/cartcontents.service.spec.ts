import { Test, TestingModule } from '@nestjs/testing';
import { CartContentsService } from './cartcontents.service';

describe('CartContentsService', () => {
  let service: CartContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartContentsService],
    }).compile();

    service = module.get<CartContentsService>(CartContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
