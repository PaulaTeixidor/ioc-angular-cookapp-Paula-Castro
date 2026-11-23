import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaBadgeComponent} from './categoria-badge.component';

describe('CategoriaBadge', () => {
  let component: CategoriaBadgeComponent;
  let fixture: ComponentFixture<CategoriaBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaBadgeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
