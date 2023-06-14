import { Component } from '@angular/core'; 

@Component({
  selector: 'app-amit-rakte',
  templateUrl: './amit-rakte.component.html',
  styleUrls: ['./amit-rakte.component.css']
})
export class AmitRakteComponent {
mailUs()
{
  alert("Thanks for choosing us !\n\nDeveloper's Mail: mayank.3900.mk@gmail.com")
}
phoneUs()
{
  alert("Thanks for choosing us !\n\nDeveloper's Mobile: +91 7004216514")
}
webUs()
{
  window.location.href="https://github.com/Ameet-Rakte/Complaint-Redressal-System";
}
}
