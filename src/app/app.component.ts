import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  getdata(val:string)
  {
    console.warn(val)
  }
  displayval='';
  getvalue(val:string)
  {
    console.warn(val)
    this.displayval=val
  }
  count=0
  Counter(type:string)
  {
    type==='add' ? 
    this.count++:this.count--;
  }
}
