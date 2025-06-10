import { TestBed } from '@angular/core/testing';

import { SpellsComponent } from '../spells/spells';

describe('Spells', () => {
  let service: SpellsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellsComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
