import styles from './../Journal.module.scss';
import { IconButtons } from './IconButtons';
import { SortMenu } from './SortMenu';
import { SearchInput } from './SearchInput';
export const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <SearchInput />
      <SortMenu />
      <IconButtons />
    </div>
  );
};
