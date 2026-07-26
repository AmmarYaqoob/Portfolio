import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoDevelopmentComponent } from './seo-development.component';

describe('SeoDevelopmentComponent', () => {
  let component: SeoDevelopmentComponent;
  let fixture: ComponentFixture<SeoDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeoDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeoDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
