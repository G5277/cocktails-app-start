import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCocktailsComponent } from './your-cocktails.component';

describe('YourCocktailsComponent', () => {
  let component: YourCocktailsComponent;
  let fixture: ComponentFixture<YourCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourCocktailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
