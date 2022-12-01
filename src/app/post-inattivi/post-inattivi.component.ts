import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';
import { Post } from '../post';
import { del, PostService, put } from '../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {
  d: any;
  posts: Post[] = [];
  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.postSrv.getPostFiltrati(false).then(res => this.posts = res)
  }

  elimina(i: number): void {
    del(i).then(res => {
      this.posts = this.posts.filter((e) => {
        if (e.id == i) {
          return false
        } else {
          return true;
        }
      })
    })
  }

  changeActive(i: number, post: Post): void {
    this.d = {
      id: post.id,
      title: post.title,
      body: post.body,
      active: !post.active,
      type: post.type,
    };
    put(i, this.d).then(res => {
      this.posts = this.posts.filter((e) => {
        if (e.id == i) {
          return false
        } else {
          return true;
        }
      })
    })
  }

}
