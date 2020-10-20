import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddShoppingListPage } from './add-shopping-list.page';

describe('AddShoppingListPage', () => {
  let component: AddShoppingListPage;
  let fixture: ComponentFixture<AddShoppingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddShoppingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
