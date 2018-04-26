import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit,
  ViewChild
} from '@angular/core';
import * as fromRoot from '../../reducers/index';
import * as layout from './shared/layout.action';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange } from '@angular/flex-layout';
import Scrollbar from 'smooth-scrollbar';
import * as hopscotch from 'hopscotch';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'vr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CommonService]
})
export class LayoutComponent implements OnInit {

  scrollbar: Scrollbar;

  layout = 'alpha'; // Layout

  sidenavOpen$: Observable<boolean>;
  sidenavCollapsed$: Observable<boolean>;
  sidenavAlign$: Observable<string>;
  sidenavMode$: Observable<string>;
  sidenavDisableClose$: Observable<boolean>;

  quickpanelOpen$: Observable<boolean>;
  quickpanelAlign = 'end';
  quickpanelMode = 'over';

  quickdetailOpen = false;

  layoutBoxed$: Observable<boolean>;

  settingsOpen$: Observable<boolean>;

  isMobile: boolean;

  cardElevation$: Observable<string>;

  buyNowToolbarVisible = false;

  private _mediaSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    // Layout
    this.store.select(fromRoot.getLayout).subscribe((layout) => {
      this.layout = layout;
      this.cd.markForCheck();
    });
    // /Layout
  }

}
