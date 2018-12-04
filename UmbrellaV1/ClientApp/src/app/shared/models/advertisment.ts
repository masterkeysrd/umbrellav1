import { City } from './city';
import { SubCategory } from './sub-category';
import { User } from './user';

export class Advertisement {
  public advertisementId: number;
  public title: string;
  public description: string;
  public price: number;
  public sserId: number;
  public cityId: number;
  public createdDate: Date;
  public subCategoryId: number;
  public city: City;
  public subCategory: SubCategory;
  public user: User;
  }
