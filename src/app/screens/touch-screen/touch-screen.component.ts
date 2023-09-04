import { AfterViewInit, Component, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from 'src/app/components/input/input.component';
import { TextareaComponent } from 'src/app/components/textarea/textarea.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SocialsComponent } from 'src/app/components/socials/socials.component';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { EmailService } from 'src/app/services/email/email.service';
import { DownloadButtonComponent } from 'src/app/components/download-button/download-button.component';
import { ScreenContainerComponent } from 'src/app/components/screen-container/screen-container.component';

@Component({
  selector: 'jax-touch-screen',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatIconModule,
    InputComponent, TextareaComponent, SocialsComponent, IconButtonComponent, DownloadButtonComponent, ScreenContainerComponent],
  templateUrl: './touch-screen.component.html',
  styleUrls: ['./touch-screen.component.scss']
})
export class TouchScreenComponent implements AfterViewInit {

  @ViewChildren(InputComponent)
  inputs!: InputComponent[];
  nameInput!: InputComponent;
  emailInput!: InputComponent;

  @ViewChildren(TextareaComponent)
  textAreaInputs!: TextareaComponent[];
  messageInput!: TextareaComponent;

  name = '';
  email = '';
  message = '';

  constructor(private readonly emailService: EmailService) {

  }

  ngAfterViewInit(): void {
    this.inputs.forEach((comp, index) => {
      if (index === 0) {
        this.nameInput = comp;
      } else {
        this.emailInput = comp;
      }
    });

    this.textAreaInputs.forEach(comp => {
      this.messageInput = comp;
    });
  }

  formChange = () => {
    this.name = this.nameInput.getValue();
    this.email = this.emailInput.getValue();
    this.message = this.messageInput.getValue();
  }

  formValid = () => {
    return (
      this.nameValid() &&
      this.emailValid() && 
      this.messageValid()
    );
  }

  private nameValid = () => (
    this.name.length > 0
  )

  private emailValid = () => (
    this.email.length >= 3 &&
    this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  );

  private messageValid = () => (
    this.message.length > 0
  )

  submitForm = async () => {
      await this.emailService.sendEmail(this.name, this.message, this.email);
      this.email = '';
      this.name = '';
      this.message = ''
      this.nameInput.input.nativeElement.value = '';
      this.emailInput.input.nativeElement.value = '';
      this.messageInput.textArea.nativeElement.value = '';
  }
}
