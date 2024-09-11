/**
 * hasNextPage: are there more items to load?
 * isNextPageLoading: are we currently loading a page of items?
 * items: array of items loaded
 * loadNextPage: callback function for loading the next page
 */

export interface ExampleWrapperProps {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: Array<any>;
  loadNextPage: () => void;
}
