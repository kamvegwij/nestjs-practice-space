import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
/* 
    A controller usually recieves a request from the internet: POST, GET, etc...
    The the controller will call a function from the provider/service class.
    So the controller has to instatiate a Service class object, but we don't have to
    We can use constructor(private someService: SomeService) {} and Nest Js will be able to manage how it creates the object.
*/
@Controller()
export class AuthController{
    constructor(private authService: AuthService) {} //So now Nest js will handle how to instantiate.
    
}