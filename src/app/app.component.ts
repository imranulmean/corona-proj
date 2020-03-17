import { Component, ViewChildren, QueryList} from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, IonRouterOutlet, ModalController, MenuController, PopoverController, ActionSheetController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import {Location} from '@angular/common';
import { NavController } from '@ionic/angular';
import { NewsService } from './services/news.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})


export class AppComponent {

  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  /* get a reference to the used IonRouterOutlet 
  assuming this code is placed in the component
  that hosts the main router outlet, probably app.components */
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  public subMenu= {open:false};
  subRoutes: any = [];
  randomHome:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private router: Router,
    private toast: Toast,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private popoverCtrl: PopoverController,
    private actionSheetCtrl: ActionSheetController,
    private location: Location,
    private navCtrl:NavController,private newsApi: NewsService,
  ) {
    this.initializeApp();

    // Initialize BackButton Eevent.
    this.backButtonEvent();
    // this.subRoutes=[
    //  {routeName:"home", routeOption:"/home/0",id:"0",logo:"../assets/img/menu-icons/prothom-pata.svg"},
    // {routeName:"bangladesh", routeOption:"/home/2",id:"2",logo:"../assets/img/menu-icons/bangladesh.svg"},
    // {routeName:"politics", routeOption:"/home/3",id:"3",logo:"../assets/img/menu-icons/politics.svg"},
    // {routeName:"international", routeOption:"/home/4",id:"4",logo:"../assets/img/menu-icons/international.svg"},
    // {routeName:"economy", routeOption:"/home/5",id:"5",logo:"../assets/img/menu-icons/economy.svg"},
    // {routeName:"share", routeOption:"/home/6",id:"6",logo:"../../../assets/img/menu-icons/others.svg"},
    // {routeName:"sports", routeOption:"/home/7",id:"7",logo:"../assets/img/menu-icons/game.svg"},
    // {routeName:"entertainment", routeOption:"/home/8",id:"8",logo:"../assets/img/menu-icons/buzz.svg"},
    // {routeName:"tech", routeOption:"/home/9",id:"9",logo:"../assets/img/menu-icons/science.svg"},
    // {routeName:"lifeStyle", routeOption:"/home/10",id:"10",logo:"../assets/img/menu-icons/lifestyle.svg"},
    // {routeName:"education", routeOption:"/home/11",id:"11",logo:"../assets/img/menu-icons/education.svg"},
    // {routeName:"crime", routeOption:"/home/12",id:"12",logo:"../assets/img/menu-icons/crime.svg"},
    // {routeName:"culture", routeOption:"/home/13",id:"13",logo:"../assets/img/menu-icons/literature.svg"},
    // {routeName:"vivid", routeOption:"/home/14",id:"14",logo:"../assets/img/menu-icons/bichitro.svg"},
    // {routeName:"business", routeOption:"/home/15",id:"15",logo:"../assets/img/menu-icons/business.svg"},
    // {routeName:"horoscope", routeOption:"/home/16",id:"16",logo:"../assets/img/menu-icons/horoscope.svg"},
    // ];
    this.subRoutes=this.newsApi.getSegments();
  }
  openHome(routeObjId){
    // console.log(routeObjId);
      let rHome="random"+Math.random();
      this.navCtrl.navigateRoot('home/'+rHome+"id"+routeObjId);
  }
  openMenuList(){
    
    if (!this.subMenu.open) {
       this.subMenu.open=true;
       let routeInterval= setInterval(() => {
          if(document.getElementById('menuList')) {
           document.getElementById('menuList').style.height = '17em';
            clearInterval(routeInterval);         
          }
        }, 100);        
    }
    else{
      document.getElementById('menuList').style.height = '0';
      setTimeout(() => {
          this.subMenu.open=false;
        },1000)      
      // this.subMenu.open=false;
    }

    
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        // this.setupPush();
      }
      if (window.statusbar) {
        this.statusBar.hide();
      }
    });
  }

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('3eb9384e-2985-4a4b-a7f8-2c1b619230ab', '78641323676');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {

      // Just a note that the data is a different place here!
      const additionalData = data.notification.payload.additionalData;
      this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });

    this.oneSignal.endInit();
  }

  async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: `Action: ${task}`,
          handler: () => {
            // E.g: Navigate to a specific screen
          }
        }
      ]
    });
    alert.present();
  }


  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
        this.openHome("0");
        // close action sheet
        // try {
        //     const element = await this.actionSheetCtrl.getTop();
        //     if (element) {
        //         element.dismiss();
        //         return;
        //     }
        // } catch (error) {
        // }

        // // close popover
        // try {
        //     const element = await this.popoverCtrl.getTop();
        //     if (element) {
        //         element.dismiss();
        //         return;
        //     }
        // } catch (error) {
        // }

        // // close modal
        // try {
        //     const element = await this.modalCtrl.getTop();
        //     if (element) {
        //         element.dismiss();
        //         return;
        //     }
        // } catch (error) {
        //     console.log(error);

        // }

        // // close side menua
        // try {
        //     const element = await this.menu.getOpen();
        //     if (element) {
        //         this.menu.close();
        //         return;

        //     }

        // } catch (error) {

        // }

        // this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        //     if (outlet && outlet.canGoBack()) {
        //         outlet.pop();

        //     } else if (this.router.url === '/home') {
        //         if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
        //             // this.platform.exitApp(); // Exit from app
        //             navigator['app'].exitApp(); // work in ionic 4

        //         } else {
        //             this.toast.show(
        //                 `Press back again to exit App.`,
        //                 '2000',
        //                 'center')
        //                 .subscribe(toast => {
        //                     // console.log(JSON.stringify(toast));
        //                 });
        //             this.lastTimeBackPress = new Date().getTime();
        //         }
        //     }
        // });
    });
}


}// end of class
