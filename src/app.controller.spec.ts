import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
<<<<<<< HEAD
    it('should return "Welcome to EddieHub"', () => {
      expect(appController.getHello()).toBe('Welcome to EddieHub');
=======
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
>>>>>>> 4688b98c711080fb1afb8b7aa17b38832c00c359
    });
  });
});
