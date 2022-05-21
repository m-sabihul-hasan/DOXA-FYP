import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { SocketService } from 'src/app/socket.service';
import { GlobalVariablesService } from 'src/app/global-variables.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private routing_service: RoutingService, private socket_service: SocketService, public global_vars: GlobalVariablesService) { }

  ngOnInit(): void {
  }

  register(data)
  {
    this.global_vars.hide_error = true;

    if (this.socket_service.validate_input(data))
    {
      if (data.password == data.confirm_password)
        this.socket_service.register(data);
      else
      {
        this.global_vars.error = "Passwords do not match.";
        this.global_vars.hide_error = false;
      }
    }
    else
    {
      this.global_vars.error = "* Required fields cannot be empty.";
      this.global_vars.hide_error = false;
    }
  }

}
