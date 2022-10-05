import { UserService } from './../services/user.service';
import { Letter, Order } from '../entities/letter.entity';
import { Post } from '../entities/post.entity';
import { Address, User } from '../entities/user.entity';
import { PostService } from '../services/post.service';
import { Container } from 'typedi';
export class LetterController {

  public _userService: UserService;
  public _postService: PostService

  constructor() {
    this._userService = Container.get(UserService);
    this._postService = Container.get(PostService);
  }

  public async getLetterByUserId(userId: number): Promise<Letter | null> {
    const users: User[] = await this._userService.getUsers();
    const posts: Post[] = await this._postService.getPosts();
    const user = users.filter(user => user.id === userId);
    if (!user.length) return null;
    return this.organizeUsersAndPosts(user, posts);
  }

  public async getLetters(): Promise<Letter> {
    const users: User[] = await this._userService.getUsers();
    const posts: Post[] = await this._postService.getPosts();
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
}
