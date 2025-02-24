import { Routes } from '@angular/router';
import {BookdetailPageComponent} from "./pages/bookdetail-page/bookdetail-page.component";
import {BooklistPageComponent} from "./pages/booklist-page/booklist-page.component";

export const routes: Routes = [
    {
        path: 'detail/:id',
        component: BookdetailPageComponent
    },
    {
        path: '',
        component: BooklistPageComponent
    }
];
