import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('login')
export class LoginController {
  constructor() {}

  @Get('/')
  @ApiOkResponse()
  async getLogin(
  ): Promise<string> {
    return "entrou";
  }

}
