import { IUser } from './user.interface';

export interface IDoubleV {
  incomplete_results: boolean;
  items: Array<IUser>;
  total_count: number;
}
