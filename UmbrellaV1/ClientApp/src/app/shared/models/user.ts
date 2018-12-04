import { City } from './city';
import { Advertisement } from './advertisment';
import { Role } from './role';

export class User {
  public userId: number;
  public userName: string;
  public password: string;
  public name: string;
  public mail: string;
  public phone: string;
  public cell: string;
  public address: string;
  public roleId: number;
  public cityId: number;
  public city: City;
  public role: Role;
  public advertisement: Advertisement[];
}
