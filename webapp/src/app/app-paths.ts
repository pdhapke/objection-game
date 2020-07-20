import {WelcomeComponent} from './welcome/welcome.component';

import {paths as ObjectionGameModulePaths} from './objection-game/objection-game.module';
import {paths as RulesAndReferenceModulePaths} from './rules-and-reference/rules-and-reference.module';
import {paths as BasicInfoModulePaths} from './basic-info/basic-info.module';
import {paths as GuideModulePaths} from './guide/guide.module';
import {paths as LinksModulePaths} from './links/links.module';
import {paths as AboutModulePaths} from './about/about.module';

export default [
  ...ObjectionGameModulePaths,
  ...RulesAndReferenceModulePaths,
  ...BasicInfoModulePaths,
  ...GuideModulePaths,
  ...LinksModulePaths,
  ...AboutModulePaths,
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];
