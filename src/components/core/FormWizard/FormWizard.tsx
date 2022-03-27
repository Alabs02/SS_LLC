// STYLES
import './FormWizard.scss';

import { Fragment, Component } from 'react';
import classnames from 'classnames';

// INTERFACES
import {
  IFormWizardContent,
  IFormWizardPanel,
  ITabItem,
  IChildren,
} from 'src/interfaces';

class FormWizard extends Component {
  static Wrapper = (_props: IChildren) => {
    return (
      <div className="form-wizard">
        {_props.children}
      </div>
    );
  }

  static Panel = (_props: IFormWizardPanel) => {
    const tabClassnames = (tab: ITabItem) => ({
      'form-wizard__item--active': tab?.tabID === _props.selectedTab,
      'form-wizard__item--inactive': tab?.tabID !== _props.selectedTab
    });

    const tabIconClassnames = (tab: ITabItem) => ({
      'form-wizard__item-icon--active': tab?.tabID === _props.selectedTab,
      'form-wizard__item-icon--inactive': tab?.tabID !== _props.selectedTab
    });

    const tabTitleClassnames = (tab: ITabItem) => ({
      'form-wizard__item-title--active': tab?.tabID === _props.selectedTab,
      'form-wizard__item-title--inactive': tab?.tabID !== _props.selectedTab
    });

    const renderTabItems = () => {
      return _props.tabs.map((tab: ITabItem, index: number) => (
        <button onClick={() => _props.setSelectedTab(tab.tabID)} type={'button'} key={tab.tabID+index} className="form-wizard__item msb-20 msb-md-0">
          <div className={classnames("form-wizard__item-circle", tabClassnames(tab))}>
            <tab.icon fontSize={20} className={classnames(tabIconClassnames(tab))} />
          </div>
          <div className={classnames("fs-14 lh-20 mst-4 fw-semi-bold", tabTitleClassnames(tab))}>{tab.title}</div>
        </button>
      ));
    }

    return (
      <Fragment>
        <div className="form-wizard__panel">
          {renderTabItems()}
        </div>
      </Fragment>
    );
  }

  static Content = (_props: IFormWizardContent) => {
    return _props.tabID === _props.selectedTab ? (
      <div className="form-wizard__content mst-60">
        {_props.children}
      </div>
    ): null;
  }

  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

export { FormWizard as default };