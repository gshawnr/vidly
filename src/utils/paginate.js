import {  slice } from 'lodash';

export function paginate(items, pageNumber, pageSize){
  const startIndex = pageSize*(pageNumber -1);
  const endIndex = startIndex + pageSize;
  const paginatedItems = slice(items, startIndex, endIndex);
    return paginatedItems;

}