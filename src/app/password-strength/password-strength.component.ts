import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PasswordStrengthComponent implements OnChanges {
  bar: string[] = ['', '', '', ''];

  @Input() public passwordToCheck: string = '';

  @Output() passwordStrength = new EventEmitter<boolean>();

  private colors = ['gray', 'red', 'yellow', 'green'];

  message: string = '';
  messageColor: string = '';

  private static checkStrength(password: string): number {
    // Flags indicating presence of different character types
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z\d]/.test(password);

    // Count the number of character types present
    const typesCount = [hasLetters, hasDigits, hasSymbols].filter(
      (type) => type
    ).length;

    // // Check if the password is empty
    // if (!password || password.trim().length === 0) {
    //   return 0; // Empty field, all sections are gray
    // }

    // Password strength calculation based on the given criteria
    if (password.length < 8) {
      return 10; // All sections are red
    } else if (typesCount === 1) {
      return 10; // Easy
    } else if (typesCount === 2) {
      return 20; // Medium
    } else if (typesCount === 3) {
      return 30; // Strong
    } else {
      return 0;
    }
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;

    this.setBarColors(4, 'gray');

    if (password) {
      // Calculate password strength
      const pwdStrength = PasswordStrengthComponent.checkStrength(password);

      // Emit password strength for external use
      this.passwordStrength.emit(pwdStrength >= 20);

      // Set bar colors based on password strength
      const color = this.getColor(pwdStrength);
      this.setBarColors(color.index, color.color);

      // Set message based on password strength
      this.message = this.getPasswordStrengthMessage(pwdStrength);
    } else {
      this.message = ''; // empty field
    }
  }

// Map password strength to color index
  private getColor(strength: number) {

    const index = Math.min(Math.floor(strength / 10), this.colors.length - 1);
    this.messageColor = this.colors[index];

    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  private setBarColors(count: number, color: string) {
    // If the field is empty, set all sections to gray
    if (!this.passwordToCheck || this.passwordToCheck.trim().length === 0) {
      this.bar = Array(count).fill('gray');
    }
    // If the field has less than 8 characters, set all sections to red
    else if (this.passwordToCheck.length < 8) {
      this.bar[1] = color;
      for (let i = 0; i < count; i++) {
        this.bar[i] = 'red';
      }
    }
    // Otherwise, set the color based on password strength
    else if (this.passwordToCheck.length <= 8) {
      this.bar[0] = color;
      for (let i = 1; i < count; i++) {
        this.bar[i] = 'gray';
      }
    }
    const pwdStrength = PasswordStrengthComponent.checkStrength(
      this.passwordToCheck
    );
     // For medium-strength password, set the first three sections to yellow and the last one to gray
    if (pwdStrength === 20) {

      this.bar[2] = color;
      for (let i = 0; i < count; i++) {
        this.bar[i] = 'yellow';
      }

      this.bar[count] = 'gray';
    }

    if (pwdStrength === 30) {
      this.bar[3] = color;
      for (let i = 0; i < count; i++) {
        this.bar[i] = 'green';
      }
    }
  }

  private getPasswordStrengthMessage(strength: number): string {
    // Map password strength to message
    if (strength === 10) {
      return 'Easy Password';
    } else if (strength === 20) {
      return 'Medium Password';
    } else if (strength === 30) {
      return 'Strong Password';
    } else {
      return '';
    }
  }
}
