import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetaListComponent } from './receta-list.component';

describe('RecetaList', () => {
  let component: RecetaListComponent;
  let fixture: ComponentFixture<RecetaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
