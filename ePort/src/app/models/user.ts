export class User {

    constructor(
        public id: number,
        public name: string,
        public codename: string,
        public password: string,
        public shippingAddress: string,
        public email: string
    ) { }
}