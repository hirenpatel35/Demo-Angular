import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../models/event';



@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: Event[], ...args: string[]): Event[] {
    //console.log(args[0])
    //console.log(args[1])
    if (!value) return value;

    let fieldName = args[0] ? args[0] : null;
    let orderBy = args[1] ? args[1] : null;

    if (fieldName != null && orderBy != null) {

      value.sort((a, b) => {
        var nameA = a[fieldName],
          nameB = b[fieldName];

        if (orderBy == "asc") { //sort string ascending
          if (nameA < nameB) 
            return -1
          if (nameA > nameB)
            return 1
        } else { //sort string descending 
          if (nameA > nameB) 
            return -1
          if (nameA < nameB)
            return 1
        }
        return 0 //default return value (no sorting)
      });
    }
    return value;
  }
}
