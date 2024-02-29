import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generated-posts',
  templateUrl: './generated-posts.component.html',
  styleUrls: ['./generated-posts.component.less'],
})
export class GeneratedPostsComponent implements OnInit {
  posts = [
    {feature:"API Service", posts:[
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
    ]},
    {feature:"Onboarding Bot", posts:[
      {
        id: 'lkjlkjfsdf',
        text: "At Quinnox, the commitment to nurturing employee growth and improvement is paramount. By fostering an environment that values continuous learning and professional development, Quinnox empowers its employees to evolve and thrive within the organization."+
          "This week as part of our #HumansOfQuinnox initiative, we share the incredible journey of Munawar Noorani whose impactful presence and dedication have enriched Quinnox for over 8 years. His evolution across multiple roles reflects the culture of learning and innovation that defines Quinnox."+
          "👉 Read the full story here: https://lnkd.in/gn9yudef #Employeestory #Quinnox #LifeAtQuinnox #employeesatisfaction #AccelerateSuccess ",
        image:
          'https://media.licdn.com/dms/image/D5622AQF7Rn42B_-wlg/feedshare-shrink_800/0/1708693037074?e=1712188800&v=beta&t=WCsCuzvV1KEwqllUquitgQw4qmBt1hu1cyRoCernCTQ',
        recommendation_percantage:40,
        shouldBerejected:false
      },
      {
        id: 'lkjlkjfsdf',
        text: "At Quinnox, the commitment to nurturing employee growth and improvement is paramount. By fostering an environment that values continuous learning and professional development, Quinnox empowers its employees to evolve and thrive within the organization."+
          "This week as part of our #HumansOfQuinnox initiative, we share the incredible journey of Munawar Noorani whose impactful presence and dedication have enriched Quinnox for over 8 years. His evolution across multiple roles reflects the culture of learning and innovation that defines Quinnox."+
          "👉 Read the full story here: https://lnkd.in/gn9yudef #Employeestory #Quinnox #LifeAtQuinnox #employeesatisfaction #AccelerateSuccess ",
        image:
          'https://media.licdn.com/dms/image/D5622AQF7Rn42B_-wlg/feedshare-shrink_800/0/1708693037074?e=1712188800&v=beta&t=WCsCuzvV1KEwqllUquitgQw4qmBt1hu1cyRoCernCTQ',
          recommendation_percantage:50,
          shouldBerejected:false
      }
    ]}
  ];
  
  currentTime = new Date();
  constructor() {}

  ngOnInit(): void {}

  approvePost(){
    Swal.fire({
      title: "Do you want to approve this post? Once approved, it will be posted to the social platforms.",
      showDenyButton: true,
      confirmButtonText: "Approve",
      denyButtonText: `Let's Reject It`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Approved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Post is rejected", "", "info");
      }
    });
  }

  rejctPost(post:any){
    Swal.fire({
      title: "Do you want to rejct this post? It cannot be undone.",
      showDenyButton: true,
      confirmButtonText: "Reject",
      denyButtonText: `Cancel`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Rejected!", "", "success");
      }
    });
  }
}
