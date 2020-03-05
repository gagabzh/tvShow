import {Component, OnInit} from '@angular/core';
import {Information} from '../../models/information.model';
import {InformationsAitpService} from '../../services/informations-aitp.service';
import {InformationsModelService} from '../../services/informations-model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public informations: Information[];
  public toto = '42';

  constructor(
    private informationsAitpService: InformationsAitpService,
    private informationsModelService: InformationsModelService
  ) {
  }

  async ngOnInit() {

    this.informations = await this.informationsAitpService.list();
  }

}
