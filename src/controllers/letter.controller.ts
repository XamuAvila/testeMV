import axios from 'axios';
import { Letter, Order } from '../entities/letter.entity';
import { Post } from '../entities/post.entity';
import { Address, User } from '../entities/user.entity';

export class LetterController {
  public async getLetters(): Promise<Letter> {
    const users: User[] = await this.getUsers();
    const posts: Post[] = await this.getPosts();
    return this.organizeUsersAndPosts(users, posts);
  }

  private organizeUsersAndPosts(users: User[], posts: Post[]): Letter {
    let orders: Order[] = users.map(user => {
      const order: Order = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        address: this.formatAddress(user.address),
        phone: user.phone,
        website: user.website,
        company: user.company.name,
        posts: this.getPostsFromUserId(user.id, posts)
      }
      return order;
    });

    return {
      Letter: orders
    }
  }

  private getPostsFromUserId(userId: number, posts: Post[]): Post[] {
    const foundPosts = posts.filter(post => userId == post.userId);
    if (!foundPosts.length) return [];
    const formattedPosts = foundPosts.map(post => {
      return {
        id: post.id,
        title: post.title,
        body: post.body
      }
    })
    return formattedPosts;
  }

  private formatAddress(address: Address): string {
    return `${address.street}, ${address.suite} - ${address.zipcode} ${address.city}`
  }

  private async getUsers(): Promise<User[]> {
    const usersRequest = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return usersRequest.data;
  }

  private async getPosts(): Promise<Post[]> {
    const postsRequest = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return postsRequest.data;
  }
}
