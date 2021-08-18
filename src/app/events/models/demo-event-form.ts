import { FormGroup, FormControl, Validators } from "@angular/forms";
export class DemoEventForm {
  public eventForm: FormGroup = new FormGroup({
    EventId: new FormControl(undefined, Validators.required),
    EventCode: new FormControl(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    EventName: new FormControl(undefined, Validators.required),
    Description: new FormControl(),
    StartDate: new FormControl(),
    EndDate: new FormControl(),
    Fees: new FormControl(),
    SeatsFilled: new FormControl(0, [Validators.min(0), Validators.max(100)]),
    Logo: new FormControl("images/jq3.png"),
  })
}
