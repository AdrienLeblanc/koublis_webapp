import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {

  transform(data: any, filters: any): any {
    if (!data) return data;
    return data.filter(item => {
      return (item.appellation.toLowerCase().indexOf(filters.appellation.toLowerCase()) >= 0
      && item.nomChateau.toLowerCase().indexOf(filters.nomChateau.toLowerCase()) >= 0
      && item.type.toLowerCase().indexOf(filters.type.toLowerCase()) >= 0
      && item.millesime.toString().indexOf(filters.millesime.toLowerCase()) >= 0
      );
    });
  }

}
