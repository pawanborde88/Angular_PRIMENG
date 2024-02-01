import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  date: Date | undefined;
  sidebarVisible: boolean = false;
  visible: boolean = false;
  @ViewChild('sidebarRef')sidebarRef!: Sidebar;

  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;
styleClass: any;
  progress: number=0;
  items: MenuItem[] | undefined;
  interval = null;
  blockedPanel: boolean = false;
  cdr: any;
  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
}

accept() {
  this.confirmPopup.accept();
}

reject() {
  this.confirmPopup.reject();
}
constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  ngOnInit(): void {

  }
confirm1(event: Event) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
}

confirm2(event: Event) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
}
confirmation(){
     this.confirmationService.confirm({
            header: 'Are you sure?',
            message: 'Please confirm to proceed.',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });

}
showDialog() {
  this.visible = true;
}
onConfirm() {
  this.messageService.clear('confirm');
  this.visible = false;
}

onReject() {
  this.messageService.clear('confirm');
  this.visible = false;
}
showConfirm() {
  if (!this.visible) {
      this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
      this.visible = true;
  }
}

DeleteCOnfirm(event: Event) {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptButtonStyleClass:"p-button-danger p-button-text",
    rejectButtonStyleClass:"p-button-text p-button-text",
    acceptIcon:"none",
    rejectIcon:"none",

    accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
    },
    reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
    }
});
}
}
