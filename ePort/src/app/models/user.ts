export interface User {
    id: string;
    username: string;
    password: string;
    role: string;
    email: string;
    codename: string;
    shippingAddress: string;
    funds: number;
    paymentID: string;
    isActive: boolean;
}