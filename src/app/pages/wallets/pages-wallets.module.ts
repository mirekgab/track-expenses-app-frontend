import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesWalletsManagementComponent } from './management/pages-wallets-management.component';
import { RouterModule, Routes } from '@angular/router';
import { DomainsWalletsModule } from '../../domains/wallets/domains.wallets.module';
import { PagesWalletsManagementItemComponent } from './management/wallets-management-item/pages-wallets-management-item.component';
import { MaterialModule } from '../../material.module';
import { PagesWalletsManagementAddNewWalletComponent } from './management/add-new-wallet/pages-wallets-management-add-new-wallet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesWalletsManagementEditorComponent } from './management/wallet-editor/pages-wallets-management-editor.component';
import { CommonComponentsModule } from 'src/app/common/components/common-components.module';

const routes: Routes = [
  {
    path: 'management',
    component: PagesWalletsManagementComponent,
  },
];

@NgModule({
  declarations: [
    PagesWalletsManagementComponent,
    PagesWalletsManagementItemComponent,
    PagesWalletsManagementAddNewWalletComponent,
    PagesWalletsManagementEditorComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DomainsWalletsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonComponentsModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class PagesWalletsModule {}
