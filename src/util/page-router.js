import { directive } from "lit-html";
import { BehaviorSubject, pipe } from "rxjs";
import { distinctUntilChanged, map, shareReplay } from "rxjs/operators";

const resolved = new WeakSet()
export const queryString$ = new BehaviorSubject('').pipe(distinctUntilChanged(),shareReplay(1));

export const queryParamMapper = (queryParam) => {
    return map(queryString => {
        const urlParams = new URLSearchParams(queryString);
        const category = urlParams.get(queryParam);
        return category? [category]: []
    })
}


export const loaderSubject$ = new BehaviorSubject(false)
export const loader$ = loaderSubject$.pipe(distinctUntilChanged(),shareReplay(1));
export const routerSubject$ = new BehaviorSubject(true)
export const router$ = routerSubject$.pipe(distinctUntilChanged(),shareReplay(1));

export const lazyLoad = directive((importPromise, value)  => 
    (part) => {
        if(!resolved.has(part)){
            importPromise.then(() => resolved.add(part))
        }
        part.setValue(value)
    }
)