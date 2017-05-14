import { BucketListItem } from "./bucket-list-item";


export interface BucketList {
  id : number;
  name: string;
  created_by: string;
  items: BucketListItem[]
  date_created: string;
  date_modified: string;
  url: string;
}
