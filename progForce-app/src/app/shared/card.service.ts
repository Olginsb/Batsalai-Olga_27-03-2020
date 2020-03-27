import {Injectable} from "@angular/core";
import {Card} from "../card";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Injectable({providedIn: 'root'})
export class CardService {
  public cards: Card[] = [];
  private selected : boolean = false;
  private cardUrl = 'http://my-json-server.typicode.com/moviedb-tech/movies/list';
  private idCard: string =' http://my-json-server.typicode.com/moviedb-tech/movies/list/{ID}';

  constructor(private http: HttpClient) {
  }

    getCards(): Observable<Card[]> {
      return  this.http.get<Card[]>(this.cardUrl)
        .pipe(tap(cards => this.cards = cards))
    }


  getFavoriteListIds(): any[] {
    const listData = localStorage.getItem('favorite-list-ids');
    let list = [];
    if (listData) {
      try {
        list = JSON.parse(listData) || [];
      } catch (error) {}
    }
    return list;
  }

  addFavoriteListId(id: any) {
    const ids = this.getFavoriteListIds();
    ids.push(id);
    localStorage.setItem('favorite-list-ids', JSON.stringify(ids));
    this.selected = !this.selected;
  }

  removeFavoriteListId(id: any) {
    let ids = this.getFavoriteListIds();
    ids = ids.filter(listId => listId !== id);
    localStorage.setItem('favorite-list-ids', JSON.stringify(ids));
  }

  getFavoriteList() {
    const favoriteIds = this.getFavoriteListIds();
    return this.cards.filter(card => favoriteIds.indexOf(card.id) !== -1);
  }


}
