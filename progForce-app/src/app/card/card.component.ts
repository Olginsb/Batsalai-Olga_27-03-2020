import {Component, Inject, OnInit} from '@angular/core';
import {CardService} from "../shared/card.service";
import {Card} from "../card";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDialog} from "@angular/material/dialog"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {card: Card},
    private cardService: CardService) { }
    public card: Card[] = [];
    public  dialog: MatDialog;

  ngOnInit() {

  }


}
