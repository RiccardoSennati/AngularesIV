import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService, post } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  d: any;
  postForm = this.formBuilder.group({
    title: '',
    body: '',
    type: '',
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // this.d = {
    // title: post.title,
    // body: post.body,
    // active: !post.active,
    // type: post.type,
    // }
    post(this.d)
  }
}
