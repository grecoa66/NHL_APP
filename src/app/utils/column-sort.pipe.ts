import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy'})
export class TeamSortPipe implements PipeTransform{

    transform(array: Array<any>, args?: any) : Array<any> {
        return array.sort((a, b) => {
            if(isNaN(a[args.property])) {
                if (a[args.property] < b[args.property]) {
                    return -1 * args.direction;
                }
                else if (a[args.property] > b[args.property]) {
                    return 1 * args.direction;
                }
                else {
                    return 0;
                }
            }else{
                if (parseInt(a[args.property]) < parseInt(b[args.property])) {
                    return -1 * args.direction;
                }
                else if (parseInt(a[args.property]) > parseInt(b[args.property])) {
                    return 1 * args.direction;
                }
                else {
                    return 0;
                }
            }
        });
    }
}
