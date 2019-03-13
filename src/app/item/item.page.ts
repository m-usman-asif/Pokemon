import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: 'item.page.html',
  styleUrls: ['item.page.scss']
})
export class ItemPage implements OnInit {

  itemList: any [];

  constructor(private itemService: ItemService,
              private http: HttpClient) { }

    ngOnInit() {
      this.itemService.getAllitems().subscribe(result => {
        this.itemList = result.results;
        console.log(this.itemList);
      });
     }
}
