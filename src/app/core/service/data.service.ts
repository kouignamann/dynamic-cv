import {Injectable} from "@angular/core";
import {Category} from "../core.model";

@Injectable()
export class DataService {

    getCategories(): Array<Category> {
        return [
            {name:'Profil', iconUrl: '/assets/icon/user.svg'},
            {name:'Compétences', iconUrl: '/assets/icon/settings.svg'},
            {name:'Formation', iconUrl: '/assets/icon/book.svg'},
            {name:'Expérience', iconUrl: '/assets/icon/briefcase.svg'},
        ];
    }
}
