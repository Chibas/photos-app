import { MouseEventHandler } from "react";
import styled from "styled-components";

const TabsWrapper = styled.ul`
  display: flex;
  flex-direction: flex-start;
  max-width: 100%;
  margin: 20px 0 0 0;
  padding: 0;
  border-bottom: 1px solid ${ props => props.theme.borders };
  color: ${ props => props.theme.secondary };
`;

const TabElement = styled.li`
  position: relative;
  bottom: -1px;
  list-style-type: none;
  font-weight: 500;
  font-size: 16px;
  margin-right: 40px;
  padding: 18px 0;
  &.selected {
    color: ${ props => props.theme.accent };
    border-bottom: 2px solid ${ props => props.theme.accent };
  }
  &:hover {
    cursor: pointer;
  }
`;

export type TabOption = {
  title: string;
  id: string;
  clickHandler: MouseEventHandler;
}

type TabsProps = {
  options: TabOption[],
  selectedOptionId: string | null
}

const Tabs = ({ options, selectedOptionId } : TabsProps): JSX.Element => {
  return (
    <TabsWrapper>
      {
        options.map(({ id, clickHandler, title }) => (
          <TabElement key={id} className={selectedOptionId === id ? 'selected' : ''} onClick={clickHandler}>{title}</TabElement>
        ))
      }
    </TabsWrapper>
  )
};

export default Tabs;