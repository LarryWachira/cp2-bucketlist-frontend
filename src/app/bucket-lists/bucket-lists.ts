import {BucketList} from "../bucket-list-details/bucket-list-details";


export interface BucketLists {
  bucketlists : BucketList[];
  total: number;
  limit: number;
  first_url: string;
  last_url: string;
  next_url: string;
  prev_url: string;
  page: number;
  pages: number;
}
