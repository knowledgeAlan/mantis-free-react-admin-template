// assets
import { DashboardOutlined,MoneyCollectOutlined} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  MoneyCollectOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const BalanceMenu = {
  id: 'group-BalanceMenu',
  title: 'Balance',
  type: 'group',
  children: [
    {
      id: 'BalanceMenu',
      title: 'Balance',
      type: 'item',
      url: '/balance',
      icon: icons.MoneyCollectOutlined,
      breadcrumbs: false
    }
  ]
};

export default BalanceMenu;
