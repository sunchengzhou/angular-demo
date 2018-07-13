import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profilter'
})
export class ProfilterPipe implements PipeTransform {

  transform(list: any[], filterFiled: string, keyword: string): any {
    console.log('管道存在')
    if(!filterFiled || !keyword) {
      return list;
    }
    return list.filter( item => {
      let Value = item[filterFiled];
      return Value.indexOf(keyword) >= 0;
    });
  }

}
