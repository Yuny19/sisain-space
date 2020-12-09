import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormAddressComponent } from '../../component/form-address/form-address.component';
import { Expedition, Order } from '../../model';
import { ExpeditionService, OrderService, TransactionService } from '../../service';
import { AddressService } from '../../service/address.service';
import { normalizeFlag } from '../../utils/form.util';

//import swal
import Swal from 'sweetalert2';

@Component({
    selector: 'shopping-cart',
    styleUrls: ['./shopping-cart.component.scss'],
    templateUrl: './shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit {

    qty: number = 0;
    address: string;
    provinsi: string;
    ongkir: number = 0;
    courier: Expedition[];
    idAddress: string;
    orders: Order[];
    subTotal: number = 0;
    totalPay: number = 0;
    modalRef: BsModalRef | null;
    orderTotal: number;
    estimasi: string = "-";

    formCourier: FormGroup;
    formCheckout: FormGroup;
    formOrder: FormGroup;

    constructor(private orderService: OrderService,
        private bsModalService: BsModalService,
        private router: Router,
        private expedtionService: ExpeditionService,
        private addressService: AddressService,
        private formBuilder: FormBuilder,
        private transactionService: TransactionService,
        private toastrService: ToastrService) {
        this.formCourier = formBuilder.group({
            origin: new FormControl(null),
            destination: new FormControl(null),
            courier: new FormControl('', Validators.required)
        });
        this.formCheckout = formBuilder.group({
            namaPenerima: new FormControl('', Validators.required),
            totalProduct: new FormControl(null),
            totalPay: new FormControl(null),
            payment: new FormControl('-'),
            address: new FormControl('', Validators.required),
            expedition: new FormControl(null),
            status: new FormControl('not yet paid')
        });
        this.formOrder = formBuilder.group({
            total: new FormControl(null),
            statusOrder: new FormControl('cart'),
            totalPay: new FormControl(null)
        });
    }

    ngOnInit() {
        this.expedtionService.getAll().subscribe((data) => {
            this.courier = data
        });

        this.addressService.getAll().subscribe((data) => {
            this.setAddress(data[0]);
        });

        this.orderService.getByUser().subscribe((data) => {
            this.setOrders(data);
        });

    }

    addOrder() {
        this.router.navigateByUrl('/home');
    }

    setAddress(data: any) {
        this.expedtionService.getProvinceById(data.provinsi).subscribe((result) => {
            this.getProvince(result, data);
        });
    }

    getProvince(dataProv, data) {
        this.formCourier.get('destination').setValue(dataProv.province_id);
        this.provinsi = dataProv.province;

        if (data != null) {
            this.idAddress = data._id;
            this.address = data.detail + ', ' + data.kecamatan + ', ' + data.kabKota + ', ' + this.provinsi + ', ' + data.kodepos;
            this.formCheckout.get('address').setValue(this.address);
        }
    }

    setOngkir(event: any) {
        if (this.provinsi != null) {

            this.formCourier.get('origin').setValue("151");
            this.formCourier.get('courier').setValue(event.name);

            this.formCheckout.get('expedition').setValue(event._id);

            this.expedtionService.getCost(normalizeFlag(this.formCourier)).subscribe((data) => {
                this.setTotalPay(data[0].costs[0].cost[0]);
            });
        } else {
            this.toastrService.info('please add address');
        }

        this.expedtionService.get(event._id).subscribe((data) => {
            this.formCheckout.get('expedition').setValue(data._id);
        });


    }

    setTotalPay(data: any) {
        this.ongkir = data.value;
        this.estimasi = data.etd.split(" ", 1);;
        this.totalPay = this.totalPay + this.ongkir;
    }

    //add total product in cart
    add(id: string, total: number, price: number) {
        total = total + 1;

        let pay = total * price;

        this.formOrder.get('totalPay').setValue(pay);
        this.formOrder.get('total').setValue(total);
        this.orderService.edit(id, normalizeFlag(this.formOrder)).subscribe();
        this.orderService.get(id).subscribe();
        this.orderService.getByUser().subscribe((data) => {
            this.setOrders(data);
        });
    }

    //minus total product in cart
    minus(id: string, total: number, price: number) {
        total = total - 1;

        if (total == 0) {
            // const swalWithBootstrapButtons = Swal.mixin({
            //     customClass: {
            //         confirmButton: 'btn btn-success',
            //         cancelButton: 'btn btn-secondary'
            //     },
            //     buttonsStyling: false
            // })

            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete order?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    this.orderService.delete(id).subscribe();
                    this.orderService.getByUser().subscribe((data) => {
                        this.setOrders(data);
                    });
                    Swal.fire(
                        'Deleted!',
                        'Your order has been deleted.',
                        'success'
                    )
                }
            });
        } else {
            let pay = total * price;

            this.formOrder.get('totalPay').setValue(pay);
            this.formOrder.get('total').setValue(total);
            this.orderService.edit(id, normalizeFlag(this.formOrder)).subscribe();
            this.orderService.getByUser().subscribe((data) => {
                this.setOrders(data);
            });
        }
    }

    setOrders(orders: Order[]) {

        this.orders = orders;

        this.subTotal = 0;
        let totalProduct = 0;

        this.orders.forEach(odr => {
            this.subTotal = this.subTotal + odr.totalPay;
            totalProduct = totalProduct + odr.total;
        });

        this.formCheckout.get('totalProduct').setValue(totalProduct);

        this.setTotal(this.subTotal);

    };

    setTotal(subTotal: number) {
        this.totalPay = 0;
        this.totalPay = this.totalPay + this.ongkir + subTotal;

        this.formCheckout.get('totalPay').setValue(this.totalPay);
    };

    openModalAddress() {
        this.modalRef = this.bsModalService.show(FormAddressComponent, { class: 'modal-md' });
    }

    get namePenerima() { return this.formCheckout.get('namaPenerima'); };
    get addres() { return this.formCheckout.get('address'); };
    get courir() { return this.formCourier.get('courier'); }

    checkout() {

        this.formCheckout.markAllAsTouched;
        this.formCourier.markAllAsTouched;

        if (!this.formCourier.valid || !this.formCheckout.valid) {
            return;
        }

        this.formCheckout.get('address').setValue(this.idAddress);
        this.formCheckout.get('totalPay').setValue(this.totalPay + this.ongkir);
        this.transactionService.add(normalizeFlag(this.formCheckout)).subscribe((data) => {
            this.router.navigateByUrl('/payment/' + data._id);
            localStorage.setItem('ongkir', this.ongkir.toString());
            localStorage.setItem('subTotal', this.subTotal.toString());


        });

        this.formOrder.get('statusOrder').setValue('transaction');
        this.formOrder.get('totalPay').setValue(this.totalPay);

        this.orders.forEach(odr => {
            this.formOrder.get('total').setValue(odr.total);
            this.orderService.edit(odr._id, normalizeFlag(this.formOrder)).subscribe();
        })
    }


}