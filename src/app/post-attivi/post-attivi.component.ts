import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Post } from '../post';
import { del, PostService, put } from './../post.service'

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  d: any;
  posts: Post[] = []

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.postSrv.getPostFiltrati(true).then(res => this.posts = res)
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
