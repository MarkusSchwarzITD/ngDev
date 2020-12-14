import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { Skill } from '../skills.model';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
})
export class SkillListComponent implements OnInit {
  constructor(private service: SkillsService) {}

  skills: Skill[];

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
      console.log('skills:', this.skills);
    });
  }
}
