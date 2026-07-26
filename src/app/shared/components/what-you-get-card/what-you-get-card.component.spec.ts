import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouGetCardComponent } from './what-you-get-card.component';

describe('WhatYouGetCardComponent', () => {
  let component: WhatYouGetCardComponent;
  let fixture: ComponentFixture<WhatYouGetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatYouGetCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatYouGetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
