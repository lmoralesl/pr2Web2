import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabalproductoComponent } from './tabalproducto.component';

describe('TabalproductoComponent', () => {
  let component: TabalproductoComponent;
  let fixture: ComponentFixture<TabalproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabalproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabalproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
