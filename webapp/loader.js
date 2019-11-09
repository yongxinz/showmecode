const componentsName = `
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  CollapseTransition
`.split(',').map(i => i.trim()).sort().reverse();

const tag = {};
componentsName.forEach(name => {
  tag[name] = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
});
module.exports = function (source) {
  this.cacheable();

  const prefix = 'el';

  Object.keys(tag).forEach(i => {
    source = source.replace(new RegExp(`<${i}(\\s+|>)`, 'g'), (match) => {
      return match.replace(i, `${prefix}-${tag[i]}`);
    })
      .replace(new RegExp(`</${i}>`, 'g'), `</${prefix}-${tag[i]}>`);
  });

  return source;
};
