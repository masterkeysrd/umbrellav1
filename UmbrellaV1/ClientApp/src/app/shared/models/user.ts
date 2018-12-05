import { City } from './city';
import { Advertisement } from './advertisement';
import { Role } from './role';

export class User {
  public UserId: number;
  public UserName: string;
  public Password: string;
  public Name: string;
  public Mail: string;
  public Phone: string;
  public Cell: string;
  public Address: string;
  public RoleId: number;
  public CityId: number;
  public City: City;
  public Role: Role;
  public Advertisement: Advertisement[];
}
