import { TestBed } from '@angular/core/testing';

import { PoolAssistantClientService } from './pool-assistant-client.service';

describe('PoolAssistantClientService', () => {
  let service: PoolAssistantClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolAssistantClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
