import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data = new BehaviorSubject('');
  public currentData = this.data.asObservable();
  
  constructor() { }

  // Defualt values
  private defaultMode = 'c_cpp';
  private defaultTheme = 'monokai';

  // Fetched From server
  private userPreferedMode = undefined;
  private userPreferedTheme = undefined;

  public choosen = {
    mode: this.userPreferedMode || this.defaultMode,
    theme: this.userPreferedTheme || this.defaultTheme
  }

  giveMode() {return this.choosen['mode'];}
  giveTheme() {return this.choosen['theme'];}

  setMode(mode: String) {this.choosen['mode'] = mode;}
  setTheme(theme) {
    this.choosen['theme'] = theme;
    this.data.next(theme);
  }

  giveCodes(): any {
    return [
      {
        caption: 'Dijkstra', 
        link: 'xyz'
      }, 
      {
        caption: 'Prims MST', 
        link: 'pyz'
      }, 
      {
        caption: 'Disjoint-Set-Union', 
        link: 'pyr'
      }, 
      {
        caption: '0/1 Knapsack-DP', 
        link: 'xyr'
      }, 
      {
        caption: 'Graham Scan', 
        link: 'xqz'
      }, 
      {
        caption: 'Ford-Fulkerson Flow', 
        link: 'pqr'
      }, 
      {
        caption: 'Bellmen-Ford', 
        link: 'xqr'
      }
    ]
  }
}