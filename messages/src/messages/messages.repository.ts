import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.getMessages();
    return messages[id];
  }

  async findAll() {
    return this.getMessages();
  }

  async create(content: string) {
    const messages = await this.getMessages();

    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      content,
    };

    await writeFile('messages.json', JSON.stringify(messages), 'utf-8');

    return messages[id];
  }

  private async getMessages() {
    const contents = await readFile('messages.json', 'utf-8');
    return JSON.parse(contents);
  }
}
