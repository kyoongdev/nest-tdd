import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';
import Prisma from './prisma';
import { PrismaClient } from '@prisma/client';

jest.mock('./prisma', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = Prisma as unknown as DeepMockProxy<PrismaClient>;
