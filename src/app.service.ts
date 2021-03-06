import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
<<<<<<< HEAD
    return 'Welcome to EddieHub';
=======
    return 'Hello World!';
>>>>>>> 4688b98c711080fb1afb8b7aa17b38832c00c359
  }
}
