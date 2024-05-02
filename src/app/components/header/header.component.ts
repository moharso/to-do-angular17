import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent {
  searchControl=new FormControl("")
  @Output() search=new EventEmitter<string>();
  ngOnInit(){
    this.searchControl.valueChanges.subscribe((value)=>{
      console.log(value)
      this.search.emit(value || "")
    })
  }
}
