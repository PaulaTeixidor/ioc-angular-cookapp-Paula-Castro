import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaCardComponent } from './receta-card.component';
import { RECETAS_MOCK } from '../../data/recetas.mock';

describe('RecetaCard', () => {
  let component: RecetaCardComponent;
  let fixture: ComponentFixture<RecetaCardComponent>;

  beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RecetaCardComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(RecetaCardComponent);
  component = fixture.componentInstance;

  component.receta = RECETAS_MOCK[0];

  await fixture.whenStable();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
