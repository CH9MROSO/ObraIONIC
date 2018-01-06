import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  public headerPost: Headers;
  public headerGet: Headers;
  token: string = '';
 /*  url: string = 'http://api-obras.local:80/api/v1.0.0'; */
  url: string = 'http://api-obras.local.192.168.1.35.xip.io:80/api/v1.0.0';
 

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders(),
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }
    if(this.token){
      reqOpts.headers = new HttpHeaders({'Authorization': 'Bearer ' + this.token})
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders(),
      };
    }
    if(this.token){
      reqOpts.headers = new HttpHeaders(
        { 'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
    }
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, id:number, body: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders(),
      };
    }
    if(this.token){
      reqOpts.headers = new HttpHeaders(
        { 'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
    }
    return this.http.post(this.url + '/' + endpoint + '/' + id, body, reqOpts);
  }

  delete(endpoint: string, id:number, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders(),
      };
    }
    if(this.token){
      reqOpts.headers = new HttpHeaders(
        { 'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
    }
    return this.http.post(this.url + '/' + endpoint + '/' + id,'', reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders(),
      };
    }
    if(this.token){
      reqOpts.headers = new HttpHeaders(
        { 'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
    }
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
