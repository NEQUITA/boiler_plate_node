import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        id: any;
        email: any;
        firstName: any;
        lastName: any;
        fullName: any;
        avatarUrl: any;
        userType: any;
        emailConfirmed: any;
        isActive: any;
        year: any;
        period: any;
    }>;
}
export {};
