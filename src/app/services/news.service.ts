import { Injectable } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import * as Global from '../../globalSettings';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Channel {

}

@Injectable({
  providedIn: 'root'
})


export class NewsService {

  apiURL = Global.API_SLUG;
  data: any = [];
  segmentOptions:any=[];

  /////////////////////////////// Firebase  //////////////////////////////
  
  private channelCollection: AngularFirestoreCollection<Channel>;
  private featuredGamesCollection: AngularFirestoreCollection<Channel>;
  private channels: Observable<Channel[]>;
  private featuredGames: Observable<Channel[]>;
  private featuredChannel:any;

  /////////////////////////////// Firebase  //////////////////////////////
  headers: any = new HttpHeaders({
    'Cache-Control': 'no-cache, no-store, must-revalidate, post- check=0, pre-check=0, max-age=0, private, max-stale=0',
    Pragma: 'no-cache',
    Expires: '0'
  });   

  constructor(public http: HttpClient,db: AngularFirestore) {
    this.segmentOptions=[
      {value:"home",id:"0",label:"Home"},
      {value:"Videos",id:"0",label:"Videos"}
      
    ];
    ///////////////////////////Firebase //////////////////////
    this.channelCollection = db.collection<Channel>('allChannels'); 
    this.featuredGamesCollection = db.collection<Channel>('Featured Games');

      this.channels = this.channelCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

      this.featuredGames = this.featuredGamesCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );    
    //////////////////////////Firebase ///////////////////////    

  }

  getSegments(){
    return this.segmentOptions;
  }
  getChannels() {
    return this.channels;
  } 
  getFeaturedGames() {
    return this.featuredGames;
  }  
 


  // getAllShareMarketPosts(page) {
  //       let rand = Math.random();
  //   return this.http.get(Global.API_SLUG + 'posts?tags=522,30&page=' + page + "&per_page=20"+'&force='+rand);
  // }

}
