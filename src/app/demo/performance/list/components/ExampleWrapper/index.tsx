import React, { useCallback, useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { ExampleWrapperProps } from "../../types/types.props";

function ExampleWrapper(props: ExampleWrapperProps) {
  const { hasNextPage, isNextPageLoading, items, loadNextPage } = props;

  const itemCount = useMemo(
    () => (hasNextPage ? items.length + 1 : items.length),
    [hasNextPage, items]
  );

  const loadMoreItems = useMemo(
    () => (isNextPageLoading ? () => {} : loadNextPage),
    [isNextPageLoading]
  );

  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  const Item = ({ index, style }) => {
    let content;
    if (isItemLoaded(index)) {
      content = items[index].name;
    } else {
      content = "Loading...";
    }

    return (
      <div
        style={{
          ...style,
          backgroundColor: "#ddd",
          borderBottom: "1px solid #333",
        }}
      >
        {content}
      </div>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className="List"
          height={150}
          itemCount={itemCount}
          itemSize={30}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={300}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  );
}

export default ExampleWrapper;
