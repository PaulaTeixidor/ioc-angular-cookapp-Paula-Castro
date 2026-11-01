import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaFilter } from './receta-filter.component';

describe('RecetaFilter', () => {
  let component: RecetaFilter;
  let fixture: ComponentFixture<RecetaFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
