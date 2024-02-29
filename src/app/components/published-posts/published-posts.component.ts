import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-published-posts',
  templateUrl: './published-posts.component.html',
  styleUrls: ['./published-posts.component.less']
})
export class PublishedPostsComponent implements OnInit {
  today = new Date();
  yesterday = new Date(this.today.getTime() - (100000000 * Math.random()))
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
  constructor() { }

  ngOnInit(): void {
  }
  truncate(text:string){
    return text.substring(0, 100)+"..."
  }
}
