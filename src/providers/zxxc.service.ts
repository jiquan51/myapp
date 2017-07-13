import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Yhxx } from '../models';
import { Zxxc } from "../models";

@Injectable()
export class ZxxcService {

    constructor(private http: Http) { }

    //获取有害信息
    getYhxxs(page): Observable<Yhxx[]> {
        // Parameters obj-
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', page);
        params.set('pageSize', '10');   //&rows=10

        let requestOptions = new RequestOptions();
        requestOptions.params = params;
        return this.http
            .get('http://58.213.122.126:18081/sysmanager/framework/pageQuery.action?sid=com.cetc28.xcb.dict.mapper.MgcZxxcEntityMapper.selectSelective', requestOptions)
            .delay(1000)
            .map((res: Response) => res.json())
            .map((obj: Object) => {
                return (obj as Zxxc).rows;
            });
    }

    load(start: number = 1) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('page', start.toString());
        params.set('pageSize', '10');   //&rows=10

        let requestOptions = new RequestOptions();
        requestOptions.params = params;
        return new Promise(resolve => {
            this.http
                .get('http://58.213.122.126:18081/sysmanager/framework/pageQuery.action?sid=com.cetc28.xcb.dict.mapper.MgcZxxcEntityMapper.selectSelective', requestOptions)
                .map(res => res.json())
                .map((obj: Object) => {
                    return (obj as Zxxc).rows;
                })
                .subscribe(data => {

                    resolve(data);

                });
        });
    }

    //   getYhxx(id): Observable<Yhxx> {
    //     return this.http
    //       .get('assets/pizza.json')
    //       .map((res: Response) => res.json())
    //       .map((pizzas: Pizza[]) => {
    //         for (let pizza of pizzas) {
    //           if (pizza.id === id) {
    //             return pizza;
    //           }
    //         }
    //       });
    //   }
}