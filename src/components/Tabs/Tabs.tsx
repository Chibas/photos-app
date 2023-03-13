import { useMemo } from "react";
import Tabs from "../../ui/Tabs";
import { filterFavorited, sortByCreatedDate } from "../../store/slices/images";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TabOption } from "../../ui/Tabs";

const TabsComponent = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const selectedOptionId = useAppSelector((state) => state.images.selectedTabId);
  const tabOptions = useMemo<TabOption[]>(() => [
    {
      title: 'Recently added',
      id: 'recent',
      clickHandler: () => { dispatch(sortByCreatedDate('recent'))}
    },
    {
      title: 'Favorites',
      id: 'favorites',
      clickHandler:  () => dispatch(filterFavorited('favorites'))
    }
  ], [dispatch]);
  return (
    <Tabs options={tabOptions} selectedOptionId={selectedOptionId} />
  )
};

export default TabsComponent;