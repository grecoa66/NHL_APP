import { TestBed, inject } from '@angular/core/testing';

import { GamelogsService } from './gamelogs.service';

describe('GamelogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamelogsService]
    });
  });

  it('should be created', inject([GamelogsService], (service: GamelogsService) => {
    expect(service).toBeTruthy();
  }));
});
