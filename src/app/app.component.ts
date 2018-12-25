import { Component } from '@angular/core';
import { MessageService} from './service/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  content = '';

  messages: MessageService[] = [];
  addMessage(): void {

    // 防呆，避免名称或内容是空值时也可以留言
    if (
      !this.name.trim() ||
      !this.content.trim() ||
      this.name.match("幹") ||
      this.name.match("操") ||
      this.name.match("機掰")
    ) {
      return;
    }

    // 用名称跟内容产生一个留言的资料物件
    const message = new MessageService(this.name, this.content);

    // 将留言的资料物件放进容器里
    this.messages.push(message);

    // 清空内容
    this.content = '';

  }
}
