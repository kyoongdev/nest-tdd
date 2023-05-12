import { PrismaService } from '@/database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

const Prisma = new PrismaService(new ConfigService());

export default Prisma;
