import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './healthcheck.controller';

describe('HealthCheckController', () => {
  let healthCheckController: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    healthCheckController = module.get<HealthCheckController>(
      HealthCheckController,
    );
  });

  describe('getHealthCheck', () => {
    it('should return online message', () => {
      const result = healthCheckController.getHealthCheck();

      expect(result).toEqual({ message: 'online' });
    });
  });
});
