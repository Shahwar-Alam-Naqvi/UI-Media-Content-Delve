import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.less']
})
export class IntegrationsComponent implements OnInit {
  integrations = [
    {name:'JIRA', imageUrl:"../../../assets/image/jira.jpg"},
    {name:'Confluence', imageUrl:"../../../assets/image/confluence.webp"},
    {name:'Notion', imageUrl:"../../../assets/image/Notion_app_logo.png"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  sync(){
    Swal.fire({
      title:"Searching for the content and generating the posts",
      timer:3000,
      didOpen(popup) {
          Swal.showLoading();
      },
    }).then((result)=>{
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        Swal.close();
        setTimeout(() => {
          Swal.fire("Success","Post has been generated.","success");
        }, 500);
      }
      
    })
  }

}
