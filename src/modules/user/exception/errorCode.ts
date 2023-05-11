import { HttpStatus } from '@nestjs/common';
import type { ErrorCode } from 'common';

export const USER_ERROR_CODE: ErrorCode<'NOT_FOUND'> = {
  NOT_FOUND: {
    code: HttpStatus.NOT_FOUND,
    message: '유저를 찾을 수 없습니다.',
  },
};
