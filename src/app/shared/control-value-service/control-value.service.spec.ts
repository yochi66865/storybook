import { TestBed } from '@angular/core/testing';

import { ControlValueService } from './control-value.service';

describe('ControlValueService', () => {
  let service: ControlValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
