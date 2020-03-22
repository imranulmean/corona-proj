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
  // https://www.googleapis.com/youtube/v3/videos?id=bwSr5n9qFPM&key=AIzaSyApCtHtDdnp6z11bnYGJwdGj2N4i8NfHx0&part=snippet
  private coronaCollection: AngularFirestoreCollection<Channel>;
  private coronaSymptomsCollection: AngularFirestoreCollection<Channel>;
  private coronaPreventionCollection: AngularFirestoreCollection<Channel>;
  private coronaTopNewsCollection: AngularFirestoreCollection<Channel>;


  private coronaVidoes: Observable<Channel[]>;
  private coronaSymptoms: Observable<Channel[]>;
  private coronaPrevention: Observable<Channel[]>;
  private coronaTopNews: Observable<Channel[]>; 
  
  

  /////////////////////////////// Firebase  //////////////////////////////
  headers: any = new HttpHeaders({
    'Cache-Control': 'no-cache, no-store, must-revalidate, post- check=0, pre-check=0, max-age=0, private, max-stale=0',
    Pragma: 'no-cache',
    Expires: '0'
  });   

  constructor(public http: HttpClient,db: AngularFirestore) {
    this.segmentOptions=[
      {value:"home",id:"0",label:"Info"},
      {value:"symtoms",id:"1",label:"Symptoms"},
      {value:"prevention",id:"2",label:"Prevention"},
      {value:"top",id:"3",label:"Top News"},
      
    ];
    ///////////////////////////Firebase //////////////////////
    this.coronaCollection = db.collection<Channel>('coronaDoc'); 

      this.coronaVidoes = this.coronaCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

    this.coronaSymptomsCollection = db.collection<Channel>('coronaSymptoms'); 

      this.coronaSymptoms = this.coronaSymptomsCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

    this.coronaPreventionCollection = db.collection<Channel>('coronaPrevention'); 

      this.coronaPrevention = this.coronaPreventionCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );

    this.coronaTopNewsCollection = db.collection<Channel>('coronaTopNews'); 

      this.coronaTopNews = this.coronaTopNewsCollection.snapshotChanges().pipe(
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
  coronaIntro() {
    return this.coronaVidoes;
  }
  coronaSymptomsVideos(){
    return this.coronaSymptoms;
  }
    coronaPreventionVideos(){
    return this.coronaPrevention;
  }
  coronaTopNewsVideos(){
    return this.coronaTopNews;
  }

  


  // getAllShareMarketPosts(page) {
  //       let rand = Math.random();
  //   return this.http.get(Global.API_SLUG + 'posts?tags=522,30&page=' + page + "&per_page=20"+'&force='+rand);
  // }

}
