import { Injectable } from '@angular/core';

// this service is available for injection acorss allobjects in the current ap[plication.
@Injectable({
    providedIn: 'root',
    })

export class UtilityService {
    changeStringCase(str: string, choice: string): string {
        let res: string = '';
        if(choice === 'U') {
            res = str.toUpperCase();
        }
        else if(choice === 'L') {
            res = str.toLowerCase();
        }
        return res;
    }
}