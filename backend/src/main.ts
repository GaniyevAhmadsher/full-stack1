import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS sozlamalari - React frontend bilan ishlash uchun
  app.enableCors({
    origin: 'http://localhost:3000', // React dev server
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Backend server ${port} portda ishlamoqda`);
}
bootstrap();
