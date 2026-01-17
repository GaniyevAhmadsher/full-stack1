import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS sozlamalari - React frontend bilan ishlash uchun
  // Docker (Nginx proxy) ishlaganda frontend bir origin bo'ladi va CORS deyarli kerak bo'lmaydi.
  // Dev/POSTMAN uchun esa origin: true qulay (kelgan origin'ni ruxsat beradi).
  app.enableCors({ origin: true, credentials: true });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Backend server ${port} portda ishlamoqda`);
}
bootstrap();
