import { TestBed } from '@angular/core/testing';
import { Receta } from './receta.service';

describe('Receta', () => {
  let service: Receta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Receta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
