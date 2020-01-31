import { $on, qs, qsa, pipe } from '../Util/helper.js'

export default class Header {
  constructor(navItemList, navTpl, topMenu) {
    this.navItemList = navItemList;
    this.navTpl = navTpl;
    this.topMenu = topMenu;
  }

  init() {
    this._render(this.navItemList);
  }

  _render(navItemList) {
    qs('.top').innerHTML = this.topMenu();
    qs(".nav_list").innerHTML = this.navTpl(navItemList);
  }

}
