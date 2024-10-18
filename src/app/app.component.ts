import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  Fname = 'Sumair ul haq'
  Interpolation = 'Angular'
  getName() {
    return this.Fname
  }
  obj = {
    name: 'Ali',
    age: 20
  }
  arr = ['sumair', 'usman', 'shahroze']
  a = 10
  b = 20

  siteUrl = window.location.href;

  getVal(x: any) {
    alert(x)
  }
  myEvent(e: any) {
    console.log(e)
  }
// currentVal = ''
//   test(val : any)
//   {
//       console.log(val.target.value)
//       this.currentVal = val.target.value;
//   }

currentVal = ''
getBtn(v: any) {
  console.log(v);
  this.currentVal = v;
}

lname = 'peter'
disabledInput = true
EnBtn()
{
this.disabledInput = false
}

show=true;

// isLoggedIn = false

isLoggedIn: boolean = false;
isSignUpPage: boolean = true;

// color = 'green'

// data = ['Sumair','Peter','Bruce','Sam']

data = [
  {
    name:'Sumair',
    age : 25
  },
  {
    name:'Peter',
    age : 26
  },
  {
    name:'Bruce',
    age : 28
  },
  {
    name:'Sam',
    age : 29
  }
]

getUserValue(userVal : any)
{
  console.log(userVal)
}

color='orange'

updateColor()
{
  this.color = 'aqua'
}
err=true

isCollapsed = true;

// sendData  = 'Bruce'

sendData = {
  name : 'Bruce',
  age : 24
}

// sendData = [
//   {
//     name : 'peter',
//     age : 20
//   },
//   {
//     name : 'bruce',
//     age : 30
//   },
//   {
//     name : 'harry',
//     age : 15
//   },
//   {
//     name : 'sam',
//     age : 18
//   },
// ]

parentComponent(record  :any)
{
  console.log(record)
}


}

