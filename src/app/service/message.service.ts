import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
// /**
//    * 留言者的名称
//    *
//    * @type {string}
//    * @memberof Message
//    */
  name: String;

  //  /**
  //  * 留言的内容
  //  *
  //  * @type {string}
  //  * @memberof Message
  //  */
  content: String;
  //  /**
  //  * 留言的日期
  //  *
  //  * @type {Date}
  //  * @memberof Message
  //  */
  date: Date;


  messages: MessageService[] = [];
  // * Creates an instance of Message.
  // *
  // * @param {string} name - 留言者的名称
  // * @param {string} content - 留言的内容
  // * @memberof Message
  // */
  constructor(name: String,content: String) { 
    this.content=content;
    this.name=name;
    this.date=new Date();
  }


}


