import { Module } from '@nestjs/common';
import { SwaggerModule } from '@common/swagger/swagger.module';
import { InfraModule } from '@config/infra.module';
import { GracefulShutdownModule } from 'nestjs-graceful-shutdown';
import { HealthCheckController } from './modules/healthcheck/healthcheck.controller';
import { LoginController } from './modules/login/login.controller';

const restImports = [
  InfraModule,
  SwaggerModule,
];

@Module({
  imports: [GracefulShutdownModule.forRoot(), ...restImports],
  controllers: [HealthCheckController, LoginController],
})
export class AppModule {}
