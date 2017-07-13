import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mgcType'
})

export class MgcTypePipe implements PipeTransform {
  transform(mgcType: string) : any {
    let matches: string = '';

    switch (mgcType) {
        case '1':
            matches = '新闻错别字';
            break;
        case '2':
            matches = '网名ID'
            break;
        case '3':
            matches = '贴文'
            break;
        case '4':
            matches = '其他'
            break;
    
        default:
            break;
    }
    return matches;
  }
}