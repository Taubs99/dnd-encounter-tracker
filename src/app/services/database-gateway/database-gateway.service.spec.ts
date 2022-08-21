import { TestBed } from '@angular/core/testing';

import { DatabaseGatewayService } from './database-gateway.service';

describe('DatabaseGatewayService', () => {
  let service: DatabaseGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
