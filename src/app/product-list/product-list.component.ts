import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
images = ['https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-syd1sn/master/src/assets/pic2.jpg', 'https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-syd1sn/master/src/assets/pic3.jpg', 'https://raw.githubusercontent.com/phiwesriva/angular-xv4yjj-syd1sn/master/src/assets/pic4.jpg'];
//.map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
 constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.wrap = true;
  }
ngOnInit(): void {
throw new Error('Method not implemented.');
}
  products = products;
}

/*
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/