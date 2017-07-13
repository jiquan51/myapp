import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Refresher } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Yhxx } from "../../models";
import { ZxxcService } from "../../providers";
import { Content } from 'ionic-angular';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  templateUrl: 'about-details.html',
})
export class AboutDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  items: Yhxx[] = [];
  loading: boolean;
  yhxxSource: Observable<Yhxx[]>;
  // page: number = 1;
  public people: any = [];
  private start: number = 1;
  @ViewChild(Content) content: Content;
  // public ionScroll;
  public showButton = true;

  constructor(
    public nav: NavController,
    public myElement: ElementRef,
    private zxxcService: ZxxcService
  ) {
    // this.items = [
    //   {
    //     'title': '现在大学生寻工作还需要送钱啊？ 注目无锡 东林书院',
    //     'icon': 'angular',
    //     'url': 'http://bbs.thmz.com/thread-2718917-1-1.html',
    //     'color': '#E63135',
    //     'mgcString': '包大人',
    //     'publishtime': '2017-07-05'
    //   },
    //   {
    //     'title': '泰国金泰娜天然乳胶床垫',
    //     'icon': 'css3',
    //     'url': 'http://bbs.my0511.com/f627b-t6458153z-1-1',
    //     'color': '#0CA9EA',
    //     'mgcString': '包大人',
    //     'publishtime': '2017-07-08'
    //   },
    // ]
  }

  ngOnInit() {
    // // Ionic scroll element
    // this.ionScroll = this.myElement.nativeElement.children[1].firstChild;
    // // On scroll function
    // this.ionScroll.addEventListener("scroll", () => {
    //   if (this.ionScroll.scrollTop > window.innerHeight) {
    //     this.showButton = true;
    //   } else {
    //     this.showButton = false;
    //   }
    // });

    this.loading = true;
    const subscription = this.zxxcService.getYhxxs(1).subscribe(items => {
      this.items = items;
      this.loading = false;
      subscription.unsubscribe();
    }, () => this.loading = false);
  }

  doRefresh(refresher: Refresher) {
    this.start = 1;
    const subscription = this.zxxcService.getYhxxs(1).subscribe(pizzas => {
      this.items = pizzas;
      refresher.complete()
      subscription.unsubscribe();
    }, () => refresher.complete());
  }

  openNavDetailsPage(item) {
    this.nav.push(AboutDetailsPage, { item: item });
  }

  toTop() {
    // let scrollContent: Content = <Content><any>document.getElementById("listScroll");
    // scrollContent.scrollToTop();
    // (<HTMLScriptElement>document.getElementById("listScroll")).scrollToTop();
    let scrollContent: Content = this.content;
    setTimeout(function () {
      scrollContent.scrollToTop();
    }, 100);
  }

  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');
  //   console.log('doInfinite, start is currently ' + this.start);

  //   // setTimeout(() => {
  //   //   // for (let i = 0; i < 10; i++) {
  //   //   //   this.items.push(this.zxxcService.getYhxxs(1));
  //   //   // }
  //   //   // this.items.concat(this.zxxcService.getYhxxs(2));
  //   const subscription = this.zxxcService.getYhxxs(++this.start).subscribe(pizzas => {
  //     this.items = pizzas;
  //     // refresher.complete()
  //     // infiniteScroll.complete();
  //     subscription.unsubscribe();
  //   }, () => infiniteScroll.complete());

  //   console.log('Async operation has ended');
  //   // infiniteScroll.complete();
  //   // }, 500);
  // }

  loadPeople() {

    return new Promise(resolve => {

      this.zxxcService.load(this.start)
        .then(data => {
          // console.log('aaaaa' + data);
          for (let person of data as Yhxx[]) {
            this.items.push(person);
          }

          resolve(true);

        });

    });

  }

  doInfinite(infiniteScroll: any) {
    console.log('doInfinite, start is currently ' + this.start);
    this.start += 1;

    this.loadPeople().then(() => {
      infiniteScroll.complete();
    });

  }
}