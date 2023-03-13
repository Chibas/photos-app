import Tabs from '../ui/Tabs';

const tabOptions = [{
  title: 'Recently added',
  id: 'recent',
  clickHandler: () => {}
},
{
  title: 'Favorites',
  id: 'favorites',
  clickHandler:  () => {}
}];

export const Tab = () => <Tabs options={tabOptions} selectedOptionId='favorites' />;

export default {
  title: 'Tab',
  component: Tabs,
};