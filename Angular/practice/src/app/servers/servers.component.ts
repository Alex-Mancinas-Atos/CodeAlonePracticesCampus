import { Component, OnInit } from '@angular/core';


@Component({
  // selector '[app-servers]'
  // selector: '.app-servers'
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
 allowNewServer = false;
 serverCreatedStatus = 'No server created';
 serverName = 'TestServer';
 serverCreated = false;
 servers = ['Test Server', 'Test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    // this.serverCreatedStatus = 'Server was Created! Name is '+ this.serverName;
  }

  onUpdateServerName($event: Event){
    this.serverName = (<HTMLInputElement>event?.target).value
  }
}
