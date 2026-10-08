import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierArtist } from './modifier-artist';

describe('ModifierArtist', () => {
  let component: ModifierArtist;
  let fixture: ComponentFixture<ModifierArtist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierArtist],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierArtist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});