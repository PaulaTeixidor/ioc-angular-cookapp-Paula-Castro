import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaFilterComponent } from './receta-filter.component';

describe('RecetaFilter', () => {
  let component: RecetaFilterComponent;
  let fixture: ComponentFixture<RecetaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
