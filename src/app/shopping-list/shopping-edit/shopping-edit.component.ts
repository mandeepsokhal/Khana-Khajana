import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameContentRef :ElementRef;
  @ViewChild('amountInput') amountContentRef :ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  OnAddItem()
  {
    const nameIng = this.nameContentRef.nativeElement.value;
    const amountIng = this.amountContentRef.nativeElement.value;
    const ingredientValues = new Ingredient(nameIng,amountIng);
     this.ingredientAdded.emit(ingredientValues);
  }
}
