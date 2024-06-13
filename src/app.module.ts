import { Module } from '@nestjs/common';
import { HealthCheckController } from '@core/healthcheck/healthcheck.controller';
import { SwaggerModule } from '@common/swagger/swagger.module';
import { InfraModule } from '@config/infra.module';

const restImports = [InfraModule, SwaggerModule];

@Module({
  imports: [...restImports],
  controllers: [HealthCheckController],
})
export class AppModule {}
