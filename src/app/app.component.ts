import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

import { ConfirmPopup } from 'primeng/confirmpopup';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'primenng';
  date: Date | undefined;
  sidebarVisible: boolean = false;






}
