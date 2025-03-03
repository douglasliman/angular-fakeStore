import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TruncateTextPipe } from './pipe/truncate-text.pipe';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, TruncateTextPipe],
  imports: [CommonModule],
})
export class SharedModule {}
