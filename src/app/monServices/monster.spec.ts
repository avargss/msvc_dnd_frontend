import { TestBed } from '@angular/core/testing';
import { MonsterComponent } from '../monster/monster';
describe('Monster', () => {
  let service: MonsterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
