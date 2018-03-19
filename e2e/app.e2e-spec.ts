import { AppPage } from './app.po';

describe('ng-anims-demo App', () => {

    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display Navbar Brand', () => {
        page.navigateTo();
        expect(page.getNavbarBrand()).toEqual('Angular Demo');
    });

});
