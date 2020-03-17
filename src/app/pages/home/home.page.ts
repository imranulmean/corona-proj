import { Component, ViewChild } from '@angular/core';
import { Channel, NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

// import { AdmobFreeService } from '../../services/admobfree.service';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

declare var require: any;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  segmentOptions: any = [];
  category: any = 'home';
  currentTab: any;
  apiResult:any=[];

  channelsGang: Channel[];
  featuredGang: Channel[];

  constructor(
    private newsApi: NewsService,
    public event: Events,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    public platform: Platform) {

    this.segmentOptions = this.newsApi.getSegments();
    this.event.publish('scrollToTop', this.content);
    
    this.newsApi.getChannels().subscribe(res => {
      this.channelsGang = res;
      // this.loadingController.dismiss();
      console.log(this.channelsGang);
    });     

  }

  ngOnInit() {
    // if (this.platform.is('cordova')) {
    //   this.admobFreeService.BannerAd();
    // }
  }

  goToSegment(buttonNumber: number, side: string) {
    let nextButtonNumber = buttonNumber;
    let buttonWidth = document.getElementById(String(buttonNumber)).offsetWidth;
    document.getElementById(String(nextButtonNumber)).click();
    document.getElementById('segment').scrollLeft = nextButtonNumber * buttonWidth - buttonWidth;
  }

  segmentWiseSwipe(side: string, currentTab: any) {
    this.goToSegment(currentTab, side);
  }

  swipeLeftPress($event) {
    console.log('swipeLeftPress', $event);
    console.log(this.category);
    for (let i = 0; i < this.segmentOptions.length; i++) {
      if (this.segmentOptions[i]['value'] === this.category) {
        this.currentTab = this.segmentOptions[i + 1];
        if (!this.currentTab) {
          this.currentTab = this.segmentOptions[0];
        }
        break;
      }
    }
    this.currentTab = this.currentTab['id'];

    this.segmentWiseSwipe('left', this.currentTab);
  }
  swipeRightPress($event) {
    for (let i = 0; i < this.segmentOptions.length; i++) {
      if (this.segmentOptions[i]['value'] === this.category) {
        this.currentTab = this.segmentOptions[i - 1];
        if (!this.currentTab) {
          this.currentTab = this.segmentOptions[this.segmentOptions.length - 1];
        }
        break;
      }
    }
    this.currentTab = this.currentTab['id'];
    this.segmentWiseSwipe('right', this.currentTab);
  }

  clickSegment(segment) {
    this.currentTab = segment;
    // console.log(this.currentTab);
    eval(segment.click);
  }

  ionViewDidEnter() {
    this.content.scrollToTop();
  }

  // getTechPosts() {
  //   this.newsApi.getAllTechPosts(this.pageNumber).subscribe(result => {
  //     this.apiResult(result);
  //   });


  // }

}
