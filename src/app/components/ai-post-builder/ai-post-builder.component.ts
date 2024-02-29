import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ai-post-builder',
  templateUrl: './ai-post-builder.component.html',
  styleUrls: ['./ai-post-builder.component.less']
})
export class AiPostBuilderComponent implements OnInit {
  platforms = [
    "LinkedIn",
    "Instagram",
    "Facebook",
    "Thread",
    "X"
  ]

  selectedPlatforms:any;
  mode:any = "auto";
  file:any
  progress = 0
  fileName = ""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  upload(){}
  
  selectFile(e:Event){}

  generateContent(){
    Swal.fire({
      title: "Generation of the content has been started. Please check the posts after some time in 'AI Generated Posts' section.",
      confirmButtonText: "OK",
      allowOutsideClick:false
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      this.router.navigate(["generated-posts"]);
    });
  }
}
