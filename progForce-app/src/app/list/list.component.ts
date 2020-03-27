import {Component, OnInit} from '@angular/core';
import {CardService} from "../shared/card.service";
import {Card} from "../card";
import {MatDialog} from "@angular/material/dialog";
import {CardComponent} from "../card/card.component";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
    public selected: boolean = false;
    constructor (
    private cardService: CardService,
    public dialog: MatDialog) { }

    public cards: Card[] = [];

  ngOnInit() {
    this.getCard();
  }
  getCard():void {
    this.cardService.getCards()
      .subscribe(card => {

        this.cards = card})
  }

  showDetails(card) {
    this.dialog.open(CardComponent, {data: {card: card}});
  }


  // }


}
