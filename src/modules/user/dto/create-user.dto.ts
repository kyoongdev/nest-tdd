import { Property } from 'kyoongdev-nestjs';

export class CreateUserDTO {
  @Property({ apiProperty: { type: 'string' } })
  name: string;

  @Property({ apiProperty: { type: 'string' } })
  email: string;

  @Property({ apiProperty: { type: 'string' } })
  age: number;
}
