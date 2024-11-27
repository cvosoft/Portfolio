import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {


  constructor(public translate: TranslateService) {

  }

  http = inject(HttpClient);


  contactData = {
    name: "",
    email: "",
    message: "",
    accepted: ""
  };



  mailTest = false;

  post = {
    endPoint: 'https://christophvoelker.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  showSuccess = false;
  secLeft = 5;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.secLeft = 5;
            this.showSuccess = true;
            ngForm.resetForm();            

            setInterval(() => {
              if (this.showSuccess) {
                this.secLeft--;
              }
            }, 1000);

            setTimeout(() => {
              this.showSuccess = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

}

