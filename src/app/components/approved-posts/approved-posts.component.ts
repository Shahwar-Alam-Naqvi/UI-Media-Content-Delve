import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approved-posts',
  templateUrl: './approved-posts.component.html',
  styleUrls: ['./approved-posts.component.less']
})
export class ApprovedPostsComponent implements OnInit {
  posts = 
    [
      {
        id: 'lkjlkjfsdf',
        text: "At Quinnox, the commitment to nurturing employee growth and improvement is paramount. By fostering an environment that values continuous learning and professional development, Quinnox empowers its employees to evolve and thrive within the organization."+
          "This week as part of our #HumansOfQuinnox initiative, we share the incredible journey of Munawar Noorani whose impactful presence and dedication have enriched Quinnox for over 8 years. His evolution across multiple roles reflects the culture of learning and innovation that defines Quinnox."+
          "👉 Read the full story here: https://lnkd.in/gn9yudef #Employeestory #Quinnox #LifeAtQuinnox #employeesatisfaction #AccelerateSuccess ",
        image:
          'https://media.licdn.com/dms/image/D5622AQF7Rn42B_-wlg/feedshare-shrink_800/0/1708693037074?e=1712188800&v=beta&t=WCsCuzvV1KEwqllUquitgQw4qmBt1hu1cyRoCernCTQ',
        recommendation_percantage:60,
        shouldBerejected:false
      },
      {
        id: 'lkjlkjfsdf',
        text: "At Quinnox, the commitment to nurturing employee growth and improvement is paramount. By fostering an environment that values continuous learning and professional development, Quinnox empowers its employees to evolve and thrive within the organization."+
          "This week as part of our #HumansOfQuinnox initiative, we share the incredible journey of Munawar Noorani whose impactful presence and dedication have enriched Quinnox for over 8 years. His evolution across multiple roles reflects the culture of learning and innovation that defines Quinnox."+
          "👉 Read the full story here: https://lnkd.in/gn9yudef #Employeestory #Quinnox #LifeAtQuinnox #employeesatisfaction #AccelerateSuccess ",
        image:
          'https://media.licdn.com/dms/image/D5622AQF7Rn42B_-wlg/feedshare-shrink_800/0/1708693037074?e=1712188800&v=beta&t=WCsCuzvV1KEwqllUquitgQw4qmBt1hu1cyRoCernCTQ',
          recommendation_percantage:30,
        shouldBerejected:false
      },
      {
        id: 'lkjlkjfsdf',
        text: "At Quinnox, the commitment to nurturing employee growth and improvement is paramount. By fostering an environment that values continuous learning and professional development, Quinnox empowers its employees to evolve and thrive within the organization."+
          "This week as part of our #HumansOfQuinnox initiative, we share the incredible journey of Munawar Noorani whose impactful presence and dedication have enriched Quinnox for over 8 years. His evolution across multiple roles reflects the culture of learning and innovation that defines Quinnox."+
          "👉 Read the full story here: https://lnkd.in/gn9yudef #Employeestory #Quinnox #LifeAtQuinnox #employeesatisfaction #AccelerateSuccess ",
        image:
          'https://media.licdn.com/dms/image/D5622AQF7Rn42B_-wlg/feedshare-shrink_800/0/1708693037074?e=1712188800&v=beta&t=WCsCuzvV1KEwqllUquitgQw4qmBt1hu1cyRoCernCTQ',
          recommendation_percantage:10,
        shouldBerejected:true
      }
    ]
  

  lists = ["dsd","Dsd","DSDS"]
  constructor() { }

  ngOnInit(): void {
  }

  listSorted(e:any){
    console.log(e)
  }
  onDragStart(i:any){

  }

  onDragEnter(i:any){

  }

  onDragEnd(){

  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.posts, event.previousIndex, event.currentIndex);
  }

  truncate(text:string){
    return text.substring(0, 100)+"..."
  }

  publishNow(post:any){
    Swal.fire({
      title: "Do you want to publish this post right now? This cannot be undone.",
      showDenyButton: true,
      confirmButtonText: "Publish",
      denyButtonText: `Cancel`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Published!", "", "success");
      } else if (result.isDenied) {
      }
    });
  }
}
