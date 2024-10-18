import { Component , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
@Input() hero : any
@Output() test : EventEmitter<any> = new EventEmitter()
ngOnInit(): void {
  // console.log(this.hero);
  // this.test.emit('hello sumair')

}
dataSend()
{
  this.test.emit({name: 'Sumair khan', age:24})
}

}
