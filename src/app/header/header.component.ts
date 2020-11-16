import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
images = ['https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-cas1wh/master/src/assets/tb1.jpg',
 'https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-cas1wh/master/src/assets/dress.jpg',
 'https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-cas1wh/master/src/assets/tb2.jpg',
 'https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-cas1wh/master/src/assets/tb3.jpg','https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-cas1wh/master/src/assets/tb4.jpg'];

//.map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.wrap = true;
    config.showNavigationArrows = false;
  }

  ngOnInit() {
  }

  //async ngOnInit() {
   // this.cartItem = await this.cartService.getCart();
   // this.cartService.prodCountCountChange.subscribe(
    //    newProdCount => this.cartCount = newProdCount
   // );
//}
// and don't forget to unsubscribe
ngOnDestroy() {
   this.cartService.prodCountCountChange.unsubscribe();
}

}
//
//async ngOnInit() {
  //  this.cartItem = await this.cartService.getCart();
    //this.cartService.prodCountCountChange.subscribe(
      //  newProdCount => this.cartCount = newProdCount
    //);
//}
// and don't forget to unsubscribe
//ngOnDestroy() {
 //   this.cartService.prodCountCountChange.unsubscribe();
//}