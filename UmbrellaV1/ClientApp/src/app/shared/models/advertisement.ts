import { City } from './city';
import { SubCategory } from './sub-category';
import { User } from './user';
import { Moment } from 'moment';

export class Advertisement {
  public advertisementId: number;
  public title: string;
  public description: string;
  public price: number;
  public userId: number;
  public cityId: number;
  public createdDate: Moment;
  public subCategoryId: number;
  public city: City;
  public subCategory: SubCategory;
  public user: User;
  }
