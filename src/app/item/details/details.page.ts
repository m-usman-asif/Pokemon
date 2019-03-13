import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {


  itemId: string;
  itemDetail: any;
  isLoading = false;

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('itemId');
    this.isLoading = true;
    this.getDetails();
    this.loadingCtrl.create({message: 'loading details'}).then((loadingEl) => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
      }, 1000);
    });
    //console.log(this.itemId);
  }

  getDetails() {
    this.itemService.getItemDetails(this.itemId).subscribe(result => {
      this.itemDetail = result;
      console.log(this.itemDetail);
    });
  }

}
