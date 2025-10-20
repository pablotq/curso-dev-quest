interface ICustomer {
    name: string;
    age: number;
}

interface ICustomerProfile extends ICustomer, IAddress {
    id: number | string;
}

interface IAddress {
    street?: string;
    city: string;
    country?: string;
}

const customer1: ICustomerProfile = {
    id: 1,
    name: "João",
    age: 30,
    city: "São Paulo",
}

//-------------------- USANDO TYPE ALIAS ----------------------

type TCustomer = {
    name: string;
    age: number;
}

type TAddress = {
    street?: string;
    city: string;
    country?: string;
}

type TCustomerProfile = TCustomer & TAddress & { id: number | string };

const customer2: TCustomerProfile = {
    id: "2",
    name: "Maria",
    age: 28,
    city: "Rio de Janeiro",
}