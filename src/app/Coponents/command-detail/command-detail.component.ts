import {Component, OnInit} from '@angular/core';
import {ValidatedCommand} from "../../Models/validatedCommand";
import {CommandService} from "../../services/command/command.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.css']
})
export class CommandDetailComponent implements OnInit{
  command?: ValidatedCommand;

  constructor(private commandService: CommandService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn()){
      window.alert("Vous n'êtes pas authentifié");
      this.router.navigate(["/login"]);
      return;
    }
    this.getCommandById();
  }

  getCommandById(){
    const id:number= this.route.snapshot.params['id'];
    this.command = this.commandService.getValidatedCommandById(id);
  }

}
