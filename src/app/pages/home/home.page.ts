import { Component, ViewChild } from '@angular/core';
import { Channel, NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
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

  constructor(
    private newsApi: NewsService,
    public event: Events,
    private iab: InAppBrowser,
    public loadingController: LoadingController,
    public platform: Platform,
    public http: HttpClient) {

    this.segmentOptions = this.newsApi.getSegments();
    this.event.publish('scrollToTop', this.content);
     this.showAutoHideLoader('home');
    

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

  goToYoutube(url){
    this.iab.create(url, '_self', 'location=no');
  }

  clickSegment(segment) {
    this.currentTab = segment;
    // console.log(this.currentTab);
    // eval(segment.click);
  }

  ionViewDidEnter() {
    this.content.scrollToTop();
  }

  showAutoHideLoader(option) {
      this.loadingController.create({
      spinner: 'crescent',
      cssClass: 'loader',
      // duration: 1000
      }).then((res) => {

        res.present();

        if(option==="home"){
          this.newsApi.coronaIntro().subscribe(res => {
            this.channelsGang = res;
            this.prepareCall();                  
          });           
        }

        else if(option==="symtoms"){
          this.newsApi.coronaSymptomsVideos().subscribe(res => {
            this.channelsGang = res;
            this.prepareCall();                  
          });            
        } 

        else if(option==="prevention"){
          this.newsApi.coronaPreventionVideos().subscribe(res => {
            this.channelsGang = res;
            this.prepareCall();                  
          });          
        }               


        res.onDidDismiss().then((dis) => {
        });
      });
    }

    prepareCall(){
      this.apiResult=[];
        for(let i=0;i<this.channelsGang.length;i++){
            let videos=this.channelsGang[i]['videos'];
            return this.youtubeApiCall(videos,this.http,this.loadingController,this.apiResult);
        }       
    }
    youtubeApiCall(videos,http,loadingController,apiResult){

      ///////////////////////////
          (async function() {
            for await (let v of videos) {
              // console.log(v);
              let vidInfo='https://www.googleapis.com/youtube/v3/videos?id='+v.vid+'&key=AIzaSyApCtHtDdnp6z11bnYGJwdGj2N4i8NfHx0&part=snippet'; 
                http.get(vidInfo).subscribe((res)=>{
                   // console.log(res)
                  // console.log(res['items'][0]['snippet']['title'])
                  //  console.log(res['items'][0]['snippet']['thumbnails']['default']['url'])
                  // console.log(videos[j].url);
                  loadingController.dismiss();
                let obj={
                      title:res['items'][0]['snippet']['title'],
                      img:res['items'][0]['snippet']['thumbnails']['standard']['url'],
                      url:v.url
                }
                  apiResult.push(obj);
                  
                  // console.log(res);

              })              

            }
          })();      
    }

}
