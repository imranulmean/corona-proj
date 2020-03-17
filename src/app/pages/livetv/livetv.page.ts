import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livetv',
  templateUrl: './livetv.page.html',
  styleUrls: ['./livetv.page.scss'],
})
export class LivetvPage implements OnInit {

  tvChannels: any = [];
  newsPapers:any = [];
  tv_newspapers:any=[];
  showSegment:number=1;
  constructor(private iab: InAppBrowser,private httpClient: HttpClient ) {
    this.tvChannels = [
      // tslint:disable-next-line: indent
      { channelName: 'BTV World', url: 'https://www.bioscopelive.com/en/channel/btv-world', logo: 'https://i2.wp.com/tvbd.live/wp-content/uploads/2016/11/btv-world.png?fit=400%2C225' },
      { channelName: 'Jamuna TV', url: 'http://www.jagobd.com/jamunatv', logo: 'http://www.deshibiz.com/img/media/post/1463733058_jamunatv6.jpg' },
      { channelName: 'Somoy News', url: 'http://somoynews.tv/live.php', logo: 'https://www.freeetv.com/images/03_logo/Somoy_News_Bangladesh.jpg' },
      { channelName: 'Ekattur TV', url: 'https://www.bioscopelive.com/en/channel/ekattur-tv', logo: '../../../assets/img/tv-logos/ekattor-tv.png' },
      { channelName: 'Independent TV', url: 'https://www.bioscopelive.com/en/channel/independent-tv', logo: '../../../assets/img/tv-logos/independent-tv-logo.png' },
      { channelName: 'ATN Bangla', url: 'https://www.bioscopelive.com/en/channel/atn-bangla', logo: '../../../assets/img/tv-logos/atn-bangla-tv.png' },
      { channelName: 'My TV', url: 'https://www.bioscopelive.com/en/channel/my-tv', logo: '../../../assets/img/tv-logos/my-tv-logo.png' },
      { channelName: 'SA TV', url: 'https://www.bioscopelive.com/en/channel/sa-tv', logo: '../../../assets/img/tv-logos/satv.png' },
      { channelName: 'ATN NEWS', url: 'https://www.bioscopelive.com/en/channel/atn-news', logo: '../../../assets/img/tv-logos/Atn_news.png' },
      { channelName: 'BBC World', url: 'https://www.bioscopelive.com/en/channel/bbc-world', logo: '../../../assets/img/tv-logos/bbc_world.png' },
      { channelName: 'Ananda TV', url: 'https://www.bioscopelive.com/en/channel/ananda-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/HRjXQdYEqsE.png' },
      { channelName: 'Nagorik Tv', url: 'https://www.bioscopelive.com/en/channel/nagorik-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/6ms91aehi2a.png' },
      { channelName: 'Mohona TV', url: 'https://www.bioscopelive.com/en/channel/mohona-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/UU3a2v6E7Zs.png' },
      { channelName: 'Boishakhi TV', url: 'https://www.bioscopelive.com/en/channel/boishakhi-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/20mgRCbFLz5.png' },
      { channelName: 'DBC News', url: 'https://www.bioscopelive.com/en/channel/dbc-news', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/6GxyIRO4P74.png' },
      { channelName: 'Asian TV', url: 'https://www.bioscopelive.com/en/channel/asian-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/84xExHj3DJ8.png' },
      { channelName: 'Ruposhi Bangla', url: 'https://www.bioscopelive.com/en/channel/ruposhi-bangla', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/105QtNR46SH.png' },
      { channelName: 'ATN Islamic TV', url: 'https://www.bioscopelive.com/en/channel/atn-islamic-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/DJcpP2t4Mdp.png' },
      { channelName: 'Sangsad Bangla', url: 'https://www.bioscopelive.com/en/channel/sangsad-tv', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/So3Og8HY4uN.png' },
      { channelName: 'Al Jazeera', url: 'https://www.bioscopelive.com/en/channel/al-jazeera', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/0iLtx9H8sr5.png' },
      { channelName: 'Channel 24', url: 'http://www.channel24bd.tv/live', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BJaziwAkuVDBZRuNBuArfKqzINnznF863p6bFp48ynoUoa4L' },
      { channelName: 'Channeli', url: 'https://www.channelionline.com/live-tv/', logo: 'https://dxtm6s46jarcs.cloudfront.net/wp-content/uploads/2015/03/channel-i-logo.jpg' },
      { channelName: 'RTV', url: 'https://www.youtube.com/watch?v=nqNWfE_Nq2U', logo: 'https://www.rtvbd.tv/templates/rtv/img/logo.png' },
      { channelName: 'NTV', url: 'https://www.channel-bd.net/channel.php?id=3', logo: 'https://www.trzcacak.rs/myfile/detail/354-3547607_ntv-logo-bangladesh-tv-channel.png' },
      { channelName: 'GTV', url: 'https://www.nbs24.org/live-channel-nine-%E0%A6%9A%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B2-%E0%A6%A8%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AD-channel-9-live/', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHS9VSC-V5QnK9mbSn0mjZUYxp1QGMAAAY9jc0itHn1dMWZNk' },
      { channelName: 'NEWS24 TV', url: 'http://www.jagobd.com/news24tv', logo: 'http://www.southafricanews24.net/wp-content/uploads/news24.png' },
      { channelName: 'Peace TV', url: 'http://peacetvnetwork.visionip.tv/live/62424', logo: 'http://www.desifree.tv/wp-content/uploads/peace-tv.jpg' },
      { channelName: 'Gaan Bangla', url: 'https://www.bioscopelive.com/en/channel/gaan-bangla', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/um9o21i3T1E.png' },
      { channelName: 'Bongo Movies', url: 'https://www.bioscopelive.com/en/channel/bongo-movies', logo: 'https://cdn.bioscopelive.com/upload/channels/sd/Mq2jeWV007t.png' },
      { channelName: '9XM MUSIC', url: 'http://9xm.in/livetv.php', logo: 'https://www.indiantelevision.com/sites/default/files/images/tv-images/2014/05/29/9xm_new.jpg' },
    ];

    this.newsPapers=[
    // https://www.dsebd.org/images/logo.png
    // https://www.dsebd.org/images/dse-name.jpg
    {channelName: 'www.dsebd.org', url: 'https://www.dsebd.org/', logo: 'https://www.dsebd.org/images/dse-name.jpg' },
     { channelName: 'Bangladesh Pratidin', url: 'https://www.bd-pratidin.com/', logo: 'https://www.bd-pratidin.com/assets/importent_images/main_logo.gif?v=1567837737' },
     { channelName: 'Kaler Kantho', url: 'https://www.kalerkantho.com/index.php', logo: 'https://www.kalerkantho.com/assets/site/img/logo.png' },
     { channelName: 'Jugantor', url: 'https://www.jugantor.com/', logo: 'https://www.jugantor.com/templates/jugantor-v2/images/logo_main.png?v=1' },
     { channelName: 'Ittefaq', url: 'https://www.ittefaq.com.bd/', logo: 'https://www.ittefaq.com.bd/templates/desktop-v1/images/main-logo.png' },
     { channelName: 'Manab Zamin', url: 'http://www.mzamin.com/', logo: 'http://www.mzamin.com/asset/images/logos.png' },
     { channelName: 'Samakal', url: 'https://samakal.com/', logo: 'https://samakal.com/assets/images/logo-bn.png' },
     { channelName: 'Amader Shomoy', url: 'http://www.dainikamadershomoy.com/', logo: 'http://www.dainikamadershomoy.com/files/assets/img/main-logo.png' },
     { channelName: 'Prothom Alo', url: 'https://www.prothomalo.com/', logo: 'https://paloimages.prothom-alo.com/contents/themes/public/style/images/Prothom-Alo.png' },
     { channelName: 'Janakantha', url: 'http://web.dailyjanakantha.com/', logo: 'http://web.dailyjanakantha.com/layouts/website/assets/img/header-top.png' },
     { channelName: 'Inqilab', url: 'https://www.dailyinqilab.com/', logo: 'https://www.dailyinqilab.com/includes/themes/dailyinqilab/images/logo.png' },
     { channelName: 'Bhorer Kagoj', url: 'https://www.bhorerkagoj.com/', logo: 'https://www.w3newspapers.com/bangladesh/images/bhorerkagoj.png' },
     {channelName: 'Daily Star', url: 'https://www.thedailystar.net/', logo: 'https://assetsds.cdnedge.bluemix.net/sites/all/themes/tds/logo.svg' },
     {channelName: 'Observer', url: 'https://www.observerbd.com/', logo: 'https://www.observerbd.com/files/logo.jpg' },
     {channelName: 'Bangladesh Today', url: 'http://thebangladeshtoday.com/', logo: 'https://thebangladeshtoday.com/wp-content/uploads/2018/06/TBT-Logo-Transparent-1-1.png' },
     {channelName: 'bdnews24.com', url: 'https://bangla.bdnews24.com/', logo: 'https://d30fl32nd2baj9.cloudfront.net/media/2013/01/04/logo1.png1/BINARY/logo1.png' },
     {channelName: 'banglanews24.com', url: 'https://www.banglanews24.com', logo: 'https://www.banglanews24.com/media/imgAll/2016October/bg/banglanews_logo20180725112204.jpg' },
     {channelName: 'dailystockbangladesh', url: 'https://www.dailystockbangladesh.com', logo: '../../../assets/img/news-source-icons/dailystock.png' },
     
    ];
   this.tv_newspapers=this.tvChannels;
  }

  goToChannel(url) {
    let openBrowser=this.showSegment==1 ? '_system':'_self';
    this.iab.create(url, openBrowser, 'location=yes');
  }
  segmentChanged(ev: any) {
     console.log('Segment changed', ev.detail.value);
     this.showSegment=ev.detail.value;
     this.showSegment==1 ? document.getElementById("ionContentLive").style.setProperty('--background','#f1f1f1' ) : document.getElementById("ionContentLive").style.setProperty('--background','#ffffff' );
     this.goToSegment(); 
  }

  goToSegment(){
   this.tv_newspapers=this.showSegment==1 ?  this.tvChannels : this.newsPapers;       
    let nextButtonNumber:number = this.showSegment;
    document.getElementById(String(nextButtonNumber)).click();
    let buttonWidth = document.getElementById(String(nextButtonNumber)).offsetWidth;
    document.getElementById('segment').scrollLeft = nextButtonNumber * buttonWidth - buttonWidth; 
  } 
  swipeLeftPress($event) {
   this.showSegment=Number(this.showSegment)+1;
   if(this.showSegment>2) {
    this.showSegment=1;
   }
   this.goToSegment();
   
  }

 
  swipeRightPress($event) {
   this.showSegment=Number(this.showSegment)-1;
   if(this.showSegment<1) {
    this.showSegment=2;
   }
   this.goToSegment();
  }

  ngOnInit() {
  }

}
