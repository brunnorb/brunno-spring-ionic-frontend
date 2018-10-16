import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items: ProdutoDTO[];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public produtoService: ProdutoService,
      public loadingCtrl: LoadingController
      ) {
  }

  doRefresh(refresher) {
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }


  presentLoading(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData(){
    let categoriaId = this.navParams.get('categoriaId');
    let loader = this.presentLoading();
    this.produtoService.findByCategoria(categoriaId)
      .subscribe(response => {
                this.items = response['content'];
                this.loadImageUrls();
                loader.dismiss();

      },
      error => {
        loader.dismiss();
      });

  }

  loadImageUrls(){
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.getSmallImageFromBucket(item.id)
          .subscribe(response => {
             item.imageUrl = `${API_CONFIG.bucketbaseUrl}/prod${item.id}-small.jpg`;
          },
          error => {});
    }
  }

  showDetail(produtoId:string){
    this.navCtrl.push('ProdutoDetailPage',{ produtoId: produtoId });
  }

}

