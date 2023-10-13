import { Component } from '@angular/core';
import { Card } from '../../Card';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  cards: Card[];
  constructor() {
    this.cards = [
      {
        title: '0',
        plan: 'FREE',
        offers: [
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports',
        ],
      },
      {
        title: '9',
        plan: 'PLUS',
        offers: [
          'Unlimited Users',
          '150GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Unlimited Free Subdomains',
          'Monthly Status Reports',
        ],
      },
      {
        title: '49',
        plan: 'PRO',
        offers: [
          'Single User',
          'Single User',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports',
        ],
      },
    ];
  }
}
