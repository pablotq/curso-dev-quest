import {Customer, paginationPerPage} from './customer';

interface SpeciaCustomer extends Customer {
    couponQuantity: number;
}

const specialCustomer: SpeciaCustomer = {
    name: 'Pablo',
    age: 30,
    couponQuantity: 10
};