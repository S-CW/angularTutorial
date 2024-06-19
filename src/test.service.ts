import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private subject = new BehaviorSubject<number>(1);//data container

  number$: Observable<number> = this.subject.asObservable();


  //methods to modify the subject
  sendNumber() {
    const prev = this.subject.getValue() // this will return 1
    console.log(prev);
    this.subject.next(100);
    const NEW = this.subject.getValue(); // this will return 100
    console.log(NEW)
  }
}
