import {Injectable} from "@angular/core";
import {Card} from "../card";

@Injectable({
  providedIn: 'root'
})
export class Local_cardsService {
constructor() {}
public cards: Card[] = [];

}

