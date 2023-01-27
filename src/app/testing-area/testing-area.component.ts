import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-testing-area',
  templateUrl: './testing-area.component.html',
  styleUrls: ['./testing-area.component.scss']
})
export class TestingAreaComponent implements OnInit {

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
  }
  showTopCenter() {
    this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: 'Message Content'});
}


}
