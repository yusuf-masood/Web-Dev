import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];



  share_wtsp(item_url:string) {
    window.alert(window.open(`https://web.whatsapp.com://send?text=${item_url}`));
  }

  share_telegram(item_url:string) {
    window.alert(window.open(`https://telegram.me/share/url?url=<${item_url}>&text=<TEXT>`));
  }

}