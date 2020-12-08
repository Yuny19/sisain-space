import { Component, OnInit } from "@angular/core";
import { TransactionService, UserService } from 'src/app/service';

@Component({
    selector: 'user-info',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.scss']
})

export  class UserInformationComponent implements OnInit{
    constructor(private userService: UserService,
        private transactionService: TransactionService){}

        ngOnInit(){
            
        }
}