import { Injectable } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Post } from './post';

export function getAllPosts() {
  return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
}
export async function del(i: number): Promise<void> {
  const response = await fetch(`http://localhost:3000/posts/${i}`, {
    method: 'DELETE',
  })
  return response.json();
}

export async function put(i: number, data: Post) {
  const response = await fetch(`http://localhost:3000/posts/${i}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}
export async function post(i: number, data: Post) {
  const response = await fetch(`http://localhost:3000/posts/${i}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {


    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = []
  postsActive: Post[] = []
  postInactive: Post[] = []

  constructor() {
    // getAllPosts().then(res=>{
    //   this.posts = res
    //   this.postInactive = res.filter(e=>!e.active)
    //   this.postsActive = res.filter(e=>e.active)
    // })
  }

  getActivePost() {
    return this.postsActive
  }
  getInactivePost() {
    return this.postInactive
  }

  private getAllPosts() {
    return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
  }

  getPostFiltrati(a: boolean) {
    return getAllPosts().then(res => {
      return res.filter((e) => {
        return e.active == a
      })
    })
  }

}
