import {Component, OnInit} from '@angular/core';
import {ValidatedCommand} from "../../Models/validatedCommand";
import {CommandService} from "../../services/command/command.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-list-command',
  templateUrl: './list-command.component.html',
  styleUrls: ['./list-command.component.css']
})
export class ListCommandComponent implements OnInit{
  commands: ValidatedCommand[] = [];

  constructor(private commandService: CommandService,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn()){
      window.alert("Vous n'êtes pas authentifié");
      this.router.navigate(["/login"]);
      return;
    }
    this.getValidatedCommands();
  }

  getValidatedCommands(){
    this.commands = this.commandService.getValidatedCommands();
  }

}
