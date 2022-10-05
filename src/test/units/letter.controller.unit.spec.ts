import 'reflect-metadata';
import { LetterController } from "../../controllers/letter.controller"
describe('Letter Controller', () => {
  const letterController = new LetterController();
  test('Get Letter by Id', async () => {
    const userServiceSpy = jest.spyOn(letterController._userService, 'getUsers');
    const postServiceSpy = jest.spyOn(letterController._postService, 'getPosts');
    expect(await letterController.getLetterByUserId(1)).toMatchObject(
      expect.objectContaining({
        "Letter": expect.arrayContaining([
          {
            "id": expect.any(Number),
            "name": expect.any(String),
            "username": expect.any(String),
            "email": expect.any(String),
            "address": expect.any(String),
            "phone": expect.any(String),
            "website": expect.any(String),
            "company": expect.any(String),
            "posts": expect.arrayContaining([
              expect.objectContaining({
                "id": expect.any(Number),
                "title": expect.any(String),
                "body": expect.any(String)
              })
            ])
          }
        ])
      }));
    expect(userServiceSpy).toHaveBeenCalled();
    expect(postServiceSpy).toHaveBeenCalled();
  })
  test('Get Letters', async () => {
    const userServiceSpy = jest.spyOn(letterController._userService, 'getUsers');
    const postServiceSpy = jest.spyOn(letterController._postService, 'getPosts');
    expect(await letterController.getLetters()).toMatchObject(
      expect.objectContaining({
        "Letter": expect.arrayContaining([
          {
            "id": expect.any(Number),
            "name": expect.any(String),
            "username": expect.any(String),
            "email": expect.any(String),
            "address": expect.any(String),
            "phone": expect.any(String),
            "website": expect.any(String),
            "company": expect.any(String),
            "posts": expect.arrayContaining([
              expect.objectContaining({
                "id": expect.any(Number),
                "title": expect.any(String),
                "body": expect.any(String)
              })
            ])
          }
        ])
      }));
    expect(userServiceSpy).toHaveBeenCalled();
    expect(postServiceSpy).toHaveBeenCalled();
  })
})
