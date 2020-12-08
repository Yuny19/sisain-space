import { Component, OnInit } from "@angular/core";
import { Transaction, User } from '../../model';
import { TransactionService, UserService } from '../../service';

@Component({
    selector: 'user-info',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.scss']
})

export  class UserInformationComponent implements OnInit{
    
    transactions: Transaction[];
    user: User;

    constructor(private userService: UserService,
        private transactionService: TransactionService){}

        ngOnInit(){
            this.userService.getByUser().subscribe((data)=>{
                this.user = data;
            });

            this.transactionService.getByUser().subscribe((data)=>{
                this.transactions = data;
                console.log(data)
            });
        }
}