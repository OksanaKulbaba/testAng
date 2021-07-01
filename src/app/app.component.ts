import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  // for show an screen
  str: string = '';

  // for change style
  color: any;
  display: any;

  subscribe: Subscription = Subscription.EMPTY

  ngOnInit() {
    this.str = this.getRandomString()
    const source = interval(3000);
    this.subscribe = source.subscribe(() => {
      this.str = this.getRandomString()
    })
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }

  // generate string
  getRandomString()  {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < 5; i++ ) {
     result += randomChars. charAt(Math. floor(Math. random() * randomChars. length));
    }
    // get function for change style
    this.checkString(result)

    return result

  }
// check string conditions
  checkString(str:string){
    this.display = ''
    this.color= 'black'
    const strReverse = str.split("").reverse().join("");

    // check if string has '0'
    if(str.includes('0')){
        this.display= 'none'
      }
    //check if string is a palindrome
    else  if (str === strReverse){
       this.color = 'red'
     }

    //check if string has only number
    else if (str.match(/^[0-9]+$/)) {
      this.color = 'blue'
      }

  }


}
