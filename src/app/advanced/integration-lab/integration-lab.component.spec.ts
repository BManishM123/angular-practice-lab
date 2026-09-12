import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationLabComponent } from './integration-lab.component';

describe('IntegrationLabComponent', () => {
  let component: IntegrationLabComponent;
  let fixture: ComponentFixture<IntegrationLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
