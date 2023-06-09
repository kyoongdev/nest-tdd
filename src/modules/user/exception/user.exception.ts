import { HttpException, Injectable } from '@nestjs/common';
import type { BaseErrorCode } from '@/common';

@Injectable()
export class UserException extends HttpException {
  constructor(error: BaseErrorCode) {
    super(error.message, error.code);
  }
}
