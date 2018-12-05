import { City } from './city';
import { SubCategory } from './sub-category';
import { User } from './user';
import { Moment } from 'moment';
import { Image } from './image';

export class Advertisement {
  public AdvertisementId: number;
  public Title: string;
  public Description: string;
  public Price: number;
  public UserId: number;
  public CityId: number;
  public CreatedDate: Moment;
  public SubCategoryId: number;
  public City: City;
  public SubCategory: SubCategory;
  public User: User;
  public Image: Image[];
  }
